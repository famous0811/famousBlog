import { observable, action } from 'mobx';

interface Themeprops{
    isDark:boolean;
}
export default class Darkmodestore{
    @observable theme:Themeprops={
        isDark:false
    };

    @action setDarkTheme=(isDark:boolean) =>{
        this.theme.isDark=isDark;
        localStorage.setItem('isDark',''+this.theme.isDark);
    }
}