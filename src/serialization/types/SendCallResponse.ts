/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BlandAI from "../../api/index";
import * as core from "../../core";
import { Status } from "../resources/commons/types/Status";
import { CallId } from "../resources/commons/types/CallId";

export const SendCallResponse: core.serialization.ObjectSchema<
    serializers.SendCallResponse.Raw,
    BlandAI.SendCallResponse
> = core.serialization.object({
    status: Status,
    callId: core.serialization.property("call_id", CallId),
    batchId: core.serialization.property("batch_id", core.serialization.string().optional()),
    message: core.serialization.string().optional(),
});

export declare namespace SendCallResponse {
    interface Raw {
        status: Status.Raw;
        call_id?: CallId.Raw;
        batch_id?: string | null;
        message?: string | null;
    }
}
