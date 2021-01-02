import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {
    eng: { // 영어
      translation: {
        "welcome": "Good morning.",
        "title":"Allblack's Development Trike",
        "menu1":"Collection of works",
        "menu2":"About Me",
        "menu3":"Collection of blog posts (to be written)",
        'kor':"korean",
        'eng':"english",
      }
    },
    kor: { // 한국어
      translation: {
        "welcome": "좋은 아침 입니다.",
        "title":"allblack의 개발세발",
        "menu1":"작품 소개",
        "menu2":"자기소개",
        "menu3":"글 모음집",
        'kor':"한국어",
        'eng':"영어",
      }
    }
  }



i18n
  .use(initReactI18next)
  .init({
    resources, // 리소스
    lng: localStorage.getItem("language") || "kor", // 초기 설정 언어
  });