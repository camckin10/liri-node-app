//add code to read
//set any environment variables with the dotenv package

require("dotenv").config();

//add code to import keys.js file and store in variable
var keys = require("./keys.js");
var fs = require("fs");


 //import code from keys.js file & store into a variable
   var Spotify = require("node-spotify-api");
   var spotify = new Spotify(keys.spotify);
   var Twitter = require ("twitter");
  var client = new Twitter(keys.twitter);
  var OMDB = require("http://www.omdbapi.com/?apikey=2d924878&");
   var omdb = new OMDB (keys.OMDB);

  //make so liri.js can take the following commands
 var userInput = process.argv[2];

// //conditional for spotify
// if (userInput === "spotify-this-song" ) {
// 	console.log("");
// }
// //conditional for twitter
// if (userInput === "twitter" ) {
// 	console.log("");
// }

// //conditional for OMDB
// if(userInput ===  ){
// 	console.log("");
// }


//TWITTER________________________________________________________

function twitter() {
    //FS IS AN NPM PACKAGE FOR READING AND WRITING FILES 
    var fs = require('fs');

    //GETS THE TWITTER KEYS FROM THE "keys.js" file
    var twitterKey = require('./keys.js');
    // console.log(twitterKey.twitterKeys) THIS IS A TEST TO CONSOLE LOG THE KEYS. 

    //GRAB THE TWITTER PACKAGE 
    var Twitter = require('twitter');

    //TWITTER CALL WHICH PASSES THROUGH THE TWITTER KEYS FROM VARIABLE TWITTERKEY
    var client = new Twitter(twitterKey.twitterKeys);

    //THIS GRABS THE SECOND NODE FOR USERNAME ARGUMENT AND PASSES IT THRPUGH
    // var userInput = process.argv[3];

    //NODE FUNCTION THAT GRABS THE TWITTER INFROMATION 
    var params = { 
      screen_name: value, 
      count: 20 
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            console.log("=============================================");
            console.log("Here are the most recent tweets");

            for (var i = 0; i < tweets.length; i++) {

                console.log("_____________________________________________");
                console.log("Tweeted on: " + tweets[i].created_at);
                console.log(tweets[i].text);

            }
        }
    });
}









