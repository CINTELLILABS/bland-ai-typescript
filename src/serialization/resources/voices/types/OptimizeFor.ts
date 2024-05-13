/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";

export const OptimizeFor: core.serialization.Schema<serializers.OptimizeFor.Raw, BlandAI.OptimizeFor> =
    core.serialization.enum_(["speed_max", "speed", "quality", "quality_max"]);

export declare namespace OptimizeFor {
    type Raw = "speed_max" | "speed" | "quality" | "quality_max";
}
