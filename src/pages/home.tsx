import React, { useState,useEffect } from "react";
import Layout from "../components/layout";
import Slider from "react-slick";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Img } from "../Resources/img";
import colors from "../Resources/constants/colors";
function Home() {
  const { t } = useTranslation();
  const [SliderContent, setSliderContent] = useState([
    {
      id: 0,
      content: t('maincontents1'),
      img: Img.umh1,
    },
    {
      id: 1,
      content: t('maincontents2'),
      img: Img.umh2,
    },
    {
      id: 2,
      content: t('maincontents3'),
      img: Img.umh3,
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  useEffect(() => {
    setSliderContent(
      SliderContent.map((data) => ({
        ...data,
        content: t("maincontents" + (data.id + 1)),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SliderContent]);
  return (
    <Layout>
      <Wrap>
        <SliderWrap>
          <Slider {...settings}>
            {SliderContent.map((data) => (
              <SliderItem key={data.id} img={data.img || "(대충 잘생긴 유명환 사진)"}>
                <div>{data.content}</div>
              </SliderItem>
            ))}
          </Slider>
        </SliderWrap>
        <Title>{t('welcome')}</Title>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  margin-top: 108px;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const SliderWrap = styled.div`
  width: 100%;
  height: 100%;
  max-height:600px; 
   max-width:500px;
  object-fit: cover;
  padding:20px 0px;
  overflow: hidden;
`;

const SliderItem = styled.div<{img:string}>`
  width: 100%;
  height: 100%;
  background-size:cover;
  background-image:url(${({img}) =>img});
  font-weight:800;
  font-size:3em;
  position:relative;
  &>div{
    color: ${colors.primaryWhite};
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,100%);
  }
`;
const Title = styled.h1`

`;
export default Home;
