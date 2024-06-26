/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BlandAI from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Voices {
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
export class Voices {
    constructor(protected readonly _options: Voices.Options) {}

    /**
     * Retrieves all available voices for your account, including custom and default presets.
     *
     * @param {BlandAI.ListVoiceOptionsParams} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.list({
     *         defaultOnly: true,
     *         presetsOnly: true,
     *         voicesOnly: true,
     *         isCustom: true,
     *         name: "string",
     *         voiceName: "string",
     *         voiceId: 1,
     *         reduceLatency: true,
     *         public: true,
     *         editable: true
     *     })
     */
    public async list(
        request: BlandAI.ListVoiceOptionsParams = {},
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.ListVoiceOptionsResponse> {
        const {
            defaultOnly,
            presetsOnly,
            voicesOnly,
            isCustom,
            name,
            voiceName,
            voiceId,
            reduceLatency,
            public: public_,
            editable,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (defaultOnly != null) {
            _queryParams["default_only"] = defaultOnly.toString();
        }

        if (presetsOnly != null) {
            _queryParams["presets_only"] = presetsOnly.toString();
        }

        if (voicesOnly != null) {
            _queryParams["voices_only"] = voicesOnly.toString();
        }

        if (isCustom != null) {
            _queryParams["is_custom"] = isCustom.toString();
        }

        if (name != null) {
            _queryParams["name"] = name;
        }

        if (voiceName != null) {
            _queryParams["voice_name"] = voiceName;
        }

        if (voiceId != null) {
            _queryParams["voice_id"] = voiceId.toString();
        }

        if (reduceLatency != null) {
            _queryParams["reduce_latency"] = reduceLatency.toString();
        }

        if (public_ != null) {
            _queryParams["public"] = public_.toString();
        }

        if (editable != null) {
            _queryParams["editable"] = editable.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/voices"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
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
            return await serializers.ListVoiceOptionsResponse.parseOrThrow(_response.body, {
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
     * Retrieves detailed information about a voice preset for the given id.
     *
     * @param {string} id - The unique identifier for the voice preset.
     *
     *                      Used within your call like `voice: "ff2c405b-3dba-41e0-9261-bc8ee3f91f46"` instead of `voice_id: ..., reduce_latency: ...`.
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.retrieve("string")
     */
    public async retrieve(
        id: string,
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.RetrieveVoicePresetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/voices/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RetrieveVoicePresetResponse.parseOrThrow(_response.body, {
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
     * Creates a new voice preset by bundling various voice settings into one entity.
     *
     * @param {BlandAI.CreateVoicePresetRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.create({
     *         voiceName: "string",
     *         description: "string",
     *         voiceId: 1,
     *         reduceLatency: true,
     *         interruptionThreshold: 1,
     *         language: "string",
     *         voiceSettings: {}
     *     })
     */
    public async create(
        request: BlandAI.CreateVoicePresetRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.CreateVoicePresetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/voices"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.CreateVoicePresetRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CreateVoicePresetResponse.parseOrThrow(_response.body, {
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
     * Updates the settings for a voice preset.
     *
     * @param {string} voicePresetId - The `id` of the voice preset to update.
     *
     *                                 Note: Public voices cannot be altered once published.
     * @param {BlandAI.UpdateVoicePresetRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.update("string", {
     *         voiceName: "string",
     *         description: "string",
     *         voiceId: 1,
     *         reduceLatency: true,
     *         interruptionThreshold: 1,
     *         language: "string",
     *         voiceSettings: {}
     *     })
     */
    public async update(
        voicePresetId: string,
        request: BlandAI.UpdateVoicePresetRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.UpdateVoicePresetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/voices/$${encodeURIComponent(voicePresetId)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.UpdateVoicePresetRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.UpdateVoicePresetResponse.parseOrThrow(_response.body, {
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
     * Deletes a voice preset.
     *
     * @param {string} voicePresetId - The unique identifier for the voice preset to be deleted.
     *
     *                                 Note:
     *
     *                                 - This voice preset must have been created with your account
     *                                 - Default or other user's voice presets cannot be deleted.
     *                                 - Public voice presets can be deleted, but not modified.
     *                                 - This will not delete cloned voice presets, only the original.
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.delete("string")
     */
    public async delete(
        voicePresetId: string,
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.DeleteVoicePresetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/voices/${encodeURIComponent(voicePresetId)}/delete`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.DeleteVoicePresetResponse.parseOrThrow(_response.body, {
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
     * Publishes your voice preset, making it publicly available.
     *
     * @param {string} voicePresetId - The unique identifier for the voice preset to be published.
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.publish("string")
     */
    public async publish(
        voicePresetId: string,
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.PublishVoicePresetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/voices/${encodeURIComponent(voicePresetId)}/publish`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.PublishVoicePresetResponse.parseOrThrow(_response.body, {
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
     * Generates an audio sample from a specified voice preset, with options to override default settings for tuning and testing.
     *
     * @param {string} voicePresetId - The unique identifier for the voice preset to be used for generating the sample.
     * @param {BlandAI.GenerateVoiceSampleRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.voices.generate("string", {
     *         text: "string",
     *         voiceSettings: {}
     *     })
     */
    public async generate(
        voicePresetId: string,
        request: BlandAI.GenerateVoiceSampleRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<BlandAI.GenerateVoiceSampleResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                `/v1/voices/${encodeURIComponent(voicePresetId)}/sample`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "bland-ai",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            body: await serializers.GenerateVoiceSampleRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.GenerateVoiceSampleResponse.parseOrThrow(_response.body, {
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
