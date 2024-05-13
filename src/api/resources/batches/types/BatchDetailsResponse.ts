/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../../../index";

export interface BatchDetailsResponse {
    /** An object containing parameters and settings for the batch. */
    batchParams: BlandAI.BatchParams;
    /** An object containing analysis data for the batch. */
    analysis: BlandAI.AnalysisObject;
    /** An array of objects, each representing individual call data. */
    callData: BlandAI.CallData[];
}
