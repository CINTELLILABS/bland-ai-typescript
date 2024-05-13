/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../../../index";

export interface StopCallResponse {
    /** Can be `success` or `error`. */
    status: BlandAI.Status;
    /** If the status is `success`, the message will say “Call ended successfully.” Otherwise, if the status is `error`, the message will say “SID not found for the given c_id.” or “Internal server error.” */
    message: string;
}
