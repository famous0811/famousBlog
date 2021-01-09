import React,{ useState} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {Admin} from "../../api/admin";

function Signup() {
    const History = useHistory();
    const [id, setId]= useState("");
    const [password, setPassword]=useState("");
    const [Againpassword, setAgainPassword]=useState("");

    function Onsubmit() {
        if(id==="" || password==="" || Againpassword==="")
            return;
        if(password!==Againpassword)
            return;

        Admin().AdminSignUp({id,password});
        // alert("test");
    }
    return (
        <Wrap>
            <div className="signup">
                <h1>SignUp</h1>
                <Input type="text" value={id} onChange={e=>setId(e.target.value)}/>
                <Input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <Input type="password" value={Againpassword} onChange={e=>setAgainPassword(e.target.value)}/>
                <Button type="submit" onClick={Onsubmit}>계정 생성</Button>
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
  background:rgba(0,0,0,0.5);
  &>.signup{
      display: flex;
      flex-direction: column;
      background:white;
      border-radius:10px;
      padding:20px 40px;
  }
`;

const Input = styled.input`
border:none;
`;

const Button = styled.button`
border:none;
border-radius:10px;
`;
export default Signup;