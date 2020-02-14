const jwt = require('jsonwebtoken');
const { getUserByID } = require('../services/UserService');

const SECRET = 'fksvkwvnwocnwoefbw';

module.exports = async(request) => {
	const Authorization = request.get('Authotization');
	if(Authorization){
		const formatedToken = Authorization.replace('JWT ','');
		const payload = jwt.verify(formatedToken,SECRET);
		if(!payload) return request;
		const user = await getUserByID(payload.id);
		if(!user) return request;
		return {...request,user};
	}else{
		return request;
	}

};