/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BlandAI from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace InboundNumbers {
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
 *
 */
export class InboundNumbers {
    constructor(protected readonly _options: InboundNumbers.Options) {}

    /**
     * Purchase and configure a new inbound phone number. ($15/mo. subscription using your stored payment method).
     *
     * @param {BlandAI.InboundNumberRequest} request
     * @param {InboundNumbers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.inboundNumbers.purchase({
     *         areaCode: "string",
     *         prompt: "string",
     *         countryCode: BlandAI.CountryCode.Us,
     *         webhook: "string",
     *         phoneNumber: "+18582814611"
     *     })
     */
    public async purchase(
        request: BlandAI.InboundNumberRequest,
        requestOptions?: InboundNumbers.RequestOptions
    ): Promise<BlandAI.InboundNumberResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/inbound/purchase"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.InboundNumberRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.InboundNumberResponse.parseOrThrow(_response.body, {
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
     * Update your inbound agent's settings, prompt and other details.
     *
     * @param {BlandAI.PhoneNumber} phoneNumber
     * @param {BlandAI.UpdateInbound} request
     * @param {InboundNumbers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.inboundNumbers.update("+18582814611", {
     *         prompt: "29382721828",
     *         transferList: {
     *             "default": "+1234567890",
     *             "sales": "+1234567890",
     *             "support": "+1234567890",
     *             "billing": "+1234567890"
     *         },
     *         model: BlandAI.Model.Enhanced
     *     })
     */
    public async update(
        phoneNumber: BlandAI.PhoneNumber,
        request: BlandAI.UpdateInbound,
        requestOptions?: InboundNumbers.RequestOptions
    ): Promise<BlandAI.UpdateInboundResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/inbound/${encodeURIComponent(await serializers.PhoneNumber.jsonOrThrow(phoneNumber))}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.UpdateInbound.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.UpdateInboundResponse.parseOrThrow(_response.body, {
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
     * Retrieves a list of all inbound phone numbers configured for your account, along with their associated settings.
     *
     * @param {InboundNumbers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.inboundNumbers.list()
     */
    public async list(requestOptions?: InboundNumbers.RequestOptions): Promise<BlandAI.ListInboundResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/inbound"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ListInboundResponse.parseOrThrow(_response.body, {
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
     * Retrieve settings for your inbound phone number.
     *
     * @param {BlandAI.PhoneNumber} phoneNumber
     * @param {InboundNumbers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.inboundNumbers.details("+18582814611")
     */
    public async details(
        phoneNumber: BlandAI.PhoneNumber,
        requestOptions?: InboundNumbers.RequestOptions
    ): Promise<BlandAI.InboundNumberDetailsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/inbound/${encodeURIComponent(await serializers.PhoneNumber.jsonOrThrow(phoneNumber))}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.InboundNumberDetailsResponse.parseOrThrow(_response.body, {
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
