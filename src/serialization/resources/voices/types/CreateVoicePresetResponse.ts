/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { RetrievedVoice } from "./RetrievedVoice";

export const CreateVoicePresetResponse: core.serialization.ObjectSchema<
    serializers.CreateVoicePresetResponse.Raw,
    BlandAI.CreateVoicePresetResponse
> = core.serialization.object({
    message: core.serialization.string(),
    voice: RetrievedVoice,
});

export declare namespace CreateVoicePresetResponse {
    interface Raw {
        message: string;
        voice: RetrievedVoice.Raw;
    }
}
