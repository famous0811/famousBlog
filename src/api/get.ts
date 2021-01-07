import getClient from './client';
import parseError from './parseError';

interface GeastProps{
	userId: string;
	text: string;
}

export function Geast({userId,text}:GeastProps){
	const MakeGustbook=async()=>{
		let data = await getClient
        .post('/guest/makeguestbook',{userId,text})
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
	return{
		MakeGustbook
	}
}

export function getData(){
	const Getguestbook=async()=>{
		let data = await getClient
        .get('/getguestbook')
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
	const Getportfolio=async()=>{
		let data = await getClient
        .get('/getportfolio')
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
	const GetInterduce =async()=>{
		let data = await getClient
        .get('/getInterduce')
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
	return{
		Getguestbook,
		Getportfolio,
		GetInterduce
	}
}