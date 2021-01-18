import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getData } from "../../api/get";
import {AdminActivity,Admin} from "../../api/admin";

function Reviseportfolio({ match }: any) {
  const id = match.params.id;
  const [portfolio, setportfolio] = useState<any>();
  useEffect(() => {
    Admin().AdminCheckToken().then(res=>{
      if(res.data.result==="token is fail")
      {
          window.localStorage.clear();
          window.location.replace("/");
      }
    }).catch(err=>{
      console.log(err);
    })
    getData()
      .GetDetailportfolio(id)
      .then((data) => {
        console.log(data);
        setportfolio(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function Onsubmit(){
    //   console.log("portfolio.img",portfolio.img);
    AdminActivity().Amendportfolio({id:id,...portfolio,img:btoa(portfolio.img)});
    // AdminActivity().Amendportfolio({...portfolio});
  }
  function setImg() {
    const image: HTMLInputElement = document.getElementById(
      "bin"
    ) as HTMLInputElement;
    //input tag
    // const image_section: HTMLImageElement = document.getElementById(
    //   "image_section"
    // ) as HTMLImageElement;
    //img tag
    if (image.files![0]) {
      const reader = new FileReader();
      reader.onload = function (e?: any) {
        // image_section.src = e.target.result;
        // setimg(e.target.result);
        // console.log("e.target.value",e.target.result);
        setportfolio({...portfolio,img:e.target.result});
      };
      reader.readAsDataURL(image.files![0]);
    }
  }
  function reserve() {
    return (
      <>
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
          <img src={atob(portfolio.img)} alt="(대충 대단한 프로젝트)" height="300px" width="300px"/>
        </label>
        <div>
          <input type="text" value={portfolio.kor} onChange={e=>setportfolio({...portfolio,kor:e.target.value})}/>
          <input type="text" value={portfolio.eng} onChange={e=>setportfolio({...portfolio,eng:e.target.value})}/>
        </div>
      </>
    );
  }
  return <Wrap>{portfolio && reserve()}
  <button type="submit" onClick={Onsubmit}>수정</button>
  </Wrap>;
}
const Wrap = styled.div`
  max-width: 700px;
  max-height: 400px;
`;
export default Reviseportfolio;
