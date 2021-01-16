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
            return res.data.result;
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
    welcome:{
        kor: string;
        eng: string;
    };
    skills: string[];
    portfolios: {
        _id:string;
        title: string;
    }[];
    otherinformations: {
        text: string;
        adds: string;
    }[];
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
        alert(img);
        let data = await getClient
        .post('/admin/amendportfolio',{id,img,kor,eng,title})
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
    const MakeInterduce=async ({welcome,skills,portfolios, otherinformations}:Interduce)=>{
        let data = await getClient
        .post('/admin/makeInterduce',{welcome,skills,portfolios, otherinformations})
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
    const AmendInterduce=async ({welcome,skills,portfolios,otherinformations}:Interduce)=>{
        let data = await getClient
        .post('/admin/amendInterduce',{welcome,skills,portfolios,otherinformations})
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