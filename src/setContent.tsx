import sanitizeHtml from "sanitize-html";
import { Editor } from "@tiptap/core";

export default function setContent({
  editor,
  content,
}: {
  editor?: Editor;
  content: string;
}) {
  editor &&
    !editor.isDestroyed &&
    editor.commands?.setContent(
      sanitizeHtml(content, {
        // keeps img tags in
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      })
    );
}
