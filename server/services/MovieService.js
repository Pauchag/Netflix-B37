const Event = require('../models/events');

const getMovies = () => {
	return Event.find({is_active:true}).exec();

};

const getMovieByID = (_id) => {
	return Event.findOne({_id}).exec();
};


module.exports = {
	getMovies,
	getMovieByID,
};