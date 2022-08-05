import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

export default function EditorLinkDialog({
  showLinkPopup,
  closeLinkPopup,
  prevURL,
  setCurrentURL,
}: {
  showLinkPopup: boolean;
  closeLinkPopup: () => void;
  prevURL: string;
  setCurrentURL: (url: string) => void;
}) {
  const [url, setURL] = useState(prevURL);
  return (
    <>
      <Transition appear show={showLinkPopup} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[9999] overflow-y-auto"
          onClose={closeLinkPopup}
        >
          <div className="min-h-screen px-4 text-center bg-slate-500 bg-opacity-40">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-gray-900"
                  >
                    Enter URL below
                  </Dialog.Title>
                  <button
                    onClick={closeLinkPopup}
                    className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200"
                  >
                    <XIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div>
                  <div className="inline-block w-full max-w-lg overflow-hidden text-left align-middle transition-all transform md:max-w-2xl">
                    <div className="flex-col">
                      <input
                        className="mb-4 border-2 rounded-md p-2 bg-gray-200 w-full"
                        onChange={(e) => setURL(e.target.value)}
                        defaultValue={prevURL}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    className="mr-3 text-gray-500 hover:bg-gray-200"
                    onClick={closeLinkPopup}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setCurrentURL(url);
                      closeLinkPopup();
                    }}
                    className="bg-blue-600 text-white relative rounded-xl px-4 py-2 font-medium hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
