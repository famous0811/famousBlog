import React, { useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
function Writed() {
  const [datas, setdatas] = useState([
    {
      id: "0",
      userId: "test",
      text: "와 안녕하세요!",
    },
  ]);
  function UpdateGuestbook() {
    if(chat==="" || userId==="")
      return;
    setdatas([...datas,{
        id:"1",
        userId: userId,
        text:chat,
    }]);
    setchat("");
    setuserId("");
  }
  const [chat, setchat] = useState("");
  const [userId, setuserId] = useState("");
  return (
    <Layout>
      {/* 방명록 작성할수 있게 ㅎㅎ */}
      <Wrap>
        <Title>방명록</Title>
        <Guestbook>
          {datas.map((data) => (
            <Chat key={data.id}>
              <div className="userId">{data.userId}</div>
              <div className="text">{data.text}</div>
            </Chat>
          ))}
        </Guestbook>
        <WriteGuestbook>
          <input
            className="name"
            type="text"
            placeholder="이름을 입력해주세요!"
            onChange={(e) =>setuserId(e.target.value)}
            value={userId}
            onKeyDown=
            {(e) =>{
              if(e.key === 'Enter')
              UpdateGuestbook();
            }}
          />
          <input
            className="chat"
            type="text"
            placeholder="방명록을 작성해 주세요!"
            onChange={(e) => setchat(e.target.value)}
            onKeyDown=
            {(e) =>{
                if(e.key === 'Enter')
                UpdateGuestbook();
              }}    
            value={chat}
          />
        </WriteGuestbook>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 20px 40px;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  box-sizing: border-box;
`;
const Title = styled.h1`
  /* text-align:start; */
  margin: 10px 5px;
`;
const Guestbook = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 15px;
  /* height:100%;*/
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 40px;
  height:40vh;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
`;
const WriteGuestbook = styled.div`
  display: flex;
  justify-content: center;
  margin-top:10px;
  & > input {
    border: none;
    font-size: 1.2em;
  }
  &>.name{
      max-width:100px;
      margin-right:10px;
      font-size: 12px;
  }
  &>.chat{

  }
`;
const Chat = styled.div`
  position: relative;
  & > .userId {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.2em;
    /* padding-left:20px; */
  }
  & > .text {
    margin-top: 30px;
    border-radius: 10px;
    padding: 2px 20px;
    background: white;
    box-sizing: border-box;
    display: flex;
    /* max-width:300px; */
  }
`;
export default Writed;
