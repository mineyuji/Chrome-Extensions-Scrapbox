# Chrome-Extensions-Scrapbox-AWS-Slack
Retrieve the Scrapbox page you created and send it to Slack via Lambda.

![architecture diagram](https://storage.googleapis.com/zenn-user-upload/76851b17acc4-20220508.png)

# How to run the Chrome Extension
To run the extension, open and run the Scrapbox page.

## Attention
This extension is private and must be installed using the "Import Unpackaged Extensions" feature.

https://developer.chrome.com/docs/extensions/mv3/getstarted/

## Treatment
After installation is complete, please configure the settings from the Extension Options.
[![Image from Gyazo](https://i.gyazo.com/35c8dec91f59a12a602db02524933552.png)](https://gyazo.com/35c8dec91f59a12a602db02524933552)

|Setting items|Description|
|--|--|
|Slack webhook url|Set the webhook URL of the Incoming Webhook you have installed on the destination channel.|
|Scrapbox project name|Target Scrapbox project name.|
|Scrapbox search target page limit|Upper limit of search targets, set to the limit property of `scrapbox.io/api/pages:projectname`|
|AWS API Gateway|Set up an API to perform the sending process to Slack, which does not have to be an API Gateway as long as the input format matches. POST body: `{ "page": page list, "url": webhook url }`|