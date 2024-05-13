/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { VoiceSettingsData } from "./VoiceSettingsData";

export const VoiceUpdates: core.serialization.ObjectSchema<serializers.VoiceUpdates.Raw, BlandAI.VoiceUpdates> =
    core.serialization.object({
        description: core.serialization.string().optional(),
        voiceSettings: core.serialization.property("voice_settings", VoiceSettingsData.optional()),
    });

export declare namespace VoiceUpdates {
    interface Raw {
        description?: string | null;
        voice_settings?: VoiceSettingsData.Raw | null;
    }
}
