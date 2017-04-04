/**
 * Created by yellowb on 2017/4/4.
 */

var _ = require('lodash');

var comments = [],
    seq = 1;

function addComment(comment, author) {
    comments.push({
        id: seq++,
        comment: comment,
        author: author
    });
}

function getAllComments() {
    return comments;
}

function removeById(id) {
    if(!id && comments.length > 0) {
        _.remove(comments, function(obj) {
            return obj.id === id;
        });
    }
}

addComment('<script>(function(){alert(1);})()</script>', 'yellow');

module.exports = {
    addComment: addComment,
    getAllComments: getAllComments,
    removeById: removeById
};