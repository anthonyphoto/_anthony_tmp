const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/", (req, res) => {

  return res.status(200).json( { message: "test"} );
});


// router.post("/", jsonParser, (req, res) => {
//   const { artist, phone } = req.body;  // body parsing 
//   let artistInfo, tracks, smsResult;
  
//   spotifyApi.clientCredentialsGrant() 
//   .then(data => {
//     spotifyApi.setAccessToken(data.body['access_token']);
//     return spotifyApi.searchArtists(artist)
//   })
//   .then(data => {
//     artistInfo = data.body.artists.items[0];

//     // return error if artist is not found
//     if (!artistInfo) {
//       return Promise.reject({ statusCode: 404, message: "Not Found" });
//     }

//     // used `searchTracks` instead of `getArtistTopTracks` to get more tracks 
//     return spotifyApi.searchTracks(`artist:${artistInfo.name}`, {limit: 50});
//   })
//   .then(data => {
//     tracks = data.body.tracks.items.map(item => ({
//       name: item.name,
//       album: item.album.name,
//       date: item.album.release_date,
//       preview: item.preview_url,
//       popularity: item.popularity
//     })).sort((a, b) => b.popularity - a.popularity);  
//     // get tracks up to 50 in popularity order

//     if (!tracks.length) { // error handling for no track with valid artist
//       return Promise.reject({ statusCode: 404, message: "Not Found" });
//     }

//     return textTrack(twilioClient, phone, artistInfo, tracks[0]) // topTrack
//           .then(data => smsResult = { status: data.status, message: data.body })
//           .catch(err => smsResult = { status: err.status, message: err.message });
//           // capture SMS error separately in order to non-block Spotify result
//   })
//   .then(() => res.status(201).json({ artistInfo, tracks, smsResult }))
//   .catch(err => {
//     if (err.statusCode) {
//       return res.status(err.statusCode).json(err);
//     } 
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   });

// });

module.exports = router;
