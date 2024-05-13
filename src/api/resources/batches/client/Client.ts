/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BlandAI from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Batches {
    interface Options {
        environment?: core.Supplier<environments.BlandAIEnvironment | string>;
        apiKey: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

/**
 * Send a batch of calls to a list of phone numbers. The Batches API allows you to send a batch of calls, analyze the batch with AI, stop an active batch, list all batches, retrieve details for a specific batch, and retrieve the analysis for a specific batch.
 *
 */
export class Batches {
    constructor(protected readonly _options: Batches.Options) {}

    /**
     * Send large volumes of calls at once with a single API request.
     *
     * @param {BlandAI.SendBatchRequest} request
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.batches.send({
     *         phoneNumber: "29382721828",
     *         task: "Would love for you to check out our AI API!",
     *         basePrompt: "You are calling a business to renew their subscription to a service before it expires on a date.",
     *         callData: [{
     *                 phoneNumber: "1234567890",
     *                 business: "ABC Corp",
     *                 service: "Netflix",
     *                 date: "September 4th"
     *             }, {
     *                 phoneNumber: "32176540987",
     *                 business: "XYZ inc.",
     *                 service: "Window Cleaning",
     *                 date: "December 20th"
     *             }],
     *         label: "Subscription Renewal",
     *         campaignId: "1234",
     *         testMode: true
     *     })
     */
    public async send(
        request: BlandAI.SendBatchRequest,
        requestOptions?: Batches.RequestOptions
    ): Promise<BlandAI.SendBatchResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/batches"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.SendBatchRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.SendBatchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new BlandAI.ServerError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new BlandAI.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BlandAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BlandAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BlandAITimeoutError();
            case "unknown":
                throw new errors.BlandAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Analyzes a batch of calls based on using questions and goals.
     *
     * @param {string} batchId - The unique identifier for the batch of calls to be analyzed.
     * @param {BlandAI.AnalyzeBatchRequest} request
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.batches.analyze("string", {
     *         goal: "Renewal Confirmation",
     *         questions: [["Who answered the call?", "human or voicemail"], ["Positive feedback about the product: ", "string"], ["Negative feedback about the product: ", "string"], ["Customer confirmed they were satisfied", "boolean"]]
     *     })
     */
    public async analyze(
        batchId: string,
        request: BlandAI.AnalyzeBatchRequest,
        requestOptions?: Batches.RequestOptions
    ): Promise<BlandAI.AnalyzeCallResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/batches/${encodeURIComponent(batchId)}/analyze`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.AnalyzeBatchRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.AnalyzeCallResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new BlandAI.ServerError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new BlandAI.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BlandAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BlandAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BlandAITimeoutError();
            case "unknown":
                throw new errors.BlandAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Stops all active calls in a batch.
     *
     * @param {string} batchId - The unique identifier for the batch of calls to be cancelled.
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.batches.stop("string")
     */
    public async stop(
        batchId: string,
        requestOptions?: Batches.RequestOptions
    ): Promise<BlandAI.StopActiveBatchResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/batches/${encodeURIComponent(batchId)}/stop`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.StopActiveBatchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new BlandAI.ServerError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new BlandAI.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BlandAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BlandAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BlandAITimeoutError();
            case "unknown":
                throw new errors.BlandAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves batch-specific data for each batch you've created.
     *
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.batches.list()
     */
    public async list(requestOptions?: Batches.RequestOptions): Promise<BlandAI.ListBatchesResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/batches"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ListBatchesResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new BlandAI.ServerError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new BlandAI.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BlandAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BlandAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BlandAITimeoutError();
            case "unknown":
                throw new errors.BlandAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves calls and batch data for a specific batch_id.
     *
     * @param {string} batchId - The unique identifier for the batch of calls you want to retrieve.
     * @param {BlandAI.BatchDetailsRequest} request
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.batches.details("string", {
     *         includeCalls: true,
     *         includeTranscripts: true,
     *         includeAnalysis: true
     *     })
     */
    public async details(
        batchId: string,
        request: BlandAI.BatchDetailsRequest = {},
        requestOptions?: Batches.RequestOptions
    ): Promise<BlandAI.BatchDetailsResponse> {
        const { includeCalls, includeTranscripts, includeAnalysis } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (includeCalls != null) {
            _queryParams["include_calls"] = includeCalls.toString();
        }

        if (includeTranscripts != null) {
            _queryParams["include_transcripts"] = includeTranscripts.toString();
        }

        if (includeAnalysis != null) {
            _queryParams["include_analysis"] = includeAnalysis.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/batches/${encodeURIComponent(batchId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BatchDetailsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new BlandAI.ServerError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new BlandAI.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BlandAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BlandAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BlandAITimeoutError();
            case "unknown":
                throw new errors.BlandAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves the analyses for a specific batch of calls, including details of each call's analysis.
     *
     * @param {string} batchId - The unique identifier for the call batch. Returned in the response when creating a batch, or when listing all batches.
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.batches.retrieve("string")
     */
    public async retrieve(
        batchId: string,
        requestOptions?: Batches.RequestOptions
    ): Promise<BlandAI.RetrieveBatchAnalysisResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/batches/${encodeURIComponent(batchId)}/analysis`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RetrieveBatchAnalysisResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new BlandAI.ServerError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new BlandAI.UnauthorizedError(
                        await serializers.ErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BlandAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BlandAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BlandAITimeoutError();
            case "unknown":
                throw new errors.BlandAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["BLAND_API_KEY"];
        return { authorization: apiKeyValue };
    }
}
