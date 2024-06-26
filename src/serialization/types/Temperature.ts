/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as BlandAI from "../../api/index";
import * as core from "../../core";

export const Temperature: core.serialization.Schema<serializers.Temperature.Raw, BlandAI.Temperature> =
    core.serialization.number().optional();

export declare namespace Temperature {
    type Raw = number | null | undefined;
}
