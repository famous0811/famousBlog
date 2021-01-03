import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Item from "../components/portfolios";
import colors from "../Resources/constants/colors";
function Portfolios({match}:any) {
    const id=match.params.id;
    console.log(id);
    const { t } = useTranslation();
    const [portfolios,setportfolios]=useState([{
        id:"0",
        content:"작품명어쩌구 저쩌구",
        img:"test"
    },{
        id:"1",
        content:"작품명어쩌구 저쩌구",
        img:"test"
    },{
        id:"2",
        content:"작품명어쩌구 저쩌구",
        img:"test"
    },{
        id:"3",
        content:"작품명어쩌구 저쩌구",
        img:"test"
    }]);
    const [Searchdata,setSearchdata]=useState<any>();
    
    useEffect(() => {
        setSearchdata(portfolios.map(data=>data.id===match.params.id));
    },[match.params]);

    return (
        <Layout>
            <Wrap>
                {portfolios.map(data=>(<Item key={data.id} {...data}></Item>))}
                {id && <Item detail {...Searchdata}></Item>}
            </Wrap>
        </Layout>
    );
}

const Wrap = styled.div`
    /* width: 100%; */
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