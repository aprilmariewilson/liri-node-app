

exports.twitter = {
  consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_SECRET_KEY
};

exports.spotify = {
  id: process.env.ID,
  secret: process.env.SECRET
};

module.exports = {
	twitter: exports.twitter,
	spotify: exports. spotify
}