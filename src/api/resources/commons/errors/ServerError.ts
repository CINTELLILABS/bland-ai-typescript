/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as BlandAI from "../../../index";

export class ServerError extends errors.BlandAIError {
    constructor(body: BlandAI.ErrorBody) {
        super({
            message: "ServerError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, ServerError.prototype);
    }
}
