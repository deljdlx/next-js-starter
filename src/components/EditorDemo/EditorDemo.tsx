import React, {useState, useEffect} from 'react';


import Editor from "@monaco-editor/react";



type EditorDemoProps = {
    defaultLanguage?: string;
    content?: string;
};


export const EditorDemo: React.FC<EditorDemoProps> = ({
        defaultLanguage = "javascript",
        content = "console.log('Hello, world!');\nconst demo = () => {\n\treturn true;\n};"
}) => {


    const [editorContent, setEditorContent] = useState<string>(content);

    return (
        <div className="editor_demo">
            <Editor
                height="20vh"

                defaultLanguage={defaultLanguage}
                value = {editorContent}
                // onMount={handleEditorDidMount}
                onChange={(value) => setEditorContent(value || "")}
                // value={JSON.stringify(selectedNode?.data, null, 2)}
                // onChange={(value) => handleChange(value || "", )}
                theme="vs-dark"  // 🌙 Mode sombre + coloration syntaxique
                options={{
                    // minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on", // Retour à la ligne auto
                    tabSize: 2,
                }}
            />
            <code>
                <pre>
                </pre>
            </code>
        </div>
    )
};