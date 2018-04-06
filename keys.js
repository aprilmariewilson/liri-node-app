

exports.twitter = {
  consumer_key: "process.env.CONSUMER_KEY",
	consumer_secret: "process.env.CONSUMER_SECRET",
	callback: "https://twitter.com/NewLiri",
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.ID,
  secret: process.env.SECRET
};

module.exports = {
	twitter: exports.twitter,
	spotify: exports. spotify
}