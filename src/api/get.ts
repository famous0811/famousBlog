import getClient from './client';
import parseError from './parseError';
function Get(){
    const Test=async () => {
        let data = await getClient
			.get('/')
			.then((res) => {
				console.log(res.data);
				// alert();
				return res.data;
			})
			.catch((err) => {
				alert(err);
				throw parseError(err);
			});
		return data;
    }
    return {
        Test
    }
}
export default Get;