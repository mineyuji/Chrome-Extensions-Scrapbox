# Chrome-Extensions-Scrapbox
Retrieve the Scrapbox page you created.

![architecture diagram](https://storage.googleapis.com/zenn-user-upload/76851b17acc4-20220508.png)

# How to run the Chrome Extension
To run the extension, open and run the Scrapbox page.

## Attention
This extension is private and must be installed using the "Import Unpackaged Extensions" feature.

https://developer.chrome.com/docs/extensions/mv3/getstarted/

## Treatment
[![Image from Gyazo](https://i.gyazo.com/381963d14d1c9962ebde8bdcc5de95b6.png)](https://gyazo.com/381963d14d1c9962ebde8bdcc5de95b6)

|Setting items|Description|
|--|--|
|Slack webhook url|Set the webhook URL of the Incoming Webhook you have installed on the destination channel.|
|Scrapbox project name|Target Scrapbox project name.（`https://scrapbox.io/:project name/`）|
|Scrapbox search target page limit|Upper limit of search targets, set to the limit property of `scrapbox.io/api/pages:projectname`|