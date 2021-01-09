import getClient from './client';
import parseError from './parseError';

interface Login{
    id: string;
    password: string;
}

export function Admin(){
    const AdminLogin=async ({id,password}:Login) => {
        let data = await getClient
        .post('/admin/login',{id,password})
        .then((res) => {
            // console.log(res.data.data);
            window.localStorage.setItem('admin',res.data.data);
            window.location.replace("/write");
            return res.data;
        })
        .catch((err) => {
            // alert(err);
            throw parseError(err);
        });
    return data;
    }
    const AdminSignUp=async ({id,password}:Login) => {
        let data = await getClient
        .post('/admin/signup',{id,password})
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            alert(err);
            throw parseError(err);
        });
    return data;
    }
    const AdminCheckToken=async () => {
        // alert("noe");
        let data = await getClient
        .get('/admin/token')
        .then((res) => {
            if(res.data.result==="token is fail")
            {
                window.localStorage.clear();
                window.location.replace("/");
            }

            return res.data;
        })
        .catch((err) => {
            alert(err);
            throw parseError(err);
        });
    return data;
    }
    
    return {
        AdminLogin,
        AdminSignUp,
        AdminCheckToken,
    }
}

interface Portfolio{
    img: string;
    eng: string;
    kor: string;
    title:string;
    id?: string
}
interface Interduce{
    id?: string;
    welcome:{
        kor: string;
        eng: string;
    };
    skills: string[];
    portfolios: Portfolio[];
    contacts: string[];
    othersites: string[];
}

export function AdminActivity(){
    const MakePortfolio=async ({img,kor,eng,title}:Portfolio)=>{
        alert('test');
        let data = await getClient
        .post('/admin/makeportfolio',{img,kor,eng,title})
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            alert(err);
            throw parseError(err);
        });
    return data;
    }
    const Amendportfolio=async ({id,img,kor,eng,title}:Portfolio)=>{
        let data = await getClient
        .post('/admin/amendInterduce',{id,img,kor,eng,title})
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            alert(err);
            throw parseError(err);
        });
    return data;
    }
    const MakeInterduce=async ({welcome,skills,portfolios, contacts,othersites}:Interduce)=>{
        let data = await getClient
        .post('/admin/makeportfolio',{welcome,skills,portfolios, contacts,othersites})
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            alert(err);
            throw parseError(err);
        });
    return data;
    }
    const AmendInterduce=async ({id,welcome,skills,portfolios, contacts,othersites}:Interduce)=>{
        let data = await getClient
        .post('/admin/makeportfolio',{id,welcome,skills,portfolios, contacts,othersites})
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            alert(err);
            throw parseError(err);
        });
    return data;
    }
    

    return {
        MakePortfolio,
        Amendportfolio,
        MakeInterduce,
        AmendInterduce,
    }
}