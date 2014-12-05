/*
 * GET home page.
 */

exports.search = function(req, res){
  res.render('search', { title: 'BorderlessFamily', user: req.user });
};
