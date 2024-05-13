/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { StatusEnum } from "./StatusEnum";
import { BatchAnalysisObject } from "./BatchAnalysisObject";

export const RetrieveBatchAnalysisResponse: core.serialization.ObjectSchema<
    serializers.RetrieveBatchAnalysisResponse.Raw,
    BlandAI.RetrieveBatchAnalysisResponse
> = core.serialization.object({
    status: StatusEnum,
    message: core.serialization.string(),
    analysis: core.serialization.list(BatchAnalysisObject),
});

export declare namespace RetrieveBatchAnalysisResponse {
    interface Raw {
        status: StatusEnum.Raw;
        message: string;
        analysis: BatchAnalysisObject.Raw[];
    }
}
