/**
 * Movies.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "movies",
    autoPK: true,
    attributes: {
        movie_name: {
            type: "string"
        },
        image: {
            type: "string"
        },
        rating: {
            type: "float"
        },
        release_year: {
            type: "integer"
        },
        genre: {
            type: "string"
        },
        running_time: {
            type: 'integer'
        }
    }
};

