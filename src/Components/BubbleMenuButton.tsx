import React from "react";

export function BubbleMenuButton({
  onClick,
  iconClass,
  title = undefined,
}: {
  onClick: React.MouseEventHandler;
  iconClass: string;
  title?: string;
}) {
  return (
    <button
      className="p-1 m-0.5 bg-white hover:bg-gray-100 rounded"
      onClick={onClick}
      title={title}
    >
      <i className={iconClass}></i>
    </button>
  );
}
