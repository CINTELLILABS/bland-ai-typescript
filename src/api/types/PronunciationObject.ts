/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PronunciationObject {
    /** The word you want to guide the LLM on how to pronounce */
    word?: string;
    /** The word you want to guide the LLM on how to pronounce. */
    pronunciation?: string;
    /** Whether or not to consider case. Particularly useful with names. EG - 'Max' the name versus 'max' the word. Defaults to false. `Not required`. */
    caseInsensitive?: boolean;
    /** whether or not to consider spaces. When `true`, the word 'high' would be flagged but NOT 'hightop'. Defaults to true. `Not required`. */
    spaced?: boolean;
}
