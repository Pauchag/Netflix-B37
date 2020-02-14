const { createUser, updateUserByID, getUserByID, deleteUserByID } = require('../../services/UserService');
const authenticate = require('../../utils/authenticate');

const newUser = (root,args,context,info) => {

	return createUser(args.data);
};

const login = async (root,args) => {
	const token = await authenticate(args);
	return {
		token,
		message:'Token created successfully'
	};
};

const updateUser = async (_,args) => {
	const updateUser = await updateUserByID(args.id, args.data);
	console.log(updateUser);
	return getUserByID(args.id);
};

const deleteUser = async (_,args) => {
	const deleteUser = deleteUserByID(args.id);
	console.log(deleteUser);
	return {
		code:204,
		message:'User removed successfully'
	};
};


module.exports = {
	newUser,
	login,
	updateUser,
	deleteUser,
};