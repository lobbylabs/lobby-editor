import { Editor } from "@tiptap/react";
import BubbleMenuButton from "./BubbleMenuButton";

interface TextBubbleMenuProps {
  editor: Editor;
}

export default function TextBubbleMenu({ editor }: TextBubbleMenuProps) {
  return (
    <div className="relative bg-white rounded shadow ri-lg mt-62 z-100">
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

      {/* HEADING 1 */}
      <BubbleMenuButton
        iconClass="ri-h-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        title="Heading 1"
      ></BubbleMenuButton>

      {/* HEADING 2 */}
      <BubbleMenuButton
        iconClass="ri-h-2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        title="Heading 2"
      ></BubbleMenuButton>

      {/* HEADING 3 */}
      <BubbleMenuButton
        iconClass="ri-h-3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        title="Heading 3"
      ></BubbleMenuButton>

      {/* PARAGRAPH */}
      <BubbleMenuButton
        iconClass="ri-paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        title="Paragraph Formatting"
      ></BubbleMenuButton>

      {/* UNORDERED LIST */}
      <BubbleMenuButton
        iconClass="ri-list-ordered"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        title="Bullet List"
      ></BubbleMenuButton>

      {/* UNORDERED LIST */}
      <BubbleMenuButton
        iconClass="ri-list-unordered"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        title="Numbered List"
      ></BubbleMenuButton>

      {/* TABLE */}
      <BubbleMenuButton
        iconClass="ri-table-2"
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: false })
            .run()
        }
        title="Table"
      ></BubbleMenuButton>

      {/* BLOCK QUOTE */}
      <BubbleMenuButton
        iconClass="ri-double-quotes-l"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        title="Block Quote"
      ></BubbleMenuButton>

      {/* CODE BLOCK */}
      <BubbleMenuButton
        iconClass="ri-code-line"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        title="Code Block"
      ></BubbleMenuButton>
    </div>
  );
}
