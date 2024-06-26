/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../../../index";

export interface UpdateVoicePresetResponse {
    /** Confirmation message indicating successful update of the voice preset. */
    message: string;
    /** Contains the details of the updates applied to the voice preset. */
    updates: BlandAI.VoiceUpdates;
    /** Contains detailed information about the updated voice preset. */
    voice: BlandAI.RetrievedVoice;
}
