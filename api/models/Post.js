/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        member_id: {
            type: 'string',
            required: true,
            unique: true
        },
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        post_content: {
            type: 'string',
            required: true
        },
        other: {
            type: 'string'
        },
        url_title: {
            type: 'string',
            required: true,
            unique: true
        }
    },

    getAll: function() {
        return User.find()
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return User.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

