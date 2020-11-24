import React, { useState } from "react";
import {
  Avatar,
  ChatLabel,
  ChatTitle,
  ChatWrapper,
  LastMessege,
  MessegeTime,
  ChatNumbers,
} from "./StyledComponents";

export default function Chat({
  title,
  lastMessage,
  onClick,
  time,
  chatNumbers,
  gender
}) {
  const [chatShow, setChatShow] = useState(true);

  function handelOnClick() {
    onClick();
    setChatShow(false);
  }

  return (
    <ChatWrapper onClick={handelOnClick}>
      <Avatar gender={gender} />
      <ChatLabel>
        <ChatTitle>{title}</ChatTitle>
        <LastMessege>{lastMessage}</LastMessege>
      </ChatLabel>
      <MessegeTime>{time}</MessegeTime>
      {chatShow && chatNumbers > 0 && <ChatNumbers>{chatNumbers}</ChatNumbers>}
    </ChatWrapper>
  );
}
