import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {
    eng: { // 영어
      translation: {
        "welcome": "Hello, this is the world's most famous blog (?)",
        'maincontents1':'Nice',
        'maincontents2':'So cool',
        'maincontents3':'This is me!',
        "title":"Allblack's Development Trike",
        "menu1":"Collection of works",
        "menu2":"About Me",
        "menu3":"Guestbook",
        'kor':"Korean",
        'eng':"English",

        'name':"Yoo Myunghwan",
        'nickname':"allblack",
        'job':"student",
        'company':"Sunrin Internet High School",
      }
    },
    kor: { // 한국어
      translation: {
        "welcome": "안녕하세요 세상에서 가장 유명한 블로그(?) 입니당",
        'maincontents1':'존잘',
        'maincontents2':'너무 멋있당',
        'maincontents3':'이게 나야!',
        "title":"allblack의 개발세발",
        "menu1":"작품 소개",
        "menu2":"자기소개",
        "menu3":"방명록",
        'kor':"한국어",
        'eng':"영어",

        'name':"유명환",
        'nickname':"닉네임 : allblack",
        'job':"직업 : 학생",
        'company':"회사 : 선린인터넷 고등학교",
      }
    }
  }



i18n
  .use(initReactI18next)
  .init({
    resources, // 리소스
    lng: localStorage.getItem("language") || "kor", // 초기 설정 언어
  });