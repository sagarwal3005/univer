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

export default {
    ASC: {
        description: 'Преобразует символы полного (двойного) байта английских букв или катаканы внутри строки символов в символы половинного (одинарного) байта',
        abstract: 'Преобразует символы полного (двойного) байта английских букв или катаканы внутри строки символов в символы половинного (одинарного) байта',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/asc-function-0b6abf1c-c663-4004-a964-ebc00b723266',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    ARRAYTOTEXT: {
        description: 'Возвращает массив текстовых значений из любого указанного диапазона',
        abstract: 'Возвращает массив текстовых значений из любого указанного диапазона',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/arraytotext-function-9cdcad46-2fa5-4c6b-ac92-14e7bc862b8b',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    BAHTTEXT: {
        description: 'Преобразует число в текст, используя валютный формат ß (бат)',
        abstract: 'Преобразует число в текст, используя валютный формат ß (бат)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/bahttext-function-5ba4d0b4-abd3-4325-8d22-7a92d59aab9c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    CHAR: {
        description: 'Возвращает символ, указанный номером кода',
        abstract: 'Возвращает символ, указанный номером кода',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/char-function-bbd249c8-b36e-4a91-8017-1c133f9b837a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    CLEAN: {
        description: 'Удаляет все непечатаемые символы из текста',
        abstract: 'Удаляет все непечатаемые символы из текста',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/clean-function-26f3d7c5-475f-4a9c-90e5-4b8ba987ba41',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    CODE: {
        description: 'Возвращает числовой код для первого символа в текстовой строке',
        abstract: 'Возвращает числовой код для первого символа в текстовой строке',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/code-function-c32b692b-2ed0-4a04-bdd9-75640144b928',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    CONCAT: {
        description: 'Объединяет текст из нескольких диапазонов и/или строк, но не предоставляет аргументы разделителя или IgnoreEmpty.',
        abstract: 'Объединяет текст из нескольких диапазонов и/или строк, но не предоставляет аргументы разделителя или IgnoreEmpty.',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/concat-function-9b1a9a3f-94ff-41af-9736-694cbd6b4ca2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    CONCATENATE: {
        description: 'Объединяет несколько текстовых элементов в один текстовый элемент',
        abstract: 'Объединяет несколько текстовых элементов в один текстовый элемент',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d',
            },
        ],
        functionParameter: {
            text1: { name: 'Текст 1', detail: 'Первый элемент для объединения. Элемент может быть текстовым значением, числом или ссылкой на ячейку.' },
            text2: { name: 'Текст 2', detail: 'Дополнительные текстовые элементы для объединения. Можно использовать до 255 элементов, общей длиной до 8192 символов.' },
        },
    },
    DBCS: {
        description: 'Преобразует символы половинного (одинарного) байта английских букв или катаканы внутри строки символов в символы полного (двойного) байта',
        abstract: 'Преобразует символы половинного (одинарного) байта английских букв или катаканы внутри строки символов в символы полного (двойного) байта',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/dbcs-function-a4025e73-63d2-4958-9423-21a24794c9e5',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    DOLLAR: {
        description: 'Преобразует число в текст, используя валютный формат $ (доллар)',
        abstract: 'Преобразует число в текст, используя валютный формат $ (доллар)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/dollar-function-a6cd05d9-9740-4ad3-a469-8109d18ff611',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    EXACT: {
        description: 'Проверяет, идентичны ли два текстовых значения',
        abstract: 'Проверяет, идентичны ли два текстовых значения',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/exact-function-d3087698-fc15-4a15-9631-12575cf29926',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    FIND: {
        description: 'Находит одно текстовое значение внутри другого (с учетом регистра)',
        abstract: 'Находит одно текстовое значение внутри другого (с учетом регистра)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    FINDB: {
        description: 'Находит одно текстовое значение внутри другого (с учетом регистра)',
        abstract: 'Находит одно текстовое значение внутри другого (с учетом регистра)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    FIXED: {
        description: 'Форматирует число как текст с фиксированным количеством десятичных знаков',
        abstract: 'Форматирует число как текст с фиксированным количеством десятичных знаков',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/fixed-function-ffd5723c-324c-45e9-8b96-e41be2a8274a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    LEFT: {
        description: 'Возвращает крайние левые символы из текстового значения',
        abstract: 'Возвращает крайние левые символы из текстового значения',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    LEFTB: {
        description: 'Возвращает крайние левые символы из текстового значения',
        abstract: 'Возвращает крайние левые символы из текстового значения',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c',
            },
        ],
        functionParameter: {
            text: { name: 'text', detail: 'The text string that contains the characters you want to extract.' },
            numBytes: { name: 'num_bytes', detail: ' Optional. Specifies the number of bytes you want LEFTB to extract.' },
        },
    },
    LEN: {
        description: 'Возвращает количество символов в текстовой строке',
        abstract: 'Возвращает количество символов в текстовой строке',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb',
            },
        ],
        functionParameter: {
            text: { name: 'текст', detail: 'Текст, длину которого вы хотите узнать. Пробелы считаются символами.' },
        },
    },
    LENB: {
        description: 'Возвращает количество байтов, используемых для представления символов в текстовой строке.',
        abstract: 'Возвращает количество байтов, используемых для представления символов в текстовой строке',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb',
            },
        ],
        functionParameter: {
            text: { name: 'текст', detail: 'Текст, длину которого вы хотите узнать. Пробелы считаются символами.' },
        },
    },
    LOWER: {
        description: 'Преобразует текст в нижний регистр.',
        abstract: 'Преобразует текст в нижний регистр',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/lower-function-3f21df02-a80c-44b2-afaf-81358f9fdeb4',
            },
        ],
        functionParameter: {
            text: {
                name: 'текст',
                detail: 'Текст, который вы хотите преобразовать в нижний регистр. LOWER не изменяет символы в тексте, которые не являются буквами.',
            },
        },
    },
    MID: {
        description: 'Возвращает определенное количество символов из текстовой строки, начиная с указанной позиции',
        abstract: 'Возвращает определенное количество символов из текстовой строки, начиная с указанной позиции',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028',
            },
        ],
        functionParameter: {
            text: { name: 'text', detail: 'Обязательно. Строка текста, содержащая символы, которые вы хотите извлечь.' },
            startNum: { name: 'start_num', detail: 'Обязательно. Позиция первого символа, который вы хотите извлечь из текста.' },
            numChars: { name: 'num_chars', detail: 'Обязательно. Указывает количество символов, которые MID должен вернуть из текста.' },
        },
    },
    MIDB: {
        description: 'Returns a specific number of characters from a text string, starting at the position you specify, based on the number of bytes you specify.',
        abstract: 'Returns a specific number of characters from a text string, starting at the position you specify, based on the number of bytes you specify.',
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028',
            },
        ],
        functionParameter: {
            text: { name: 'text', detail: 'Required. The text string containing the characters you want to extract.' },
            startNum: { name: 'start_num', detail: 'Required. The position of the first character you want to extract in text. ' },
            numChars: { name: 'num_bytes', detail: 'Required. Specifies the number of characters you want MIDB to return from text, in bytes.' },
        },
    },
    NUMBERVALUE: {
        description: 'Преобразует текст в число независимо от региональных стандартов',
        abstract: 'Преобразует текст в число независимо от региональных стандартов',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/numbervalue-function-1b05c8cf-2bfa-4437-af70-596c7ea7d879',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    PHONETIC: {
        description: 'Извлекает фонетические (фуригана) символы из текстовой строки',
        abstract: 'Извлекает фонетические (фуригана) символы из текстовой строки',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/phonetic-function-9a329dac-0c0f-42f8-9a55-639086988554',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    PROPER: {
        description: 'Преобразует первый символ каждого слова в текстовом значении в заглавную букву',
        abstract: 'Преобразует первый символ каждого слова в текстовом значении в заглавную букву',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/proper-function-52a5a283-e8b2-49be-8506-b2887b889f94',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    REPLACE: {
        description: 'Заменяет символы в тексте',
        abstract: 'Заменяет символы в тексте',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    REPLACEB: {
        description: 'Заменяет символы в тексте',
        abstract: 'Заменяет символы в тексте',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    REPT: {
        description: 'Повторяет текст заданное количество раз',
        abstract: 'Повторяет текст заданное количество раз',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/rept-function-04c4d778-e712-43b4-9c15-d656582bb061',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    RIGHT: {
        description: 'Возвращает крайние правые символы из текстового значения',
        abstract: 'Возвращает крайние правые символы из текстового значения',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    RIGHTB: {
        description: 'Возвращает крайние правые символы из текстового значения',
        abstract: 'Возвращает крайние правые символы из текстового значения',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    SEARCH: {
        description: 'Находит одно текстовое значение внутри другого (без учета регистра)',
        abstract: 'Находит одно текстовое значение внутри другого (без учета регистра)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    SEARCHB: {
        description: 'Находит одно текстовое значение внутри другого (без учета регистра)',
        abstract: 'Находит одно текстовое значение внутри другого (без учета регистра)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    SUBSTITUTE: {
        description: 'Заменяет новый текст на старый текст в строке текста',
        abstract: 'Заменяет новый текст на старый текст в строке текста',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/substitute-function-6434944e-a904-4336-a9b0-1e58df3bc332',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    T: {
        description: 'Преобразует свои аргументы в текст',
        abstract: 'Преобразует свои аргументы в текст',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/t-function-fb83aeec-45e7-4924-af95-53e073541228',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    TEXT: {
        description: 'Форматирует число и преобразует его в текст',
        abstract: 'Форматирует число и преобразует его в текст',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c',
            },
        ],
        functionParameter: {
            value: { name: 'значение', detail: 'Числовое значение, которое вы хотите преобразовать в текст.' },
            formatText: { name: 'формат_текста', detail: 'Строка текста, которая определяет форматирование, которое вы хотите применить к указанному значению.' },
        },
    },
    TEXTAFTER: {
        description: 'Возвращает текст, который находится после указанного символа или строки',
        abstract: 'Возвращает текст, который находится после указанного символа или строки',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/textafter-function-c8db2546-5b51-416a-9690-c7e6722e90b4',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    TEXTBEFORE: {
        description: 'Возвращает текст, который находится до указанного символа или строки',
        abstract: 'Возвращает текст, который находится до указанного символа или строки',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/textbefore-function-d099c28a-dba8-448e-ac6c-f086d0fa1b29',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    TEXTJOIN: {
        description: 'Объединяет текст из нескольких диапазонов и/или строк',
        abstract: 'Объединяет текст из нескольких диапазонов и/или строк',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/textjoin-function-357b449a-ec91-49d0-80c3-0e8fc845691c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    TEXTSPLIT: {
        description: 'Разделяет текстовые строки, используя разделители столбцов и строк',
        abstract: 'Разделяет текстовые строки, используя разделители столбцов и строк',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/textsplit-function-b1ca414e-4c21-4ca0-b1b7-bdecace8a6e7',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    TRIM: {
        description: 'Удаляет пробелы из текста',
        abstract: 'Удаляет пробелы из текста',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    UNICHAR: {
        description: 'Возвращает Юникод-символ, на который ссылается заданное числовое значение',
        abstract: 'Возвращает Юникод-символ, на который ссылается заданное числовое значение',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/unichar-function-ffeb64f5-f131-44c6-b332-5cd72f0659b8',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    UNICODE: {
        description: 'Возвращает номер (кодовый пункт), соответствующий первому символу текста',
        abstract: 'Возвращает номер (кодовый пункт), соответствующий первому символу текста',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/unicode-function-adb74aaa-a2a5-4dde-aff6-966e4e81f16f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    UPPER: {
        description: 'Преобразует текст в верхний регистр',
        abstract: 'Преобразует текст в верхний регистр',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/upper-function-c11f29b3-d1a3-4537-8df6-04d0049963d6',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    VALUE: {
        description: 'Преобразует текстовый аргумент в число',
        abstract: 'Преобразует текстовый аргумент в число',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/value-function-257d0108-07dc-437d-ae1c-bc2d3953d8c2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    VALUETOTEXT: {
        description: 'Возвращает текст из любого указанного значения',
        abstract: 'Возвращает текст из любого указанного значения',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/valuetotext-function-5fff61a2-301a-4ab2-9ffa-0a5242a08fea',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    CALL: {
        description: 'Вызывает процедуру в динамической библиотеке или ресурсе кода',
        abstract: 'Вызывает процедуру в динамической библиотеке или ресурсе кода',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/call-function-32d58445-e646-4ffd-8d5e-b45077a5e995',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    EUROCONVERT: {
        description: 'Преобразует число в евро, преобразует число из евро в валюту страны-члена еврозоны или преобразует число из одной валюты страны-члена еврозоны в другую, используя евро в качестве промежуточного звена (триангуляция)',
        abstract: 'Преобразует число в евро, преобразует число из евро в валюту страны-члена еврозоны или преобразует число из одной валюты страны-члена еврозоны в другую, используя евро в качестве промежуточного звена (триангуляция)',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/euroconvert-function-79c8fd67-c665-450c-bb6c-15fc92f8345c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
    REGISTER_ID: {
        description: 'Возвращает ID регистрации указанной динамической библиотеки (DLL) или ресурса кода, который был ранее зарегистрирован',
        abstract: 'Возвращает ID регистрации указанной динамической библиотеки (DLL) или ресурса кода, который был ранее зарегистрирован',
        links: [
            {
                title: 'Инструкция',
                url: 'https://support.microsoft.com/ru-ru/office/register-id-function-f8f0af0f-fd66-4704-a0f2-87b27b175b50',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'первый' },
            number2: { name: 'number2', detail: 'второй' },
        },
    },
};

