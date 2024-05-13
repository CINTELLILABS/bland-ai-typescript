/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";

export const RetrievedVoice: core.serialization.ObjectSchema<serializers.RetrievedVoice.Raw, BlandAI.RetrievedVoice> =
    core.serialization.object({
        voicePresetId: core.serialization.property("voice_preset_id", core.serialization.string()),
        voiceName: core.serialization.property("voice_name", core.serialization.string()),
        description: core.serialization.string(),
        reduceLatency: core.serialization.property("reduce_latency", core.serialization.boolean()),
        interruptionThreshold: core.serialization.property(
            "interruption_threshold",
            core.serialization.number().optional()
        ),
        language: core.serialization.string(),
        voiceSettings: core.serialization.property("voice_settings", core.serialization.unknown()),
        editable: core.serialization.boolean(),
        public: core.serialization.boolean(),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace RetrievedVoice {
    interface Raw {
        voice_preset_id: string;
        voice_name: string;
        description: string;
        reduce_latency: boolean;
        interruption_threshold?: number | null;
        language: string;
        voice_settings?: unknown;
        editable: boolean;
        public: boolean;
        created_at: string;
    }
}
