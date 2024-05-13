/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { UserEnum } from "./UserEnum";

export const Transcript: core.serialization.ObjectSchema<serializers.Transcript.Raw, BlandAI.Transcript> =
    core.serialization.object({
        id: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        text: core.serialization.string(),
        user: UserEnum,
        cId: core.serialization.property("c_id", core.serialization.string()),
    });

export declare namespace Transcript {
    interface Raw {
        id: string;
        created_at: string;
        text: string;
        user: UserEnum.Raw;
        c_id: string;
    }
}
