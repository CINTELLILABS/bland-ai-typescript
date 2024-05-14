# Bland AI TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/)
[![npm shield](https://img.shields.io/npm/v/bland-ai)](https://www.npmjs.com/package/bland-ai)

The BlandAI TypeScript library provides convenient access to the BlandAI API from JavaScript/TypeScript.

## .Bland Files Support + CLI Tool

The Bland CLI complements our TypeScript library by providing a command-line tool for interacting with the brand new - .bland files. .bland is a language BlandAI wrote to help you programatically create [Conversational Pathways](https://docs.bland.ai/tutorials/pathways)!

A full guide to using .Bland Files is available [here](./dot-bland.md)


## Documentation

API reference documentation is available [here](https://bland.docs.buildwithfern.com/api-v1/call).

## Reference

A full reference of the SDK is available [here](./reference.md).

## Installation

```bash
npm install --save bland-ai
# or
yarn add bland-ai
```

## Usage

```typescript
import { BlandAIClient, BlandAI } from 'bland-ai';

const bland = new BlandAIClient({
  apiKey: "...", // Defaults to process.env.INTERCOM_API_KEY
});

await bland.call({
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

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them under the `Bland` namespace: 

```ts
import { Bland } from "bland-ai"; 

const response: Bland.ResponseData =  {
 name: "Flight Status",
 data: "user.flights[0].status",
 context: "John's flight is currently Flight Status"
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [BlandError](./src/errors/BlandError.ts) will be thrown:

```ts
import { BlandError } from 'bland-ai';

try {
  await bland.call(...);
} catch (err) {
  if (err instanceof BlandError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be
retried as long as the request is deemed retriable and the number of retry attempts has not grown larger
than the configured retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)
  
Use the `maxRetries` request option to configure this behavior. 

```ts
const response = await bland.call(..., {
  maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timout. Use the `timeoutInSeconds` option to 
configure this behavior. 

```ts
const response = await bland.call(..., {
  timeoutInSeconds: 30 // override timeout to 30s
});
```

## Runtime compatiblity

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK 
works in the following runtimes: 

The following runtimes are supported:

- Node.js 18+ 
- Vercel 
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch client

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're 
running in an unsupported environment, this provides a way for you to break the glass and 
ensure the SDK works. 

```ts
import { BlandClient } from 'bland';

const bland = new BlandClient({
  apiKey: "...",
  fetcher: // provide your implementation here
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. 
Therefore, we recommend pinning the package version to a specific version in your package.json file. 
This way, you can install the same version each time without breaking changes unless you are 
intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. 
Additions made directly to this library would have to be moved over to our generation code, 
otherwise they would be overwritten upon the next generated release. Feel free to open a 
PR as a proof of concept, but know that we will not be able to merge it as-is. 

We suggest [opening an issue](https://github.com/CINTELLILABS/bland-ai-typescript/issues) first to discuss with us!
