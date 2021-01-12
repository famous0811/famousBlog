import React, { useState, useEffect } from 'react';
import { getData } from "../../api/get";
import {AdminActivity} from "../../api/admin";
import styled from "styled-components";
function Writemypage() {
  const [skills, setSkills] = useState([
    "React-redux,mobx","React-redux,mobx"
  ]);
  const [portfolios, setPortfolios] = useState([
    {
      id: "0",
      title: "plant-plan-2020",
    },
    // {
    //   id: "1",
    //   title: "connecText (2020)",
    // },
  ]);
  const [otherinformations, setotherinformations] = useState([
    {
      
      text: "umh0811@naver.com",
      adds:"",
    },
    {
      text: "카카오톡 아이디: umh0811",
      adds:"",
    },
    {
      text: "Github",
      adds: "https://github.com/famous0811"
    },
    {
      
      text: "blog",
      adds: "https://allblack0811.tistory.com/"
    },
  ]);
    const [welcome, setwelcome] = useState({
      kor: "안녕하세요 webfront개발자가 되기위해 노력하는 유명환이라고 합니다! 현제 react를 주력으로 하고 있고 node.js를 열심히 공부하고 있습니다.",
    eng: "hellow I want to be web front engnier",
    });
    useEffect(() => {
        getData()
          .GetInterduce()
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    function Onsubmit() {
      AdminActivity().AmendInterduce({welcome,skills,portfolios,otherinformations});
    }
    return (
        <Wrap>
            {portfolios && portfolios.map(data=>{
              <input key={data.id} type="text" value={data.title}/>
            })}

            <button type="submit" onClick={Onsubmit}>수정</button>
        </Wrap>
    );
}

const Wrap = styled.div`

`;

export default Writemypage;