function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var newSong = document.createElement('li');
  var span = document.createElement('span');
  span.classList.add('duration');
  span.textContent = this.duration;
  if(this.isPlaying) {
    newSong.classList.add('current');
  }
  newSong.textContent = this.title + ' - ' + this.artist;
  newSong.appendChild(span);
  return newSong;
};