/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SendBatchResponse {
    /** The type of response returned. This will always be “success” if the request was successful. */
    message: string;
    /** The unique identifier for the batch. */
    batchId: string;
}
