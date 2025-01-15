import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('hashtagify.wordList', function() {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection).trim();

            // If the text contains a comma, split by comma, otherwise split by space
            let wordList = [];
            if (text.includes(',')) {
                wordList = text.split(/, */);
            } else {
                wordList = text.split(' ');
            }

            const hashtags = wordList.map(item =>
                `#${item.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`
            );
            editor.edit(editBuilder => {
                editBuilder.replace(selection, hashtags.join(' '));
            });
        }
    });

    context.subscriptions.push(disposable);
}