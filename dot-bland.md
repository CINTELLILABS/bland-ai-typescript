# Guide to using .Bland Files to build Pathways

## What are Conversational Pathways?

Conversational Pathways is one of Bland AI's flagship features to provide greater control over a conversation flow. Pathways allow you to define a series of paths that a conversation can take based on the user's responses, equipped with additional features such as Global Nodes, Variable Extraction, Webhook Calling, adjusting Interruption Settings based on checkpoints in the conversation, and more!

The Visual Pathway Builder is available on our Dev Portal [here](https://app.bland.ai/dashboard?page=convo-pathways). If you would prefer to build Pathways programmatically, you can use the .bland language!


## VSCode Extension

We have also built a VSCode Extension, that provides syntax highlighting as well as auto completion for the .bland language. You can find the extension [here](https://marketplace.visualstudio.com/items?itemName=Bland.Bland&ssr=false#overview), or by searching for "Bland" in the VSCode Extensions Marketplace. (It's the only one there :wink:)


## .Bland Language Syntax

`.bland` is a language that BlandAI wrote to help you programatically create Conversational Pathways. The language is designed to be human-readable and easy to understand, especially if you have used the visual builder before. Here is an example of a `.bland` file:
```bland

name: Reservation Pathway
pathway_id: eb24324f-4d0b-4472-95db-ba1fae021bf3
globalPrompt: "You are an AI assistant for a restaurant. You are helping a user make a reservation."

AskForReservationInfo:
  prompt: "Ask the user for the date, time, and number of guests for their reservation."
  isStart: true
  condition: "Condition is failed if user fails to provide information about date, time and number of guests"
  pathways:
    - label: "user has more than 8 guests"
      description: "Choose this pathway if the user wants a reservation for more than 8 guests."
      node: "Transfer Call Node"
    - label: "user has less than 8 guests"
      description: "Choose this pathway if the user wants a reservation for less than 8 guests."
      node: "Reservation Booking"

Reservation Booking:
  say: "I have availability for the requested time. Would you like to proceed with the reservation?"
  condition: "Condition is failed if user does not confirm the reservation"
  pathways:
    - label: "user confirms the reservation"
      description: "The user confirms they want to proceed with the booking at the given time."
      node: "Reservation Successful"

Reservation Successful:
  type: "End Call"
  prompt: "Tell the user 'Your reservation is successful. Have a great day!'"

Transfer Call Node:
  type: "Transfer Call"
  prompt: "Tell the user you are transferring them to an agent to assist with the reservation."
  transferNumber: "+1234567890"
```

Each node in the pathway has a set of properties that define the behavior of the node. The `.bland` language supports a variety of nodes, conditions, and pathways to help you build complex conversational flows. 

## Using the Bland CLI

The Bland CLI complements our TypeScript library by providing a command-line tool for interacting with the brand new .bland files. The CLI tool allows you to compile .bland files into JSON format, which can then be used to create Pathways using the BlandAI API.

### Usage

Before using the Bland CLI, you need to first create a `.blandrc` file in the root of your project. The `.blandrc` file should contain the following

```json
{
    "apiKey": "YOUR_BLAND_API_KEY"
}

```

The `.blandrc` file should contain your Bland API key, which is required to compile `.bland` files. It can also contain other configuration options, such as the call_data you would like to include, when triggering a call via the CLI.

Once you have created the `.blandrc` file, you can now create your very first `.bland` file! 


Make sure you have downloaded the VSCode Extension, and create a new file with the `.bland` extension. Once you click inside, you should see a dropdown with 'Starter Pathway Template'. Click on it, and you will see a template for a simple pathway. You now have a .bland file! :tada:

To compile the `.bland` file, you can run the following command in your terminal:

```
bland parse path/to/your/file.bland
```

This will compile the .bland file, and ensure that it is valid. If there are any errors, the CLI will provide you with feedback on what needs to be fixed. If the file is valid, the CLI will log that the file has been successfully parsed!

To update an actual pathway with your .bland file, you can run the following command:

```bash
bland run path/to/your/file.bland
```

This will compile the .bland file, and then create a new pathway/update the existing pathway on the BlandAI platform. You can then view the pathway on the Visual Pathway Builder, and make any additional changes if needed.


Now, if you would like to trigger a call using the CLI and your .bland file, here are the steps!

1. Edit your .blandrc file to include the call_data you would like to include in the call. This would contain the parameters you would use in a regular Send Call API Request [here](https://docs.bland.ai/api-v1/post/calls).  
Here is an example

```json
{
    "apiKey": "YOUR_BLAND_API_KEY",
    "call_data": {
        "phoneNumber": "+1234567890",
        "voice": "Alexa"
    }
}
```


You can now run the following command to trigger the call using your pathway created from the .bland file:

```bash

bland call path/to/your/file.bland

```


This will trigger a call using the pathway you created from the .bland file, and the call_data you specified in the .blandrc file. You can then view the call on the BlandAI platform, and see the conversation flow in action!


## Conclusion

The Bland CLI and .bland language provide a powerful way to create and manage Conversational Pathways programmatically. Whether you prefer to use the Visual Pathway Builder or the .bland language, BlandAI has you covered! If you have any questions or need help getting started, feel free to reach out to our support team. This is just the beginning of the support for .Bland Files, and much more functionality is in our pipeline! Happy building! :rocket: