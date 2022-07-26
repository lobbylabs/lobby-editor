import { Editor } from "@tiptap/core";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import { BubbleMenu as ExtensionBubbleMenu } from "@tiptap/extension-bubble-menu";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import Heading from "@tiptap/extension-heading";
import History from "@tiptap/extension-history";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import {
  BubbleMenu,
  Editor as TipTapEditor,
  EditorContent,
  useEditor,
} from "@tiptap/react";
import { lowlight } from "lowlight/index";
import { TableBubbleMenu } from "./Components/TableBubbleMenu";
import { TextBubbleMenu } from "./Components/TextBubbleMenu";
import { CustomTable } from "./Extensions/CustomTable";
import sanitizeHtml from "sanitize-html";

interface EditorProps {
  editor?: TipTapEditor;
  editable: boolean;
}

interface LobbyEditorProps {
  customExtensions?: any[];
  onContentUpdate?: ({ editor }: { editor: Editor | undefined }) => {} | void;
}

export const LobbyEditor = ({ editor, editable }: EditorProps) => {
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
};

export const setContent = ({
  editor,
  content,
}: {
  editor?: Editor;
  content: string;
}) => {
  editor &&
    !editor.isDestroyed &&
    editor.commands?.setContent(
      sanitizeHtml(content, {
        // keeps img tags in
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      })
    );
};

export const useLobbyEditor = ({
  customExtensions = [],
  onContentUpdate = ({ editor }: { editor: Editor | undefined }) => {},
}: LobbyEditorProps = {}): TipTapEditor | undefined => {
  let editor = useEditor({
    extensions: [
      Dropcursor.configure({
        color: "black",
      }),
      Blockquote,
      Bold,
      BulletList,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Document,
      ExtensionBubbleMenu,
      Gapcursor,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      History,
      Image,
      Italic,
      ListItem,
      Link.extend({
        inclusive: false,
      }),
      OrderedList,
      Paragraph,
      Placeholder.configure({
        placeholder: "Write something ...",
      }),
      CustomTable.configure({
        resizable: true,
        // lets us grab the table and delete it (renders as blue border, defined by editor.scss)
        allowTableNodeSelection: true,
      }),
      TableCell,
      TableHeader,
      TableRow,
      Text,
      ...customExtensions,
    ],
    // triggered on every change
    onUpdate: ({ editor }: { editor: Editor }) => {
      onContentUpdate({ editor });
    },
  });

  if (!editor) return undefined;
  return editor;
};
