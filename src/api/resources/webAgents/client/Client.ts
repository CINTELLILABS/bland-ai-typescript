/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BlandAI from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace WebAgents {
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
export class WebAgents {
    constructor(protected readonly _options: WebAgents.Options) {}

    /**
     * Configure all of the settings for a new web agent.
     *
     * @param {BlandAI.CreateWebAgentRequest} request
     * @param {WebAgents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link BlandAI.ServerError}
     * @throws {@link BlandAI.UnauthorizedError}
     *
     * @example
     *     await blandAi.webAgents.create({
     *         prompt: "string",
     *         voice: "string",
     *         analysisSchema: {
     *             "key": "value"
     *         },
     *         metadata: {
     *             "key": "value"
     *         },
     *         pathwayId: "string",
     *         language: "string",
     *         model: "string",
     *         firstSentence: "string",
     *         tools: [{
     *                 name: "string",
     *                 description: "string",
     *                 inputSchema: {
     *                     "key": "value"
     *                 },
     *                 speech: "string",
     *                 responseData: [{
     *                         "key": "value"
     *                     }]
     *             }],
     *         dynamicData: {
     *             "key": "value"
     *         },
     *         interruptionThreshold: 1,
     *         maxDuration: 1
     *     })
     */
    public async create(
        request: BlandAI.CreateWebAgentRequest,
        requestOptions?: WebAgents.RequestOptions
    ): Promise<BlandAI.CreateWebAgentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.BlandAIEnvironment.Production,
                "/v1/agents/agents"
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
            body: await serializers.CreateWebAgentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CreateWebAgentResponse.parseOrThrow(_response.body, {
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
