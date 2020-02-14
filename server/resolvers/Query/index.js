const UserQuery = require ('./UserQuery.js');
const MovieQuery = require ('./MovieQuery');

module.exports = {
	...UserQuery,
	...MovieQuery
};