/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { CallParams } from "./CallParams";

export const BatchObject: core.serialization.ObjectSchema<serializers.BatchObject.Raw, BlandAI.BatchObject> =
    core.serialization.object({
        batchId: core.serialization.property("batch_id", core.serialization.string()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        label: core.serialization.string(),
        basePrompt: core.serialization.property("base_prompt", core.serialization.string()),
        endpointCode: core.serialization.property("endpoint_code", core.serialization.string()),
        callParams: core.serialization.property("call_params", CallParams),
    });

export declare namespace BatchObject {
    interface Raw {
        batch_id: string;
        campaign_id: string;
        created_at: string;
        label: string;
        base_prompt: string;
        endpoint_code: string;
        call_params: CallParams.Raw;
    }
}
