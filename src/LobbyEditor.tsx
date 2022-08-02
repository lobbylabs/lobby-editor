import React from "react";
import {
  BubbleMenu,
  Editor as TipTapEditor,
  EditorContent,
} from "@tiptap/react";
import TableBubbleMenu from "./Components/TableBubbleMenu";
import TextBubbleMenu from "./Components/TextBubbleMenu";
import setContent from "./setContent";

interface EditorProps {
  editor?: TipTapEditor;
  editable: boolean;
}

export default function LobbyEditor({ editor, editable }: EditorProps) {
  if (!editor) {
    return null;
  }

  editor.setEditable(editable);

  return (
    <>
      <div
        // Will reset text to placeholder when
        // "No translation found" is displayed as content and editable
        onFocus={() => {
          if (!editable) return;

          if (editor.getText().trim() === "No translation found") {
            setContent({ editor, content: "" });
          }
        }}
      >
        {editable ? (
          <BubbleMenu editor={editor}>
            {editor.isActive("table") ? (
              <TableBubbleMenu editor={editor} />
            ) : (
              <TextBubbleMenu editor={editor} />
            )}
          </BubbleMenu>
        ) : (
          <></>
        )}
        <EditorContent className="editor__content" editor={editor} />
      </div>
    </>
  );
}
