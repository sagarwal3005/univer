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
        description: `Changes full-width (double-byte) English letters or katakana within a character string to half-width (single-byte) characters`,
        abstract: `Changes full-width (double-byte) English letters or katakana within a character string to half-width (single-byte) characters`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/asc-function-0b6abf1c-c663-4004-a964-ebc00b723266',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    ARRAYTOTEXT: {
        description: `Returns an array of text values from any specified range`,
        abstract: `Returns an array of text values from any specified range`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/arraytotext-function-9cdcad46-2fa5-4c6b-ac92-14e7bc862b8b',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    BAHTTEXT: {
        description: `Converts a number to text, using the ß (baht) currency format`,
        abstract: `Converts a number to text, using the ß (baht) currency format`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/bahttext-function-5ba4d0b4-abd3-4325-8d22-7a92d59aab9c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CHAR: {
        description: `Returns the character specified by the code number`,
        abstract: `Returns the character specified by the code number`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/char-function-bbd249c8-b36e-4a91-8017-1c133f9b837a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CLEAN: {
        description: `Removes all nonprintable characters from text`,
        abstract: `Removes all nonprintable characters from text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/clean-function-26f3d7c5-475f-4a9c-90e5-4b8ba987ba41',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CODE: {
        description: `Returns a numeric code for the first character in a text string`,
        abstract: `Returns a numeric code for the first character in a text string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/code-function-c32b692b-2ed0-4a04-bdd9-75640144b928',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CONCAT: {
        description: `Combines the text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.`,
        abstract: `Combines the text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/concat-function-9b1a9a3f-94ff-41af-9736-694cbd6b4ca2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CONCATENATE: {
        description: `Joins several text items into one text item`,
        abstract: `Joins several text items into one text item`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DBCS: {
        description: `Changes half-width (single-byte) English letters or katakana within a character string to full-width (double-byte) characters`,
        abstract: `Changes half-width (single-byte) English letters or katakana within a character string to full-width (double-byte) characters`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/dbcs-function-a4025e73-63d2-4958-9423-21a24794c9e5',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DOLLAR: {
        description: `Converts a number to text, using the $ (dollar) currency format`,
        abstract: `Converts a number to text, using the $ (dollar) currency format`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/dollar-function-a6cd05d9-9740-4ad3-a469-8109d18ff611',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    EXACT: {
        description: `Checks to see if two text values are identical`,
        abstract: `Checks to see if two text values are identical`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/exact-function-d3087698-fc15-4a15-9631-12575cf29926',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FIND: {
        description: `Finds one text value within another (case-sensitive)`,
        abstract: `Finds one text value within another (case-sensitive)`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FINDB: {
        description: `Finds one text value within another (case-sensitive)`,
        abstract: `Finds one text value within another (case-sensitive)`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    FIXED: {
        description: `Formats a number as text with a fixed number of decimals`,
        abstract: `Formats a number as text with a fixed number of decimals`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/fixed-function-ffd5723c-324c-45e9-8b96-e41be2a8274a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LEFT: {
        description: `Returns the leftmost characters from a text value`,
        abstract: `Returns the leftmost characters from a text value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LEFTB: {
        description: `Returns the leftmost characters from a text value`,
        abstract: `Returns the leftmost characters from a text value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LEN: {
        description: `Returns the number of characters in a text string`,
        abstract: `Returns the number of characters in a text string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LENB: {
        description: `Returns the number of characters in a text string`,
        abstract: `Returns the number of characters in a text string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    LOWER: {
        description: `Converts text to lowercase`,
        abstract: `Converts text to lowercase`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/lower-function-3f21df02-a80c-44b2-afaf-81358f9fdeb4',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MID: {
        description: `Returns a specific number of characters from a text string starting at the position you specify`,
        abstract: `Returns a specific number of characters from a text string starting at the position you specify`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MIDB: {
        description: `Returns a specific number of characters from a text string starting at the position you specify`,
        abstract: `Returns a specific number of characters from a text string starting at the position you specify`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NUMBERVALUE: {
        description: `Converts text to number in a locale-independent manner`,
        abstract: `Converts text to number in a locale-independent manner`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/numbervalue-function-1b05c8cf-2bfa-4437-af70-596c7ea7d879',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PHONETIC: {
        description: `Extracts the phonetic (furigana) characters from a text string`,
        abstract: `Extracts the phonetic (furigana) characters from a text string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/phonetic-function-9a329dac-0c0f-42f8-9a55-639086988554',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    PROPER: {
        description: `Capitalizes the first letter in each word of a text value`,
        abstract: `Capitalizes the first letter in each word of a text value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/proper-function-52a5a283-e8b2-49be-8506-b2887b889f94',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    REPLACE: {
        description: `Replaces characters within text`,
        abstract: `Replaces characters within text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    REPLACEB: {
        description: `Replaces characters within text`,
        abstract: `Replaces characters within text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    REPT: {
        description: `Repeats text a given number of times`,
        abstract: `Repeats text a given number of times`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/rept-function-04c4d778-e712-43b4-9c15-d656582bb061',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    RIGHT: {
        description: `Returns the rightmost characters from a text value`,
        abstract: `Returns the rightmost characters from a text value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    RIGHTB: {
        description: `Returns the rightmost characters from a text value`,
        abstract: `Returns the rightmost characters from a text value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SEARCH: {
        description: `Finds one text value within another (not case-sensitive)`,
        abstract: `Finds one text value within another (not case-sensitive)`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SEARCHB: {
        description: `Finds one text value within another (not case-sensitive)`,
        abstract: `Finds one text value within another (not case-sensitive)`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SUBSTITUTE: {
        description: `Substitutes new text for old text in a text string`,
        abstract: `Substitutes new text for old text in a text string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/substitute-function-6434944e-a904-4336-a9b0-1e58df3bc332',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    T: {
        description: `Converts its arguments to text`,
        abstract: `Converts its arguments to text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/t-function-fb83aeec-45e7-4924-af95-53e073541228',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TEXT: {
        description: `Formats a number and converts it to text`,
        abstract: `Formats a number and converts it to text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TEXTAFTER: {
        description: `Returns text that occurs after given character or string`,
        abstract: `Returns text that occurs after given character or string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/textafter-function-c8db2546-5b51-416a-9690-c7e6722e90b4',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TEXTBEFORE: {
        description: `Returns text that occurs before a given character or string`,
        abstract: `Returns text that occurs before a given character or string`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/textbefore-function-d099c28a-dba8-448e-ac6c-f086d0fa1b29',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TEXTJOIN: {
        description: `Text: Combines the text from multiple ranges and/or strings`,
        abstract: `Text: Combines the text from multiple ranges and/or strings`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/textjoin-function-357b449a-ec91-49d0-80c3-0e8fc845691c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TEXTSPLIT: {
        description: `Splits text strings by using column and row delimiters`,
        abstract: `Splits text strings by using column and row delimiters`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/textsplit-function-b1ca414e-4c21-4ca0-b1b7-bdecace8a6e7',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TRIM: {
        description: `Removes spaces from text`,
        abstract: `Removes spaces from text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    UNICHAR: {
        description: `Returns the Unicode character that is references by the given numeric value`,
        abstract: `Returns the Unicode character that is references by the given numeric value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/unichar-function-ffeb64f5-f131-44c6-b332-5cd72f0659b8',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    UNICODE: {
        description: `Returns the number (code point) that corresponds to the first character of the text`,
        abstract: `Returns the number (code point) that corresponds to the first character of the text`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/unicode-function-adb74aaa-a2a5-4dde-aff6-966e4e81f16f',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    UPPER: {
        description: `Converts text to uppercase`,
        abstract: `Converts text to uppercase`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/upper-function-c11f29b3-d1a3-4537-8df6-04d0049963d6',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    VALUE: {
        description: `Converts a text argument to a number`,
        abstract: `Converts a text argument to a number`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/value-function-257d0108-07dc-437d-ae1c-bc2d3953d8c2',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    VALUETOTEXT: {
        description: `Returns text from any specified value`,
        abstract: `Returns text from any specified value`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/valuetotext-function-5fff61a2-301a-4ab2-9ffa-0a5242a08fea',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    CALL: {
        description: `Calls a procedure in a dynamic link library or code resource`,
        abstract: `Calls a procedure in a dynamic link library or code resource`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/call-function-32d58445-e646-4ffd-8d5e-b45077a5e995',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    EUROCONVERT: {
        description: `Converts a number to euros, converts a number from euros to a euro member currency, or converts a number from one euro member currency to another by using the euro as an intermediary (triangulation)`,
        abstract: `Converts a number to euros, converts a number from euros to a euro member currency, or converts a number from one euro member currency to another by using the euro as an intermediary (triangulation)`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/euroconvert-function-79c8fd67-c665-450c-bb6c-15fc92f8345c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    REGISTER_ID: {
        description: `Returns the register ID of the specified dynamic link library (DLL) or code resource that has been previously registered`,
        abstract: `Returns the register ID of the specified dynamic link library (DLL) or code resource that has been previously registered`,
        links: [
            {
                title: 'Instruction',
                url: 'https://support.microsoft.com/en-us/office/register-id-function-f8f0af0f-fd66-4704-a0f2-87b27b175b50',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
};
