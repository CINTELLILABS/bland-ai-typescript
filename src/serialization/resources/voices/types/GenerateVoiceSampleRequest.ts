/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { VoiceSettingsData } from "./VoiceSettingsData";

export const GenerateVoiceSampleRequest: core.serialization.ObjectSchema<
    serializers.GenerateVoiceSampleRequest.Raw,
    BlandAI.GenerateVoiceSampleRequest
> = core.serialization.object({
    text: core.serialization.string(),
    voiceSettings: core.serialization.property("voice_settings", VoiceSettingsData.optional()),
});

export declare namespace GenerateVoiceSampleRequest {
    interface Raw {
        text: string;
        voice_settings?: VoiceSettingsData.Raw | null;
    }
}
