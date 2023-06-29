# NowNextLater Chrome

The NowNextLater Chrome Extension is a basic to-do list / productivity tool. Up to 30 tasks can be stored, split into tasks that are to be done with some urgency (now), in the near future (next) or to be done without strict time-pressure (later). You can cycle through each of these three views, move items between urgencies, and mark items as completed.

On opening a new tab, a simple textbox is shown, allowing you to quickly add tasks, assigning them to either Now (down chevron), Next (single right chevron) or Later (double right chevron).

## Using the extension

Once the extension is installed, accessing it is as easy as opening a new tab in Chrome. The page will automatically show the quick-add page.

You can add tasks here, or else click on either Now, Next, or Later at the top of the page to move straight to that list. Tasks can also be added directly from the list.

On completion of a task, you can press the blue tick symbol to mark it as completed. It will momentarily grey out, before being removed.

## The technical bits

This extension saves data by using the [chrome.storage](https://developer.chrome.com/docs/extensions/reference/storage/) function.

The code for this extension is available under an MIT License. The code was written for personal use, and is due to be tidied in a later version. This extension is not suitable for complex project management, or really anything that you wouldn't put on a series of post-it notes.

# Privacy Policy

This privacy policy applies to actions of users of the NowNextLater Chrome Extension (herafter "the extension", "NowNextLater").

## How we collect data

The extension does not collect any personal information. You are not required to register any details to start using the extension. 

The only data stored is the items that you add to the todo list. These are stored using Google's [chrome.storage API](https://developer.chrome.com/docs/extensions/reference/storage/). The makers of NowNextLater do not have access to this data. Where this data is synced to your Google account, this is done over a secure connection using the API.

## Where is data stored

Full information on how and where the extension data is stored can be found in Google's [API documentation](https://developer.chrome.com/docs/extensions/reference/storage/), with more information on their [Privacy Policy website](https://policies.google.com/privacy?hl=en-US).

## Changes to this policy

We reserve the right to change this policy as we deem necessary, alongside the further development of the extension. All changes will be made immediately to this document.

## Contact

Any questions or concerns can be directed to [will@willrc.co.uk](mailto:will@willrc.co.uk)

You can also view the Privacy Policy for the extension [here](https://github.com/willchurchill/nownextlater/blob/main/privacy-policy.md).

# Changelog

## v0.1 - June 2023
The first commit of the NowNextLater extension, with all basic functionality in place.