/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";

export const CallIdParam: core.serialization.Schema<serializers.CallIdParam.Raw, BlandAI.CallIdParam> =
    core.serialization.string();

export declare namespace CallIdParam {
    type Raw = string;
}
