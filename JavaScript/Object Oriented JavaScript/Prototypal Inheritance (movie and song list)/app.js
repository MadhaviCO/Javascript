var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2.54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3.43");

var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(manOfSteel);

var playListElement = document.getElementById('playlist');
playlist.renderInElement(playListElement);

var playButton = document.getElementById('play');
var nextButton = document.getElementById('next');
var stopButton = document.getElementById('stop');

playButton.onclick = function (){
  playlist.play();
  playlist.renderInElement(playListElement);
};

nextButton.onclick = function (){ 
  playlist.next();
  playlist.renderInElement(playListElement);
};

stopButton.onclick = function (){
  playlist.stop();
  playlist.renderInElement(playListElement);
};

console.log(playlist.nowPlayingIndex);
console.log(playlist.songs[playlist.nowPlayingIndex] );