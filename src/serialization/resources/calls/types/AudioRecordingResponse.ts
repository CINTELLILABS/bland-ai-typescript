/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { Status } from "../../commons/types/Status";

export const AudioRecordingResponse: core.serialization.ObjectSchema<
    serializers.AudioRecordingResponse.Raw,
    BlandAI.AudioRecordingResponse
> = core.serialization.object({
    status: Status,
    message: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace AudioRecordingResponse {
    interface Raw {
        status: Status.Raw;
        message?: string | null;
        url?: string | null;
    }
}
