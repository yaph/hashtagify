# Hashtagify VS Code Extension

Adds a command that turns the selected text into a sequence of hashtags, for example:

* word one, word two, word three -> #WordOne #WordTwo #WordThree
* one two three -> #One #Two #Three

## Demo

![demo](media/hashtagify-demo.gif)

## Usage

1. Select a string of words (e.g., `geo map, urban art`).
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open the command palette.
3. Run the command by searching for `Hashtagify Word List`.
4. The selected text should transform into hashtags (e.g., `#GeoMap #UrbanArt`).

## Test and Publish

1. Press `F5` in VS Code to run the extension in a new Extension Development Host window.
2. Open a file in the new development environment and follow the steps in usage to test.
3. Package the extension into a `.vsix` file: `vsce package`
4. Upload to https://marketplace.visualstudio.com/manage/
