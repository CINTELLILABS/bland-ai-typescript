/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface StopActiveBatchResponse {
    /** The status of the request. If anything other than 'success', an error has occurred or all calls have already been completed. */
    status: string;
    /** A message describing the status of the request. */
    message: string;
    /** The number of calls that were cancelled. */
    numCalls: number;
    /** The `batch_id` of the cancelled batch. */
    batchId: string;
}
