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
import { charLenByte } from '../../../engine/utils/char-kit';
import { type BaseValueObject, ErrorValueObject } from '../../../engine/value-object/base-value-object';
import { StringValueObject } from '../../../engine/value-object/primitive-object';
import { BaseFunction } from '../../base-function';

export class Midb extends BaseFunction {
    override minParams = 3;

    override maxParams = 3;

    override calculate(text: BaseValueObject, start: BaseValueObject, byteLength: BaseValueObject) {
        if (text.isError() || start.isError() || byteLength.isError()) {
            return ErrorValueObject.create(ErrorType.VALUE);
        }

        if (text.isNull()) {
            return StringValueObject.create('');
        }

        return this._handleSingleText(text, start, byteLength);
    }

    private _sliceByBytes(text: string, start: number, byteLength: number): string {
        let byteCount = 0;
        let result = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const charByteLen = new TextEncoder().encode(char).length;

            if (byteCount >= start && byteCount < start + byteLength) {
                result += char;
            }

            byteCount += charByteLen;

            if (byteCount >= start + byteLength) {
                break;
            }
        }

        return result;
    }

    private _handleSingleText(text: BaseValueObject, start: BaseValueObject, byteLength: BaseValueObject) {
        if (!text.isString() || !start.isNumber() || !byteLength.isNumber()) {
            return ErrorValueObject.create(ErrorType.VALUE);
        }

        const textValue = text.getValue().toString();
        const startValue = start.getValue() as number;
        const byteLengthValue = byteLength.getValue() as number;

        const textByteLen = charLenByte(textValue);

        // Handle out-of-bounds or invalid start/byte length
        if (startValue <= 0 || byteLengthValue < 0 || startValue > textByteLen) {
            return StringValueObject.create('');
        }

        // Extract the substring based on byte range
        const result = this._sliceByBytes(textValue, startValue - 1, byteLengthValue);

        return StringValueObject.create(result);
    }
}
