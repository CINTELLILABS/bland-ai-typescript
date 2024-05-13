/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Webhook } from "../../commons/types/Webhook";
import { VoiceId } from "../../commons/types/VoiceId";

export const InboundNumber: core.serialization.ObjectSchema<serializers.InboundNumber.Raw, BlandAI.InboundNumber> =
    core.serialization.object({
        createdAt: core.serialization.property("created_at", core.serialization.string()),
        phoneNumber: core.serialization.property("phone_number", PhoneNumber),
        prompt: core.serialization.string(),
        webhook: Webhook,
        voiceId: core.serialization.property("voice_id", VoiceId),
        dynamicData: core.serialization.property(
            "dynamic_data",
            core.serialization.list(core.serialization.unknown()).optional()
        ),
        interruptionThreshold: core.serialization.property(
            "interruption_threshold",
            core.serialization.number().optional()
        ),
        firstSentence: core.serialization.property("first_sentence", core.serialization.string().optional()),
        reduceLatency: core.serialization.property("reduce_latency", core.serialization.boolean()),
        transferPhoneNumber: core.serialization.property("transfer_phone_number", PhoneNumber.optional()),
        voiceSettings: core.serialization.property("voice_settings", core.serialization.unknown().optional()),
        record: core.serialization.boolean(),
        maxDuration: core.serialization.property("max_duration", core.serialization.number()),
    });

export declare namespace InboundNumber {
    interface Raw {
        created_at: string;
        phone_number: PhoneNumber.Raw;
        prompt: string;
        webhook: Webhook.Raw;
        voice_id: VoiceId.Raw;
        dynamic_data?: unknown[] | null;
        interruption_threshold?: number | null;
        first_sentence?: string | null;
        reduce_latency: boolean;
        transfer_phone_number?: PhoneNumber.Raw | null;
        voice_settings?: unknown | null;
        record: boolean;
        max_duration: number;
    }
}
