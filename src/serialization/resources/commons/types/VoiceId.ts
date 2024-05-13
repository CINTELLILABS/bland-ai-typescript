/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";

export const VoiceId: core.serialization.Schema<serializers.VoiceId.Raw, BlandAI.VoiceId> = core.serialization.number();

export declare namespace VoiceId {
    type Raw = number;
}
