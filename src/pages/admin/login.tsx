import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {Admin} from "../../api/admin";

function Login() {
  const History = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function Onsubmit() {
    if (id === "" || password === "") return;
    //History.replace("/write");
    Admin().AdminLogin({id, password});
  }
  return (
    <Wrap>
      <div>
        <Title>AdminLogin</Title>
        <div className="login">
          <InputWrap>
            <Input
              type="text"
              placeholder="어드민 아이디를 입력하세요!"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrap>
        </div>
        <Button type="submit" onClick={Onsubmit}>
          login
        </Button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid gray;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    max-width: 350px;
    max-height: 400px;
    padding: 30px;
    & > .login {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      max-height: 100px;
      border-radius: 10px;
    }
  }
`;
const Title = styled.h1``;
const InputWrap = styled.span`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 1px;
    transition: width 0.5s;
    background: gray;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
const Button = styled.button`
  border: none;
  background: gray;
  color: white;
  border-radius: 20px;
  width: 100%;
  font-size: 1.5em;
  &:hover {
    border: 1px solid gray;
    background: white;
    color: gray;
  }
`;
const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 5px;
  /* background:gray; */
  text-align: center;
  padding: 10px 50px;
  /* font-size: 1.1rem; */
`;
export default Login;
