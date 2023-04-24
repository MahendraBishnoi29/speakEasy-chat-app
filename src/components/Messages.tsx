import React, { FC } from "react";

interface MessagesProps {}

const Messages: FC<MessagesProps> = ({}) => {
  return (
    <div
      id="messages"
      className="felx h-full flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      Messages
    </div>
  );
};

export default Messages;
