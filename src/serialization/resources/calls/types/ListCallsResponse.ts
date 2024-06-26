/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { ListedCallData } from "./ListedCallData";

export const ListCallsResponse: core.serialization.ObjectSchema<
    serializers.ListCallsResponse.Raw,
    BlandAI.ListCallsResponse
> = core.serialization.object({
    count: core.serialization.number(),
    calls: core.serialization.list(ListedCallData),
});

export declare namespace ListCallsResponse {
    interface Raw {
        count: number;
        calls: ListedCallData.Raw[];
    }
}
