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
    if(!!id && comments.length > 0) {
        _.remove(comments, function(obj) {
            return obj.id == id;
        });
    }
}

addComment('不错这很清真', 'yellow');
addComment('感觉自己萌萌哒', 'tom');

module.exports = {
    addComment: addComment,
    getAllComments: getAllComments,
    removeById: removeById
};