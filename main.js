/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

const player = document.querySelector(".player");
const musicPlayer = document.querySelector(".music-player");
const search = document.querySelector(".search");
const searchForm = document.querySelector(".search-form");
const results = document.querySelector(".results");
const submitBtn = document.querySelector("#submit");

let blah = " ";

submitBtn.addEventListener("click",
  function(ev) {
    ev.preventDefault();
    let searchSongs = document.querySelector("#FindSongs").value;
    console.log('button works');
      // return SearchSongs;
      // fetch (`https://itunes.apple.com/search?term=${searchSongs}`)
      fetch ("https://itunes.apple.com/search?term=queen")
        .then (musicJSON)
        .then (musicFIND)
        .catch (catchALL);
})

function musicJSON(musicData){
  return musicData.json();
}

function musicFIND (musicResults){
  console.log(musicResults);
  console.log(musicResults.results[0].trackName);
  console.log(musicResults.results[0].artistName);
  console.log(musicResults.results[0].artworkUrl100);

  let spaceOUT = " ";

  // Do not forget to add link to the thumbnail to probably play music/add music
  for (i = 0; i < musicResults.results.length; i++){
    let populateResults =`
      <div class="search_giverecipes">
      <figure>
      <a href="${givetoAPI.results[i].href}" target="_blank">
      ${backupImage}
      <figcaption>${givetoAPI.results[i].title}</figcaption>
      <figure>
      </div>
    `;
  }

}

function catchALL (err){
  console.log(err);
}
