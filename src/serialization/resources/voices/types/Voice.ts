/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";

export const Voice: core.serialization.ObjectSchema<serializers.Voice.Raw, BlandAI.Voice> = core.serialization.object({
    voiceId: core.serialization.property("voice_id", core.serialization.number()),
    name: core.serialization.string(),
    isCustom: core.serialization.property("is_custom", core.serialization.boolean()),
    reduceLatency: core.serialization.property("reduce_latency", core.serialization.boolean()),
});

export declare namespace Voice {
    interface Raw {
        voice_id: number;
        name: string;
        is_custom: boolean;
        reduce_latency: boolean;
    }
}
