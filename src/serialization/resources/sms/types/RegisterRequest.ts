/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as BlandAI from "../../../../api/index";
import * as core from "../../../../core";
import { VerticalEnum } from "./VerticalEnum";
import { LegalStructureEnum } from "./LegalStructureEnum";
import { TrustedUser } from "./TrustedUser";

export const RegisterRequest: core.serialization.ObjectSchema<
    serializers.RegisterRequest.Raw,
    BlandAI.RegisterRequest
> = core.serialization.object({
    businessName: core.serialization.string(),
    ein: core.serialization.string(),
    vertical: VerticalEnum,
    address: core.serialization.string(),
    city: core.serialization.string(),
    state: core.serialization.string(),
    postalCode: core.serialization.string(),
    country: core.serialization.string(),
    email: core.serialization.string(),
    type: LegalStructureEnum,
    website: core.serialization.string(),
    optInInfo: core.serialization.property("opt_in_info", core.serialization.string()),
    messageSamples: core.serialization.list(core.serialization.string()),
    trustedUser: core.serialization.property("trusted_user", TrustedUser),
});

export declare namespace RegisterRequest {
    interface Raw {
        businessName: string;
        ein: string;
        vertical: VerticalEnum.Raw;
        address: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        email: string;
        type: LegalStructureEnum.Raw;
        website: string;
        opt_in_info: string;
        messageSamples: string[];
        trusted_user: TrustedUser.Raw;
    }
}
