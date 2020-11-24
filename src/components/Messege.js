import React, { useEffect, useState } from "react";
import {
  MessegeWrapper,
  MessegeMenu,
  ForwardLabel,
  ForwardFrom,
  ReadMore,
  MessegeMenuList,
  Item,
  MessegeboxWrapper,
  Replay,
  ReplayName,
  ReplText,
  Forward,
  ForwardText,
} from "./StyledComponents";
import * as fa from "react-icons/fa";

function Messege({
  message,
  isOpponent,
  deleteMessege,
  replyMessege,
  replay,
  chatName,
  forwardMessege,
  isforwarded,
}) {
  const [messegeMenu, setMessegeMenu] = useState(false);
  const [showMessegeMenu, setShowMessegeMenu] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      if (messegeMenu) {
        setMessegeMenu(false);
      }
    });
  });

  const handelMessegeMenu = (eve) => {
    setMessegeMenu(!messegeMenu);
    eve.stopPropagation();
  };
  const handleCollapse = () => {
    setIsCollapse(true);
  };
  return (
    <>
      <MessegeboxWrapper
        isOpponent={isOpponent}
        onMouseOver={() => setShowMessegeMenu(true)}
        onMouseOut={() => setShowMessegeMenu(false)}
      >
        {Object.getOwnPropertyNames(replay).length > 0 && (
          <Replay isOpponent={isOpponent} rep={replay.isOpponent}>
            <ReplayName rep={replay.isOpponent}>
              {replay.isOpponent ? "You" : chatName}
            </ReplayName>
            <ReplText>
              {replay.text.length > 290
                ? `${replay.text.substring(0, 290)}...`
                : replay.text}
            </ReplText>
          </Replay>
        )}
        {Object.getOwnPropertyNames(isforwarded).length > 0 && (
          <Forward>
            <ForwardText>
              <ForwardLabel>forwarded from </ForwardLabel>
              <ForwardFrom>{isforwarded.from}</ForwardFrom>
            </ForwardText>
          </Forward>
        )}
        <MessegeWrapper isOpponent={isOpponent}>
          <div>
            {!isCollapse ? (
              message.length > 600 ? (
                <div>
                  {message.substring(0, 600)}...
                  <ReadMore onClick={handleCollapse}>Read more</ReadMore>
                </div>
              ) : (
                message
              )
            ) : (
              message
            )}
          </div>
          <MessegeMenu mode={isOpponent} show={showMessegeMenu}>
            <fa.FaChevronDown onClick={handelMessegeMenu} />
          </MessegeMenu>
          {messegeMenu && (
            <MessegeMenuList out={messegeMenu} mode={isOpponent}>
              <Item onClick={deleteMessege}>Delete message</Item>
              <Item onClick={replyMessege}>Reply message</Item>
              <Item onClick={forwardMessege}>Forward message</Item>
            </MessegeMenuList>
          )}
        </MessegeWrapper>
      </MessegeboxWrapper>
    </>
  );
}

export default Messege;
