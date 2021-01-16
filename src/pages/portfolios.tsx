import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Item from "../components/portfolios";
import { getData } from "../api/get";
function Portfolios({ match }: any) {
  const id = match.params.id;
  const [portfolios, setportfolios] = useState<any[]>([]);
  const [Searchdata, setSearchdata] = useState<any>();
  useEffect(() => {
    getData()
      .Getportfolio()
      .then((data) => {
        console.log(data);
        setportfolios(data);
      })
      .catch((err) => {
        console.error(err);
      });
      console.log(portfolios[0]);
  }, []);

  useEffect(() => {

    if (match.params.id !== undefined) {
      portfolios.map((data)=>{
        console.log(data.id);
        return data._id === match.params.id ? setSearchdata(data) : "";
      })
    }
    else{
      setSearchdata(undefined);
    }
  }, [match.params.id]);

  // useEffect(() =>{
  //   alert(window.localStorage.getItem("language"));
  // },[window.localStorage.getItem("language")])
  return (
    <Layout>
      <Wrap>
        {portfolios &&
          portfolios.map((data) => <Item key={data.id} {...data}/>)}
        {Searchdata && <Item detail {...Searchdata}/>}
      </Wrap>
    </Layout>
  );
}

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
  padding: 40px 20px;
  overflow-y: auto;
  box-sizing: border-box;
`;


export default Portfolios;
