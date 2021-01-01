import { observable, action } from 'mobx';
export default class LanguageStore {
  @observable language = 'kor';

  @action changeLanguage = (language: string) => {
    this.language = language;
    localStorage.setItem('language', language);
  };
}
