module.exports = function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};

// module.exports = function(err, req, res, next) {
//   if(err.status !== 404) {
//     return next();
//   }

//   res.send(err.message || 'API just handled a 404 error');
// }


/* This could be a better approach
function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

*/
