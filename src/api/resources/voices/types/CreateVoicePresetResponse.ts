/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../../../index";

export interface CreateVoicePresetResponse {
    /** Confirmation message indicating successful creation of the new voice preset. */
    message: string;
    /** The newly created voice preset. */
    voice: BlandAI.RetrievedVoice;
}
