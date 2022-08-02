import React from "react";
import { Editor } from "@tiptap/react";
import BubbleMenuButton from "./BubbleMenuButton";

interface TableBubbleMenuProps {
  editor: Editor;
}
export default function TableBubbleMenu({ editor }: TableBubbleMenuProps) {
  return (
    <>
      <div className="relative bg-white shadow ri-lg mt-62">
        {/* BOLD */}
        <BubbleMenuButton
          iconClass="ri-bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
        ></BubbleMenuButton>

        {/* ITALIC */}
        <BubbleMenuButton
          iconClass="ri-italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
        ></BubbleMenuButton>

        <div className="inline border-l border-gray-300"></div>

        {/* ADD ROW ABOVE */}
        <BubbleMenuButton
          iconClass="ri-insert-row-top"
          onClick={() => editor.chain().focus().addRowBefore().run()}
          title="Add Row Above"
        ></BubbleMenuButton>

        {/* ADD ROW BELOW */}
        <BubbleMenuButton
          iconClass="ri-insert-row-bottom"
          onClick={() => editor.chain().focus().addRowAfter().run()}
          title="Add Row Below"
        ></BubbleMenuButton>

        {/* REMOVE ROW */}
        <BubbleMenuButton
          iconClass="ri-delete-row"
          onClick={() => editor.chain().focus().deleteRow().run()}
          title="Remove Selected Row"
        ></BubbleMenuButton>

        <div className="inline border-l border-gray-300"></div>
        {/* ADD COLUMN LEFT */}
        <BubbleMenuButton
          iconClass="ri-insert-column-left"
          onClick={() => editor.chain().focus().addColumnBefore().run()}
          title="Add Column Left"
        ></BubbleMenuButton>

        {/* ADD COLUMN RIGHT */}
        <BubbleMenuButton
          iconClass="ri-insert-column-right"
          onClick={() => editor.chain().focus().addColumnAfter().run()}
          title="Add Column Right"
        ></BubbleMenuButton>

        {/* REMOVE COLUMN */}
        <BubbleMenuButton
          iconClass="ri-delete-column"
          onClick={() => editor.chain().focus().deleteColumn().run()}
          title="Delete Column"
        ></BubbleMenuButton>
      </div>
    </>
  );
}
