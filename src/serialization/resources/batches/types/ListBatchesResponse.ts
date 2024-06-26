/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { BatchObject } from "./BatchObject";

export const ListBatchesResponse: core.serialization.ObjectSchema<
    serializers.ListBatchesResponse.Raw,
    BlandAI.ListBatchesResponse
> = core.serialization.object({
    status: core.serialization.string(),
    batches: core.serialization.list(BatchObject),
});

export declare namespace ListBatchesResponse {
    interface Raw {
        status: string;
        batches: BatchObject.Raw[];
    }
}
