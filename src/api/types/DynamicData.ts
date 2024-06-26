/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BlandAI from "../index";

/**
 * @example
 *     {
 *         url: "https://api.coindesk.com/v1/bpi/currentprice.json",
 *         responseData: [{
 *                 name: "BTC Price USD",
 *                 data: "bpi.USD.rate",
 *                 context: "Current BTC Price: $BTC Price USD USD"
 *             }, {
 *                 name: "BTC Price EUR",
 *                 data: "bpi.EUR.rate",
 *                 context: "In Euros: BTC Price USD EUR"
 *             }]
 *     }
 */
export interface DynamicData {
    /** The URL of the external API to fetch data from. */
    url: string;
    /** An array of objects describing how to parse and use the data fetched from the API. */
    responseData: BlandAI.ResponseData[];
    /** Default value is `GET`. */
    method?: BlandAI.MethodEnum;
    /** Whether to fetch the data once at the beginning of the call, or to re-check continuously for data that might change mid-call. Default value is `true`. */
    cache?: boolean;
    /** An object of headers to send with the request. */
    headers?: Record<string, string>;
    /**
     * The body of the request.
     *
     * The following variables can be injected into the dynamic request body with double curly braces:
     *
     * - `from` (Ex. `+12223334444`)
     * - `to`
     * - `short_from` (Ex. `2223334444`)
     * - `short_to`
     * - `call_id`
     *
     * These string values will be replaced in each `dynamic_data[].body` where they're used by system values in each request.
     */
    body?: string;
}
