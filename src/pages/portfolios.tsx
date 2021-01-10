import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Item from "../components/portfolios";
// import colors from "../Resources/constants/colors";
import {getData} from "../api/get";

function Portfolios({match}:any) {
    const id=match.params.id;
    const [portfolios,setportfolios]=useState<any[]>([]);
    const [Searchdata,setSearchdata]=useState<any>();

    useEffect(() => {
        getData().Getportfolio().then(data=>{
            console.log(data);
            setportfolios(data);
        }).catch(err =>{
            console.error(err);
        });
    },[]);

    useEffect(() => {
        if (id !== {})
            setSearchdata(portfolios.filter(data=>data._id===id)[0])
    },[id]);

    
    return (
        <Layout>
            <Wrap>
                {portfolios && portfolios.map(data=>(<Item key={data.id} {...data}></Item>))}
                {id && <Item detail {...Searchdata}></Item>}
            </Wrap>
        </Layout>
    );
}

const Wrap = styled.div`
    height: 100%;
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    margin:auto;
    padding:40px 20px;
    overflow-y:auto;
    box-sizing:border-box;
`;


export default Portfolios;