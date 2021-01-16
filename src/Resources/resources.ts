import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {
    eng: { // 영어
      translation: {
        "title":"Allblack's Development Trike",
        "menu1":"Collection of works",
        "menu2":"About Me",
        "menu3":"Guestbook",
        'kor':"Korean",
        'eng':"English",

        'name':"Yoo Myunghwan",
        'nickname':"allblack",
        'company':"Sunrin Internet High School",
        "welcome1":"독특하고 창의작인 ",
        "welcome2":"개발자",
        "welcome3":" Famous 유명환 입니다",
        'guestplace1':"input your name",
        'guestplace2':"input guestbook",
        "project":"Project",
        "skills":"skills",
        "interduce":"interduce",
      }
    },
    kor: { // 한국어
      translation: {
        "title":"allblack의 개발세발",
        "menu1":"작품 소개",
        "menu2":"자기소개",
        "menu3":"방명록",
        'kor':"한국어",
        'eng':"영어",
        'name':"유명환",
        'nickname':"allblack",
        'company':"선린인터넷 고등학교 제학",
        "welcome1":"독특하고 창의작인 ",
        "welcome2":"개발자",
        "welcome3":" Famous 유명환 입니다",
        'guestplace1':"이름을 입력해주세요!",
        'guestplace2':"방명록을 작성해 주세요!",
        "project":"프로젝트",
        "skills":"기술 스텍",
        "interduce":"자기소게",
      }
    }
  }



i18n
  .use(initReactI18next)
  .init({
    resources, // 리소스
    lng: localStorage.getItem("language") || "kor", // 초기 설정 언어
  });