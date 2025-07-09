import React, { useCallback, useEffect, useRef, useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import ScrollableFeedLib from "react-scrollable-feed";
const ScrollableFeed = ScrollableFeedLib as unknown as React.FC<any>;

import { useReactiveVar } from "@apollo/client";
import { socketVar, userVar } from "../../apollo/store";
import { Messages, REACT_APP_API_URL } from "../config";
import { sweetErrorAlert } from "../sweetAlert";
import { Member } from "@/libs/dto/member/member";
import { RippleBadge } from "@/public/assets/MaterialTheme/styled";

interface MessagePayload {
  event: string;
  text: string;
  memberData: Member;
}

interface InfoPayload {
  event: string;
  totalClients: number;
  memberData: Member;
  action: string;
}

const Chat = () => {
  const chatContentRef = useRef<HTMLDivElement>(null);
  const [messagesList, setMessagesList] = useState<MessagePayload[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const [messageInput, setMessageInput] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [openButton, setOpenButton] = useState(false);
  const user = useReactiveVar(userVar);
  const socket = useReactiveVar(socketVar);

  /** LIFECYCLES **/
  useEffect(() => {
    if (socket) {
      socket.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        console.log("WebSocket message:", data);

        switch (data.event) {
          case "info":
            const newInfo: InfoPayload = data;
            setOnlineUsers(newInfo.totalClients);
            break;
          case "getMessages":
            const list: MessagePayload[] = data.list;
            setMessagesList(list);
            break;
          case "message":
            const newMessage: MessagePayload = data;
            messagesList.push(newMessage);
            setMessagesList([...messagesList]);
            break;
        }
      };
    }
  }, [socket, messagesList]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpenButton(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  /** HANDLERS **/
  const handleOpenChat = () => {
    setOpen((prevState) => !prevState);
  };

  const getInputMessageHandler = useCallback((e: any) => {
    const text = e.target.value;
    setMessageInput(text);
  }, []);

  const getKeyHandler = (e: any) => {
    try {
      if (e.key == "Enter") {
        onClickHandler();
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const onClickHandler = () => {
    if (!messageInput) sweetErrorAlert(Messages.error4);
    else {
      if (socket) {
        socket.send(JSON.stringify({ event: "message", data: messageInput }));
      } else {
        sweetErrorAlert("Socket connection is not available.");
      }
      setMessageInput("");
    }
  };

  return (
    <Stack className="chatting">
      {openButton ? (
        <button className="chat-button" onClick={handleOpenChat}>
          {open ? (
            <CloseFullscreenIcon style={{ color: "rgb(81, 66, 252)" }} />
          ) : (
            <MarkChatUnreadIcon style={{ color: "rgb(81, 66, 252)" }} />
          )}
        </button>
      ) : null}
      <Stack className={`chat-frame ${open ? "open" : ""}`}>
        <Box className={"chat-top"} component={"div"}>
          <div style={{ fontFamily: "Nunito" }}>Online Chat</div>
          <RippleBadge
            style={{ margin: "-18px 0 0 21px" }}
            badgeContent={onlineUsers}
          />
        </Box>
        <Box
          className={"chat-content"}
          id="chat-content"
          ref={chatContentRef}
          component={"div"}
        >
          <ScrollableFeed>
            <Stack className={"chat-main"}>
              <Box
                flexDirection={"row"}
                style={{ display: "flex" }}
                sx={{ m: "10px 0px" }}
                component={"div"}
              >
                <div className={"welcome"}>Welcome to Live chat!</div>
              </Box>
              {messagesList.map((ele: MessagePayload, index) => {
                const { text, memberData } = ele;
                const memberImage = memberData?.memberImage
                  ? `${REACT_APP_API_URL}/${memberData.memberImage}`
                  : `/img/profile/defaulUser.svg`;

                if (memberData?._id === user?._id) {
                  return (
                    <Box
                      key={ele.text + index}
                      component={"div"}
                      flexDirection={"row"}
                      style={{ display: "flex" }}
                      alignItems={"flex-end"}
                      justifyContent={"flex-end"}
                      sx={{ m: "10px 0px" }}
                    >
                      <div className={"msg-right"}>{text}</div>
                    </Box>
                  );
                } else {
                  return (
                    <Box
                      key={ele.text + index}
                      flexDirection={"row"}
                      style={{ display: "flex" }}
                      sx={{ m: "10px 0px" }}
                      component={"div"}
                    >
                      <Avatar alt={"thomas"} src={memberImage} />
                      <div className={"msg-left"}>{text}</div>
                    </Box>
                  );
                }
              })}
              <></>
            </Stack>
          </ScrollableFeed>
        </Box>
        <Box className={"chat-bott"} component={"div"}>
          <input
            type={"text"}
            name={"message"}
            className={"msg-input"}
            placeholder={"Type message"}
            value={messageInput}
            onChange={getInputMessageHandler}
            onKeyDown={getKeyHandler}
          />
          <button className={"send-msg-btn"} onClick={onClickHandler}>
            <SendIcon style={{ color: "#fff" }} />
          </button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Chat;
