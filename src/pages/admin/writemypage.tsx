import React, { useState, useEffect } from "react";
import { getData } from "../../api/get";
import { AdminActivity, Admin } from "../../api/admin";
import styled from "styled-components";
function Writemypage() {
  const [skills, setSkills] = useState<any[]>([]);
  const [portfolios, setPortfolios] = useState<
    { _id: string; title: string }[]
  >([]);
  const [otherinformations, setotherinformations] = useState<
    {
      _id: string;
      text: string;
      adds: string;
    }[]
  >([]);
  const [newskill, setnewskill] = useState("");
  const [newotherinformation, setnewotherinformation] = useState("");
  const [welcome, setwelcome] = useState<{
    kor: string;
    eng: string;
  }>({
    kor: "",
    eng: "",
  });

  useEffect(() => {
    Admin()
      .AdminCheckToken()
      .then((res) => {
        if (res.data.result === "token is fail") {
          window.localStorage.clear();
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getData()
      .GetInterduce()
      .then((data) => {
        setwelcome(data.wlecome);
        setotherinformations(data.otherinformations);
        setPortfolios(data.portfolios);
        setSkills(data.skills);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Onsubmit() {
    AdminActivity().AmendInterduce({
      welcome,
      skills,
      portfolios,
      otherinformations,
    });
  }
  // alert(welcome.kor);
  return (
    <Wrap>
      <div className="contents">
        <h1>welcome</h1>
        <input
          type="text"
          value={welcome.kor}
          style={{ width: "100%" }}
          onChange={(e) =>
            setwelcome({
              eng: welcome.eng,
              kor: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={welcome.eng}
          style={{ width: "100%" }}
          onChange={(e) =>
            setwelcome({
              eng: e.target.value,
              kor: welcome.kor,
            })
          }
        />
      </div>
      <div className="contents">
        <h1>skills</h1>
        <input
          type="text"
          style={{ width: "100%" }}
          value={newskill}
          onChange={(e) => setnewskill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setnewskill("");
              setSkills([...skills,newskill]);
            }
          }}
        />
        {skills.map((data) => (
          <input type="text" value={data} style={{ width: "100%" }} />
        ))}
      </div>
      <div className="contents">
        <h1>portfolios</h1>
        <ol>
          {portfolios.map((data) => (
            <li key={data._id}>{data.title}</li>
          ))}
        </ol>
      </div>
      <div className="contents">
        <h1>otherinformations</h1>
        {otherinformations.map((data) => (
          <div key={data._id} style={{ width: "100%", display: "flex" }}>
            <input type="text" value={data.text} style={{ width: "100%" }} />
            <input type="text" value={data.adds} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
      <button type="submit" onClick={Onsubmit}>
        수정
      </button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
  box-sizing: border-box;
  & > .contents {
    margin: 20px 0px;
  }
  padding:20px 10px;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
`;

export default Writemypage;
