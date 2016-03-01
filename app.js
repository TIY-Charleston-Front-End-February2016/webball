$(document).ready(function() {
  twitterClone.init();
});

var twitterClone = {
  twitUrl: "https://tiny-tiny.herokuapp.com/collections/tweet-tweet/",
  init: function() {
    twitterClone.styling();
    twitterClone.events();
  },
  styling: function() {

  },
  events: function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      console.log("i was tweetweeted");
      var tweetMsg = $('input[type="text"]').val();
      $('input[type="text"]').val("");
      twitterClone.addTweet(tweetMsg);
    })
  },
  addTweet: function(tweet) {
    $.ajax({
      method: 'POST',
      url: twitterClone.twitUrl,
      data: {tweet: tweet},
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.log(err);
      }
    })
  },
  getTweets: function(url) {

  },
  updateTweet: function(tweet) {

  },
  deleteTweet: function(tweet) {

  },
  ajaxCall: function(method,url,data,id) {

  }
}
