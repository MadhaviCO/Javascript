function Movie(title, year, duration) {
  Media.call(this, title, duration);
  this.year = year;
};

Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var newMovie = document.createElement('li');
  var span = document.createElement('span');
  span.classList.add('duration');
  span.textContent = this.duration;
  if(this.isPlaying) {
    newMovie.classList.add('current');
  }
  newMovie.textContent = this.title + ' - ' + this.year;
  newMovie.appendChild(span);
  return newMovie;
};