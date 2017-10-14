/**
 * MoviesController
 *
 * @description :: Server-side logic for managing Movies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function (req, res) {
        Movies.create(req.param("movies"))
            .then(function (result) {
                return res.ok(result);
            }).catch(function (err) {
                return res.serverError(err);
            });
    },
    
    findOneRecord: function (req, res) {
        Movies.findOne({"release_year": req.param("year")})
            .then(function (movie) {
                return res.ok(movie);
            }).catch(function (err) {
                return res.serverError(err);
            });
    },

    findAllRecords: function (req, res) {
        Movies.find()
            .then(function (movies){
                return res.ok(movies);
            }).catch(function (err) {
                return res.serverError(err);
            })
    },

    findOrCreateRecord: function (req, res) {
        Movies.findOrCreate({"movie_name": req.param("movie_name")}, req.param("movie"))
            .then(function (movie) {
                return res.ok(movie);
            }).catch(function (err) {
                return res.serverError(err);
            });
    },

    countRecord: function (req, res) {
        Movies.count()
            .then(function(moviesCount){
                return res.ok({total_movies: moviesCount});
            }).catch(function (err) {
                return res.serverError(err);
            });
    },

    updateRecord: function (req, res) {
        Movies.update({rating: req.param('from_rating')}, {rating: req.param('to_rating')})
            .then(function (updatedResult) {
                return res.ok(updatedResult);
            }).catch(function (err) {
                return res.serverError(err);
            });
    },

    native: function (req, res) {
        Movies.native(function(err, collection) {
            if (err) return res.serverError(err);
            collection.find({}).toArray(function (err, results) {
                if (err) return res.serverError(err);
                return res.ok(results);
            });
        });
    },
	
};

