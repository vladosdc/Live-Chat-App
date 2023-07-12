import React, {useContext, useReducer} from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
          <img className="chat-info__img" src={data.user?.photoURL} alt=""/>
        <span className="chat-info__userName">{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
