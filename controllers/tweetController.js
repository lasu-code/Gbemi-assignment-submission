exports.facebook = function(req, res, next){
    res.render('profile', {title: "What can you tell us about Lasu?"});
};

exports.linkedin = function(req, res, next){
    res.render('profile', {title: "Programming is interesting but headache driven"});
};


exports.following = function(req, res, next){
    res.render('follow', {title: "Welcome to Lasu CodeTweets"});
};







// exports.homePage= function (req, res, next) {
//     res.render('índex', {title: 'LASU'});
// };

// exports.tweets = function (req, res, next) {
//     res.render('thing', {title: 'My tweets', tweets: ("Todays class is somwhow")});
// };

// exports.profilePage= function (req, res, next) {
//     res.render('profile', {title: 'My tweets', username: req.params.name});
// };

