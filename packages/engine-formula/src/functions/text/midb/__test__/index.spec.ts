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

import { describe, expect, it } from 'vitest';

import { FUNCTION_NAMES_TEXT } from '../../function-names';
import { Midb } from '../index';
import { NumberValueObject, StringValueObject } from '../../../../engine/value-object/primitive-object';
import { ArrayValueObject, transformToValue, transformToValueObject } from '../../../../engine/value-object/array-value-object';
import { ErrorType } from '../../../../basics/error-type';

describe('Test MIDB function', () => {
    const midbFunction = new Midb(FUNCTION_NAMES_TEXT.MIDB);

    describe('Midb', () => {
        describe('Single Value Tests', () => {
            it('Should extract substring by bytes from single text', () => {
                const text = StringValueObject.create('Hello World');
                const startByte = NumberValueObject.create(7); // Start byte index for 'World'
                const numBytes = NumberValueObject.create(5); // Extract 5 bytes
                const result = midbFunction.calculate(text, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([['World']]);
            });

            it('Should return full text if start byte exceeds length', () => {
                const text = StringValueObject.create('Hello');
                const startByte = NumberValueObject.create(10); // Exceeding start byte
                const numBytes = NumberValueObject.create(5);
                const result = midbFunction.calculate(text, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([[ErrorType.VALUE]]);
            });

            it('Should handle extracting with byte length exceeding text length', () => {
                const text = StringValueObject.create('Hello');
                const startByte = NumberValueObject.create(1);
                const numBytes = NumberValueObject.create(10); // Exceeding text byte length
                const result = midbFunction.calculate(text, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([['Hello']]);
            });

            it('Should return an empty string for zero byte length', () => {
                const text = StringValueObject.create('Hello');
                const startByte = NumberValueObject.create(1);
                const numBytes = NumberValueObject.create(0); // Zero byte length
                const result = midbFunction.calculate(text, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([['']]);
            });

            it('Should handle negative start byte as an error', () => {
                const text = StringValueObject.create('Hello');
                const startByte = NumberValueObject.create(-1); // Negative start byte
                const numBytes = NumberValueObject.create(5);
                const result = midbFunction.calculate(text, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([[ErrorType.VALUE]]);
            });

            it('Should handle multi-byte characters (emoji) correctly', () => {
                const text = StringValueObject.create('😊Hello');
                const startByte = NumberValueObject.create(1); // Bytes needed to capture '😊'
                const numBytes = NumberValueObject.create(4); // '😊' is 4 bytes in UTF-8
                const result = midbFunction.calculate(text, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([['😊']]);
            });
        });

        describe('Array Value Tests', () => {
            it('Should extract substring from array by specifying start byte and numBytes', () => {
                const textArray = new ArrayValueObject({
                    calculateValueList: transformToValueObject([
                        ['Hello'],
                        ['World'],
                        ['Test'],
                        ['Example'],
                    ]),
                    rowCount: 4,
                    columnCount: 1,
                    unitId: '',
                    sheetId: '',
                    row: 0,
                    column: 0,
                });
                const startByte = new ArrayValueObject({
                    calculateValueList: transformToValueObject([
                        [2],
                        [1],
                        [3],
                        [4],
                    ]),
                    rowCount: 4,
                    columnCount: 1,
                    unitId: '',
                    sheetId: '',
                    row: 0,
                    column: 0,
                });
                const numBytes = new ArrayValueObject({
                    calculateValueList: transformToValueObject([
                        [3],
                        [3],
                        [2],
                        [3],
                    ]),
                    rowCount: 4,
                    columnCount: 1,
                    unitId: '',
                    sheetId: '',
                    row: 0,
                    column: 0,
                });
                const result = midbFunction.calculate(textArray, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([
                    ['ell'],
                    ['Wor'],
                    ['st'],
                    ['mpl'],
                ]);
            });

            it('Handles multi-byte characters in array', () => {
                const textArray = new ArrayValueObject({
                    calculateValueList: transformToValueObject([
                        ['😊Hello'],
                        ['😊World'],
                    ]),
                    rowCount: 2,
                    columnCount: 1,
                    unitId: '',
                    sheetId: '',
                    row: 0,
                    column: 0,
                });
                const startByte = NumberValueObject.create(1); // Start from the beginning for emoji
                const numBytes = NumberValueObject.create(4); // Emoji '😊' takes 4 bytes
                const result = midbFunction.calculate(textArray, startByte, numBytes);
                expect(transformToValue(result.getArrayValue())).toStrictEqual([
                    ['😊'],
                    ['😊'],
                ]);
            });
        });
    });
});
