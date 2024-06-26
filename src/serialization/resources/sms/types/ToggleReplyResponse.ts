/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { ToggleReplyEnum } from "./ToggleReplyEnum";

export const ToggleReplyResponse: core.serialization.ObjectSchema<
    serializers.ToggleReplyResponse.Raw,
    BlandAI.ToggleReplyResponse
> = core.serialization.object({
    message: ToggleReplyEnum,
});

export declare namespace ToggleReplyResponse {
    interface Raw {
        message: ToggleReplyEnum.Raw;
    }
}
