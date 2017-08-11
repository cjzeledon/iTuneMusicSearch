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

submitBtn.addEventListener("click",
  function(ev) {
    ev.preventDefault();
    let searchSongs = document.querySelector("#FindSongs").value;
    console.log('button works');
      fetch (`https://itunes.apple.com/search?term=${searchSongs}`)
        .then (musicJSON)
        .then (musicFIND)
        .catch (catchALL);
})

function musicJSON(musicData){
  return musicData.json();
}

function musicFIND (musicResults){
  let spaceOUT = " ";
  // Do not forget to add link to the thumbnail to probably play music/add music
  for (i = 0; i < musicResults.results.length; i++){
    let populateResults =`
      <div class="individual">
      <img src="${musicResults.results[i].artworkUrl100}">
      <p class="track">${musicResults.results[i].trackName}</p>
      <p class="artist">${musicResults.results[i].artistName}</p>
      </div>
    `;
    spaceOUT += populateResults;
  }
  results.innerHTML = spaceOUT;
}

function catchALL (err){
  console.log(err);
}
