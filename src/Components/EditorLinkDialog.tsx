import React from "react";
import { Fragment, useState } from "react";

export default function EditorLinkDialog({
  closeLinkPopup,
  prevURL,
  setCurrentURL,
}: {
  closeLinkPopup: () => void;
  prevURL: string;
  setCurrentURL: (url: string) => void;
}) {
  const [url, setURL] = useState(prevURL);
  return (
    <div className="flex p-2 w-full">
      <input
        value={url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter URL"
        className="outline-none bg-gray-100 rounded-md p-1 w-full text-sm mr-1"
      />
      <button
        className="mr-1 text-gray-500 hover:bg-gray-100 p-1 rounded-md text-sm"
        onClick={closeLinkPopup}
      >
        Close
      </button>
      <button
        onClick={() => {
          setCurrentURL(url);
          closeLinkPopup();
        }}
        className="bg-blue-600 text-white rounded-md p-1 font-medium text-sm"
      >
        Confirm
      </button>
    </div>
  );
}
