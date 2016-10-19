/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(data) {
   
  return `
    <section class="createdTweets">
      <article>
        <header><img class="logo" src="${data.user.avatars.regular}"><h1>${data.user.name}</h1><h5>${data.user.handle}</h5></header>
          <p>${data.content.text}</p>
        <footer>${data.created_at}<span class="glyphicon glyphicon-flag"></span><span class="glyphicon glyphicon-retweet"></span><span class="glyphicon glyphicon-heart"></span></footer>
      </article>
    </section>
  `;
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('section.createdTweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

