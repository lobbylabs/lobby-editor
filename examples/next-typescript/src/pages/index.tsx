import type { NextPage } from "next";
import { LobbyEditor, setContent, useLobbyEditor } from "lobby-editor";
import { useEffect, useState } from "react";
import { LoremIpsum } from "../lib";
import { Button } from "../components";
import { saveAs } from "file-saver";

const Home: NextPage = () => {
  const editor = useLobbyEditor();

  useEffect(() => {
    if (editor) {
      setContent({ editor, content: LoremIpsum });
    }
  }, [editor]);

  return (
    <div className="flex flex-col p-10 space-y-5">
      <h1 className="text-2xl font-semibold">Lobby Editor Example</h1>
      <div className="flex flex-row justify-end space-x-4">
        <Button
          text="Export HTML"
          onButtonClick={() => {
            if (!editor) return;
            const blob = new Blob([editor?.getHTML()], {
              type: "text/plain;charset=utf-8",
            });
            saveAs(blob, "lobby-demo-export.html");
          }}
          isActive={true}
        />
      </div>
      <div className="flex flex-col p-4 border rounded-md border-slate-400">
        <LobbyEditor editor={editor} editable={true} />
      </div>
    </div>
  );
};

export default Home;
