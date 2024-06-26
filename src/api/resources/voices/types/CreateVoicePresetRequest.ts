/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../../../index";

export interface CreateVoicePresetRequest {
    /** The name for the new voice preset. */
    voiceName: string;
    /** A description of the voice preset. */
    description?: string;
    /** The existing `voice_id` that will be mapped to the new voice preset. */
    voiceId?: number;
    /** The current `reduce_latency` setting that will be mapped to the new voice preset. */
    reduceLatency?: boolean;
    /**
     * The threshold for voice interruption settings.
     *
     * If not provided, the default value is `50`.
     */
    interruptionThreshold?: number;
    /** The language code for the voice preset. */
    language?: string;
    /** A JSON object containing specific settings for the voice. */
    voiceSettings?: BlandAI.VoiceSettingsData;
}
