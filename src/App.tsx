import { useEffect } from "react";
import Router from "./Router";
import { observer, inject } from "mobx-react";
import AOS from "aos";
import "aos/dist/aos.css";

const titleMultiLanguage: any = {
  eng: "allblack 블로그",
  kor: "allblack bloge",
};

const App = observer(
  inject("language")((props: any) => {
    useEffect(() => {
      const savedLanguage: string = localStorage.getItem("language") || "";
      if (savedLanguage) props.language.changeLanguage(savedLanguage);
      AOS.init();
      AOS.refresh();
    }, []);
    document.title = titleMultiLanguage[props.language.language];
    return Router;
  })
);

export default App;
