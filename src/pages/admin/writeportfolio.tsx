import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import {Admin,AdminActivity} from "../../api/admin";
// import colors from "../../Resources/constants/colors";

function Writeportfolio() {
  const History = useHistory();
  const { t } = useTranslation();
  const [title, settitle] = useState("");
  const [kor, setkor] = useState("");
  const [eng, seteng] = useState("");
  const [img, setimg] = useState("");

  useEffect(() => {
    //토큰 검사
    // History.replace("/");
    // console.log(window.localStorage.getItem("admin"));
    Admin().AdminCheckToken().then(res=>{
      if(res.data.result==="token is fail")
      {
          window.localStorage.clear();
          window.location.replace("/");
      }
    }).catch(err=>{
      console.log(err);
    })
  }, []);

  function setImg() {
    const image: HTMLInputElement = document.getElementById(
      "bin"
    ) as HTMLInputElement;
    //input tag
    const image_section: HTMLImageElement = document.getElementById(
      "image_section"
    ) as HTMLImageElement;
    //img tag
    if (image.files![0]) {
      const reader = new FileReader();
      reader.onload = function (e?: any) {
        image_section.src = e.target.result;
        setimg(e.target.result);
      };
      reader.readAsDataURL(image.files![0]);
    }
  }

  function Onsubmit(){
    if(img==="" || kor==="" || eng==="" || title==="")
      return;

      AdminActivity().MakePortfolio({img:btoa(img),kor,eng,title});
  }
  return (
    <Layout>
      <Wrap>
        <h1>포트폴리오 작성하기</h1>
        <TitleLine>
        <Title
          type="text"
          placeholder="작품명-(년도)"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <div style={{ display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <label>
          <input
            type="file"
            name="uploadImg"
            accept="image/jpeg,image/png" //파일 형식 지정
            id="bin"
            onChange={(e) => {
              setImg();
            }}
            style={{ display: "none" }}
          />
          <Imgset>{!img ? "이미지 선택하기" : "이미지 선택완료"}</Imgset>
        </label>
        
        <img
          style={{ maxWidth: "500px", maxHeight: "250px", cursor: "pointer" }}
          id="image_section"
          src={img}
          alt=""
        />
</div>
        <WrapText>
          <textarea
            placeholder="한국어"
            value={kor}
            onChange={(e) => setkor(e.target.value)}
          />
          <textarea
            placeholder="영어로"
            value={eng}
            onChange={(e) => seteng(e.target.value)}
          />
        </WrapText>
        <Button type="submit" onClick={Onsubmit}>저장하기</Button>
        </TitleLine>
      </Wrap>
    </Layout>
  );
}
const Imgset = styled.div`
  cursor: pointer;
`;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px 50px;
  overflow-y:auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const TitleLine = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid black;
  padding:30px 40px;
`;

const Title = styled.input`
  width: 100%;
  padding:10px 0px;
  border-radius:10px;
  text-align: center;
  border: none;
  font-size:18px;
`;

const WrapText = styled.div`
width: 100%;
height: 100%;
padding:30px 40px;
display: flex;
justify-content:space-around;
&>textarea{
  border-radius:5px;
  box-sizing:border-box;
  width: 100%;
  max-height:400px;
  padding:10px 20px;
}
&>textarea:first-child{
  margin-right:10px;
}
`;

const Button= styled.button`
  border:none;
  background:black;
  color:white;
  width:100%;
  height:30px;
  margin-bottom:10px;
  transition:background 0.5s, color 0.5s;
  &:hover{
    background:white;
  color:black;
  }
`;
export default Writeportfolio;
