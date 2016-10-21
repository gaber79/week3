/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(function() {

  function createTweetElement(tweet) {
    return `
      <section class="createdTweets">
        <article>
          <header><img class="logo" src="${tweet.user.avatars.regular}"><h2>${tweet.user.name}</h2><h5>${tweet.user.handle}</h5></header>
            <p>${escape(tweet.content.text)}</p>
          <footer>${tweet.created_at}<span class="glyphicon glyphicon-flag"></span><span class="glyphicon glyphicon-retweet"></span><span class="glyphicon glyphicon-heart"></span></footer>
        </article>
      </section>
    `;
  }

  function renderTweets(tweets) {
    var userList = '';

    for (let user of tweets) {
      userList = createTweetElement(user) + userList;
    }
    $('main.container').append(userList); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  }

  $(':input:submit').on('click', function(event) {
    event.preventDefault();
    let tooMuch = $( "[name='text']" ).serialize();
    if (tooMuch.length > 140) {
      alert('Too many characters. Cannot tweet more than 140 characters.')
    } else {
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $( "[name='text']" ).serialize(),
    }).then(function successCb(data) {
        // renderTweets(data);
        window.location.reload(true);
      }, function errorCb(err) {
        alert('Text area is empty');
        });
    }
  });
  //render All tweets by calling a get request to /tweets and calling renderTweets(data) on what comes back
  let tweetList = $.ajax({
    method: 'get',
    url: '/tweets',
    data: $(this).serialize()
  })

  tweetList.done(function (data) {
    renderTweets(data);
  // console.log(data);
  });

  tweetList.fail(function () {
    console.log("='(");
  });

  tweetList.always(function () {
    console.log("This always happens.");
  });


  $('#nav-bar #compButton').on('click', function() {
    event.preventDefault();
    if(!$(this).hasClass('.active')) {
      $('#nav-bar #compButton').find('.active').removeClass('.active');
      $(this).addClass('.active');
      $('.new-tweet').slideUp();
      $('.new-tweet[id=' + $(this).attr('data-id') + ']').slideDown();
      
    } else {
      $('.new-tweet').slideDown();
      $('textarea').focus();
      $('#compButton').removeClass('.active');
      }
  })


  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

});

