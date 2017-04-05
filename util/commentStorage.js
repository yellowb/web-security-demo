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

//addComment('<script>(function(){alert(1);})()</script>', 'yellow');
//addComment('<img src="#" onerror="(function(){alert(1);})()">', 'yellow');
// <a href="/comments/remove?id=1">good thing</a>
// <script src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/js/tu_329aca4.js"></script>

addComment('Yellow happy', 'yellow');
addComment('Tom upset', 'tom');

module.exports = {
    addComment: addComment,
    getAllComments: getAllComments,
    removeById: removeById
};