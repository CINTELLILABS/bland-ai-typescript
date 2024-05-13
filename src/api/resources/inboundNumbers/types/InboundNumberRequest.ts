/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../../../index";

export interface InboundNumberRequest {
    /**
     * Choose a three-digit area code for your phone number. If set as a parameter, a number will only be purchased by exact match if available.
     *
     * If not provided, the default value `415` will be used.
     */
    areaCode?: string;
    /** This defines how the AI will start the conversation, information available to it, and its behaviors. Matches how the outbound `task` parameter functions. */
    prompt?: string;
    /**
     * Choose a country code for your phone number.
     *
     * If not provided, the default value `US` will be used.
     */
    countryCode?: BlandAI.CountryCode;
    webhook?: BlandAI.Webhook;
    phoneNumber: BlandAI.PhoneNumber;
}
