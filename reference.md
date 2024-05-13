## Send Call

<details><summary> <code>blandAi.<a href="./src/Client.ts">call</a>({ ...params }) -> BlandAI.SendCallResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Send an AI phone call with a custom objective and actions.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.call({
    phoneNumber: "29382721828",
    task: "Would love for you to check out our AI API!",
    temperature: 0.5,
    transferList: {
        default: "+1234567890",
        sales: "+1234567890",
        support: "+1234567890",
        billing: "+1234567890",
    },
    model: BlandAI.ModelEnum.Enhanced,
    pronunciationGuide: [
        {
            word: "API",
            pronunciation: "A P I",
        },
        {
            word: "AI",
            pronunciation: "A I",
        },
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.SendCall`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `BlandAIClient.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Batches

<details><summary> <code>blandAi.batches.<a href="./src/api/resources/batches/client/Client.ts">send</a>({ ...params }) -> BlandAI.SendBatchResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Send large volumes of calls at once with a single API request.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.batches.send({
    phoneNumber: "29382721828",
    task: "Would love for you to check out our AI API!",
    basePrompt: "You are calling a business to renew their subscription to a service before it expires on a date.",
    callData: [
        {
            phoneNumber: "1234567890",
            business: "ABC Corp",
            service: "Netflix",
            date: "September 4th",
        },
        {
            phoneNumber: "32176540987",
            business: "XYZ inc.",
            service: "Window Cleaning",
            date: "December 20th",
        },
    ],
    label: "Subscription Renewal",
    campaignId: "1234",
    testMode: true,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.SendBatchRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Batches.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.batches.<a href="./src/api/resources/batches/client/Client.ts">analyze</a>(batchId, { ...params }) -> BlandAI.AnalyzeCallResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Analyzes a batch of calls based on using questions and goals.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.batches.analyze("string", {
    goal: "Renewal Confirmation",
    questions: [
        ["Who answered the call?", "human or voicemail"],
        ["Positive feedback about the product: ", "string"],
        ["Negative feedback about the product: ", "string"],
        ["Customer confirmed they were satisfied", "boolean"],
    ],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**batchId: `string`** — The unique identifier for the batch of calls to be analyzed.

</dd>

</dl>

<dl>

<dd>

**request: `BlandAI.AnalyzeBatchRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Batches.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.batches.<a href="./src/api/resources/batches/client/Client.ts">stop</a>(batchId) -> BlandAI.StopActiveBatchResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Stops all active calls in a batch.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.batches.stop("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**batchId: `string`** — The unique identifier for the batch of calls to be cancelled.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Batches.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.batches.<a href="./src/api/resources/batches/client/Client.ts">list</a>() -> BlandAI.ListBatchesResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves batch-specific data for each batch you've created.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.batches.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `Batches.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.batches.<a href="./src/api/resources/batches/client/Client.ts">details</a>(batchId, { ...params }) -> BlandAI.BatchDetailsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves calls and batch data for a specific batch_id.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.batches.details("string", {
    includeCalls: true,
    includeTranscripts: true,
    includeAnalysis: true,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**batchId: `string`** — The unique identifier for the batch of calls you want to retrieve.

</dd>

</dl>

<dl>

<dd>

**request: `BlandAI.BatchDetailsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Batches.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.batches.<a href="./src/api/resources/batches/client/Client.ts">retrieve</a>(batchId) -> BlandAI.RetrieveBatchAnalysisResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves the analyses for a specific batch of calls, including details of each call's analysis.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.batches.retrieve("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**batchId: `string`** — The unique identifier for the call batch. Returned in the response when creating a batch, or when listing all batches.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Batches.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Calls

<details><summary> <code>blandAi.calls.<a href="./src/api/resources/calls/client/Client.ts">analyze</a>(callId, { ...params }) -> BlandAI.AnalyzeCallResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Analyzes a call of calls based using questions and goals.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.calls.analyze("string", {
    goal: "string",
    questions: [["string"]],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**callId: `BlandAI.CallIdParam`**

</dd>

</dl>

<dl>

<dd>

**request: `BlandAI.AnalyzeCall`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Calls.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.calls.<a href="./src/api/resources/calls/client/Client.ts">stop</a>(callId) -> BlandAI.StopCallResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

End an active phone call by call_id.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.calls.stop("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**callId: `BlandAI.CallIdParam`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Calls.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.calls.<a href="./src/api/resources/calls/client/Client.ts">list</a>({ ...params }) -> BlandAI.ListCallsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Returns a set of metadata for each call dispatched by your account.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.calls.list({
    fromNumber: "string",
    toNumber: "string",
    from: 1,
    to: 1,
    limit: 1,
    ascending: true,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.ListCallsRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Calls.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.calls.<a href="./src/api/resources/calls/client/Client.ts">details</a>(callId) -> BlandAI.CallDetailsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve detailed information, metadata and transcripts for a call.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.calls.details("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**callId: `BlandAI.CallIdParam`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Calls.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.calls.<a href="./src/api/resources/calls/client/Client.ts">recording</a>(callId) -> BlandAI.AudioRecordingResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve your call's audio recording.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.calls.recording("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**callId: `BlandAI.CallIdParam`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Calls.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## InboundNumbers

<details><summary> <code>blandAi.inboundNumbers.<a href="./src/api/resources/inboundNumbers/client/Client.ts">purchase</a>({ ...params }) -> BlandAI.InboundNumberResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Purchase and configure a new inbound phone number. ($15/mo. subscription using your stored payment method).

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.inboundNumbers.purchase({
    areaCode: "string",
    prompt: "string",
    countryCode: BlandAI.CountryCode.Us,
    webhook: "string",
    phoneNumber: "+18582814611",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.InboundNumberRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `InboundNumbers.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.inboundNumbers.<a href="./src/api/resources/inboundNumbers/client/Client.ts">update</a>(phoneNumber, { ...params }) -> BlandAI.UpdateInboundResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Update your inbound agent's settings, prompt and other details.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.inboundNumbers.update("+18582814611", {
    prompt: "29382721828",
    transferList: {
        default: "+1234567890",
        sales: "+1234567890",
        support: "+1234567890",
        billing: "+1234567890",
    },
    model: BlandAI.Model.Enhanced,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**phoneNumber: `BlandAI.PhoneNumber`**

</dd>

</dl>

<dl>

<dd>

**request: `BlandAI.UpdateInbound`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `InboundNumbers.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.inboundNumbers.<a href="./src/api/resources/inboundNumbers/client/Client.ts">list</a>() -> BlandAI.ListInboundResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves a list of all inbound phone numbers configured for your account, along with their associated settings.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.inboundNumbers.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `InboundNumbers.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.inboundNumbers.<a href="./src/api/resources/inboundNumbers/client/Client.ts">details</a>(phoneNumber) -> BlandAI.InboundNumberDetailsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieve settings for your inbound phone number.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.inboundNumbers.details("+18582814611");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**phoneNumber: `BlandAI.PhoneNumber`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `InboundNumbers.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## OutboundNumbers

<details><summary> <code>blandAi.outboundNumbers.<a href="./src/api/resources/outboundNumbers/client/Client.ts">purchase</a>({ ...params }) -> BlandAI.OutboundPurchaseResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Purchase and configure a new outbound phone number. ($15/mo. subscription using your stored payment method).

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.outboundNumbers.purchase({
    areaCode: "string",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.OutboundPurchase`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `OutboundNumbers.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.outboundNumbers.<a href="./src/api/resources/outboundNumbers/client/Client.ts">list</a>() -> BlandAI.ListOutboundResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves a list of all outbound phone numbers configured for your account, along with their associated settings.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.outboundNumbers.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `OutboundNumbers.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Sms

<details><summary> <code>blandAi.sms.<a href="./src/api/resources/sms/client/Client.ts">register</a>({ ...params }) -> BlandAI.RegisterResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This documentation provides detailed information on how to register an Application-to-Person (A2P) brand by making a POST request to our API. The process involves submitting your brand's details for registration and verification purposes.

A2P Registration is required _for_ all businesses who wish to send SMS. There can be signifcant fines for any non compliant messages. A2P Registration can take 2 days -> 2 Weeks.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.sms.register({
    businessName: "string",
    ein: "string",
    vertical: BlandAI.VerticalEnum.Automotive,
    address: "string",
    city: "string",
    state: "string",
    postalCode: "string",
    country: "string",
    email: "string",
    type: BlandAI.LegalStructureEnum.Partnership,
    website: "string",
    optInInfo: "string",
    messageSamples: ["string"],
    trustedUser: {},
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.RegisterRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sms.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.sms.<a href="./src/api/resources/sms/client/Client.ts">check</a>({ ...params }) -> BlandAI.CheckStatusResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Check the status of an A2P registration.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.sms.check({
    registrationId: "string",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.CheckStatusRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sms.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.sms.<a href="./src/api/resources/sms/client/Client.ts">get</a>({ ...params }) -> BlandAI.GetMessagesResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Get the list of SMS messages for a given conversation.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.sms.get({
    phoneNumber: "+18582814611",
    to: "+18582814611",
    from: "+18582814611",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.GetMessagesRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sms.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.sms.<a href="./src/api/resources/sms/client/Client.ts">toggle</a>({ ...params }) -> BlandAI.ToggleReplyResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Turn on or off the AI replying for a given phone number.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.sms.toggle({
    phoneNumber: "+18582814611",
    on: true,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.ToggleReplyRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sms.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.sms.<a href="./src/api/resources/sms/client/Client.ts">updatePrompt</a>({ ...params }) -> BlandAI.UpdatePromptResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Purchase and configure a new inbound phone number. ($15/mo. subscription using your stored payment method).

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.sms.updatePrompt({
    phoneNumber: "+18582814611",
    prompt: "string",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.UpdatePromptRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sms.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.sms.<a href="./src/api/resources/sms/client/Client.ts">updateWebhook</a>({ ...params }) -> BlandAI.UpdateWebhookResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Update the webhook for a given phone number.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.sms.updateWebhook({
    phoneNumber: "+18582814611",
    webhook: "string",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.UpdateWebhookRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Sms.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Voices

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">list</a>({ ...params }) -> BlandAI.ListVoiceOptionsResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves all available voices for your account, including custom and default presets.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.list({
    defaultOnly: true,
    presetsOnly: true,
    voicesOnly: true,
    isCustom: true,
    name: "string",
    voiceName: "string",
    voiceId: 1,
    reduceLatency: true,
    public: true,
    editable: true,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.ListVoiceOptionsParams`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">retrieve</a>(id) -> BlandAI.RetrieveVoicePresetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Retrieves detailed information about a voice preset for the given id.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.retrieve("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

The unique identifier for the voice preset.

Used within your call like `voice: "ff2c405b-3dba-41e0-9261-bc8ee3f91f46"` instead of `voice_id: ..., reduce_latency: ...`.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">create</a>({ ...params }) -> BlandAI.CreateVoicePresetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Creates a new voice preset by bundling various voice settings into one entity.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.create({
    voiceName: "string",
    description: "string",
    voiceId: 1,
    reduceLatency: true,
    interruptionThreshold: 1,
    language: "string",
    voiceSettings: {},
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.CreateVoicePresetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">update</a>(voicePresetId, { ...params }) -> BlandAI.UpdateVoicePresetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Updates the settings for a voice preset.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.update("string", {
    voiceName: "string",
    description: "string",
    voiceId: 1,
    reduceLatency: true,
    interruptionThreshold: 1,
    language: "string",
    voiceSettings: {},
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**voicePresetId: `string`**

The `id` of the voice preset to update.

Note: Public voices cannot be altered once published.

</dd>

</dl>

<dl>

<dd>

**request: `BlandAI.UpdateVoicePresetRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">delete</a>(voicePresetId) -> BlandAI.DeleteVoicePresetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Deletes a voice preset.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.delete("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**voicePresetId: `string`**

The unique identifier for the voice preset to be deleted.

Note:

-   This voice preset must have been created with your account
-   Default or other user's voice presets cannot be deleted.
-   Public voice presets can be deleted, but not modified.
-   This will not delete cloned voice presets, only the original.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">publish</a>(voicePresetId) -> BlandAI.PublishVoicePresetResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Publishes your voice preset, making it publicly available.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.publish("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**voicePresetId: `string`** — The unique identifier for the voice preset to be published.

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>blandAi.voices.<a href="./src/api/resources/voices/client/Client.ts">generate</a>(voicePresetId, { ...params }) -> BlandAI.GenerateVoiceSampleResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Generates an audio sample from a specified voice preset, with options to override default settings for tuning and testing.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.voices.generate("string", {
    text: "string",
    voiceSettings: {},
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**voicePresetId: `string`** — The unique identifier for the voice preset to be used for generating the sample.

</dd>

</dl>

<dl>

<dd>

**request: `BlandAI.GenerateVoiceSampleRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Voices.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## WebAgents

<details><summary> <code>blandAi.webAgents.<a href="./src/api/resources/webAgents/client/Client.ts">create</a>({ ...params }) -> BlandAI.CreateWebAgentResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Configure all of the settings for a new web agent.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await blandAi.webAgents.create({
    prompt: "string",
    voice: "string",
    analysisSchema: {
        key: "value",
    },
    metadata: {
        key: "value",
    },
    pathwayId: "string",
    language: "string",
    model: "string",
    firstSentence: "string",
    tools: [
        {
            name: "string",
            description: "string",
            inputSchema: {
                key: "value",
            },
            speech: "string",
            responseData: [
                {
                    key: "value",
                },
            ],
        },
    ],
    dynamicData: {
        key: "value",
    },
    interruptionThreshold: 1,
    maxDuration: 1,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `BlandAI.CreateWebAgentRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `WebAgents.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
