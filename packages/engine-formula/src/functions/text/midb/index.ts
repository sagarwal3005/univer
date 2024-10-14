/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ErrorType } from '../../../basics/error-type';
import { expandArrayValueObject } from '../../../engine/utils/array-object';
import { ArrayValueObject } from '../../../engine/value-object/array-value-object';
import type { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
import { charLenByte } from '../../../engine/utils/char-kit';

export class Midb extends BaseFunction {
    override minParams = 3;
    override maxParams = 3;

    override calculate(text: BaseValueObject, startByte: BaseValueObject, numBytes: BaseValueObject) {
        if (text.isError()) {
            return text;
        }

        if (startByte.isError() || numBytes.isError()) {
            return startByte.isError() ? startByte : numBytes;
        }

        if (text.isArray()) {
            const maxRowLength = Math.max(
                text.isArray() ? (text as ArrayValueObject).getRowCount() : 1,
                startByte && startByte.isArray() ? (startByte as ArrayValueObject).getRowCount() : 1,
                numBytes && numBytes.isArray() ? (numBytes as ArrayValueObject).getRowCount() : 1
            );

            const maxColumnLength = Math.max(
                text.isArray() ? (text as ArrayValueObject).getColumnCount() : 1,
                startByte && startByte.isArray() ? (startByte as ArrayValueObject).getColumnCount() : 1,
                numBytes && numBytes.isArray() ? (numBytes as ArrayValueObject).getColumnCount() : 1
            );

            const textArray = expandArrayValueObject(maxRowLength, maxColumnLength, text);
            const startByteArray = expandArrayValueObject(maxRowLength, maxColumnLength, startByte);
            const numBytesArray = expandArrayValueObject(maxRowLength, maxColumnLength, numBytes);

            const results: (string | number | boolean | null)[][] = []; // Adjusted type
            for (let rowIndex = 0; rowIndex < maxRowLength; rowIndex++) {
                const row: (string | number | boolean | null)[] = []; // Adjusted type
                for (let columnIndex = 0; columnIndex < maxColumnLength; columnIndex++) {
                    const textValue = textArray.get(rowIndex, columnIndex);
                    if (textValue?.isError()) {
                        row.push(null);
                        continue;
                    }

                    const startByteValue = startByteArray.get(rowIndex, columnIndex);
                    const numBytesValue = numBytesArray.get(rowIndex, columnIndex);

                    if (startByteValue?.isError() || numBytesValue?.isError()) {
                        row.push(null);
                        continue;
                    }

                    const startByteNumber = startByteValue?.getValue() as number | undefined;
                    const numBytesNumber = numBytesValue?.getValue() as number | undefined;

                    if (typeof startByteNumber !== 'number' || startByteNumber < 1 || typeof numBytesNumber !== 'number' || numBytesNumber < 0) {
                        row.push(null);
                        continue;
                    }

                    const textString = `${textValue?.getValue()}`;
                    const byteLength = charLenByte(textString);

                    if (numBytesNumber === 0) {
                        row.push(''); // Changed to a string
                        continue;
                    }

                    if (startByteNumber > byteLength) {
                        row.push(null);
                        continue;
                    }

                    const endByteNumber = Math.min(startByteNumber - 1 + numBytesNumber, byteLength);
                    row.push(
                        this.sliceTextByBytes(textString, startByteNumber - 1, endByteNumber - (startByteNumber - 1))
                    ); // Push the resulting string directly
                }
                results.push(row);
            }

            return ArrayValueObject.createByArray(results); // results should be valid
        }

        return this._handleSingleText(text, startByte, numBytes);
    }

    private _handleSingleText(text: BaseValueObject, startByte: BaseValueObject, numBytes: BaseValueObject) {
        if (text.isError()) {
            return text;
        }

        const textString = `${text.getValue()}`;
        const startByteNumber = startByte.getValue() as number | undefined;
        const numBytesNumber = numBytes.getValue() as number | undefined;

        if (typeof startByteNumber !== 'number' || startByteNumber < 1 || typeof numBytesNumber !== 'number' || numBytesNumber < 0) {
            return ArrayValueObject.createByArray([[ErrorType.VALUE]]); // Changed to use ErrorType.VALUE directly
        }

        if (numBytesNumber === 0) {
            return ArrayValueObject.createByArray([['']]); // Return an empty string directly
        }

        const byteLength = charLenByte(textString);

        if (startByteNumber > byteLength) {
            return ArrayValueObject.createByArray([[ErrorType.VALUE]]); // Use ErrorType.VALUE directly
        }

        const endByteNumber = Math.min(startByteNumber - 1 + numBytesNumber, byteLength);

        // Get the sliced string directly and return it
        return ArrayValueObject.createByArray([[this.sliceTextByBytes(textString, startByteNumber - 1, endByteNumber - (startByteNumber - 1))]]);
    }

    private sliceTextByBytes(text: string, startByte: number, numBytes: number): string {
        let byteCount = 0;
        let start = 0;
        let end = 0;

        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            const charBytes = new TextEncoder().encode(char).length;

            if (byteCount >= startByte) {
                start = i;
                break;
            }
            byteCount += charBytes;
        }

        byteCount = 0;
        for (let i = start; i < text.length; i++) {
            const char = text.charAt(i);
            const charBytes = new TextEncoder().encode(char).length;

            if (byteCount >= numBytes) {
                end = i;
                break;
            }
            byteCount += charBytes;
        }

        end = end || text.length;
        return text.substring(start, end);
    }
}

