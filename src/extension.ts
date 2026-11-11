import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "isrpo-labwork3-bayramkulovilyas-" is now active!');
	const insertWhile = vscode.commands.registerCommand('isrpo-labwork3-bayramkulovilyas-.insertWhile', async () => {	
		const is_editor = vscode.window.activeTextEditor;
      	if(!is_editor) {
        return;
      	}
		const selected = is_editor.selection;
		if(selected.isEmpty)
		{
		    const snippet = new vscode.SnippetString('while() {\n\t${0}\n}');
        	await is_editor.insertSnippet(snippet);		
		}
		else
		{
			const selected_text = is_editor.document.getText(selected);
			const snippet = new vscode.SnippetString(`while(${selected_text}) {\n\t$0\n}`);
        	await is_editor.insertSnippet(snippet);
		}
		vscode.window.showInformationMessage('while inserted!');
	});
	const insertFor = vscode.commands.registerCommand('isrpo-labwork3-bayramkulovilyas-.insertFor', async () => {
		const is_editor = vscode.window.activeTextEditor;
      	if(!is_editor) {
        return;
      	}
		const selected = is_editor.selection;
		if(selected.isEmpty)
		{
		    const snippet = new vscode.SnippetString('for() {\n\t${0}\n}');
        	await is_editor.insertSnippet(snippet);		
		}
		else
		{
			const selected_text = is_editor.document.getText(selected);
			const snippet = new vscode.SnippetString(`for(${selected_text}) {\n\t$0\n}`);
        	await is_editor.insertSnippet(snippet);
		}
		vscode.window.showInformationMessage('for inserted!');
	});
	const insertIf = vscode.commands.registerCommand('isrpo-labwork3-bayramkulovilyas-.insertIf', async () => {
		const is_editor = vscode.window.activeTextEditor;
      	if(!is_editor) {
        return;
      	}
		const selected = is_editor.selection;
		if(selected.isEmpty)
		{
		    const snippet = new vscode.SnippetString('if() {\n\t${0}\n}');
        	await is_editor.insertSnippet(snippet);		
		}
		else
		{
			const selected_text = is_editor.document.getText(selected);
			const snippet = new vscode.SnippetString(`if (${selected_text}) {\n\t$0\n}`);
        	await is_editor.insertSnippet(snippet);
		}
		vscode.window.showInformationMessage('if inserted!');
	});
	const dublicatePrevLine = vscode.commands.registerCommand('isrpo-labwork3-bayramkulovilyas-.dublicatePrevLine', async () => {
		const is_editor = vscode.window.activeTextEditor;
      	if(!is_editor) {
        return;
      	}
		const currentLine = is_editor.selection.active.line;
        if(currentLine === 0) {
            return;
        }
		const line = is_editor.selection.active.line;
        const text = is_editor.document.lineAt(line - 1).text;
        const end = is_editor.document.lineAt(line).range.end;
        await is_editor.edit((eb) => eb.insert(end, text));
		vscode.window.showInformationMessage('previous line copied!');
	});
	context.subscriptions.push(insertWhile, insertFor, insertIf, dublicatePrevLine);
}

export function deactivate() {}