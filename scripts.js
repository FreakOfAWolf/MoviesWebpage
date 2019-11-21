//A container that points to my col-12 class in the html file.
const container = document.getElementById('movie-container');
//A simple JSON with five good movies. Each movie consists of the name, youtube id and a pointer to the image poster that i have locally saved in my directory.
const movies = [
  {
    "name": "Joker",
    "image": "img/Joker_poster.png",
    "id": "-_DJEzZk2pc&t=2s"
  },
  {
    "name": "Constantine",
    "image": "img/Constantine_poster.jpg",
    "id": "EXeTwQWrcwY"
  },
  {
    "name": "Godfather",
    "image": "img/Godfather_poster.jpg",
    "id": "5DO-nDW43Ik"
  },
  {
    "name": "Lawless",
    "image": "img/Lawless_poster.jpg",
    "id": "HibcC7w5l1g"
  },
  {
    "name": "Legend",
    "image": "img/Legend_poster.jpg",
    "id": "yI3v6KfR9Mw"
  }
]
//A foreach loop to get trought all the movies in my json above
movies.forEach((movie, index) => {
  //Using Fetch as instructed 
  fetch('https://www.omdbapi.com/?apikey=33cb701d&t=' + movie.name)
      /*This is the responce from the link with my API key and the 
      json names of the 5 movies that I chose to put in the site*/
      .then(response => {
          return response.json();
      })
      //then we get the JSON data to work with
      .then(data => {
          // Constant for the Plot and Genre from the API
          const plot = document.createElement('p');
          plot.textContent = "Plot: "+"\n" + data.Plot;
          const genre = document.createElement('h4');
          genre.textContent = "Genre: " + data.Genre;

          //Spacing between wraps
          const space = document.createElement('div');
          space.setAttribute('id', 'space');

          // Holder for all the variables
          var movieContent = document.createElement('div')
          movieContent.setAttribute('id', 'wrap');

          //varialbe for displaying title
          var movieTitle = document.createElement('h2');
          movieTitle.innerHTML = movie.name;
          //Varialbe for dysplayiong the you tube id link
          var youtubeID = document.createElement('a');
          youtubeID.href = "https://www.youtube.com/watch?v=" + movie.id;
          youtubeID.textContent = "See trailer";
          //Varialbe for image
          var image = document.createElement('img');
          image.setAttribute('id', 'posters');
          image.src = movie.image;
          //Variable for IMDB rating from the API
          var rating = document.createElement('h4');
          rating.textContent = "IMDB rating: " + data.imdbRating;
          //Variable for the release date from the API
          var year = document.createElement('h4');
          year.textContent = "Year released: " + data.Year;

          //Appending everything created above to my movieContainer
          movieContent.appendChild(movieTitle);
          movieContent.appendChild(image);
          movieContent.appendChild(rating);
          movieContent.appendChild(year);
          movieContent.appendChild(genre);
          movieContent.appendChild(youtubeID);
          movieContent.appendChild(plot);
          //Appending the space between Movie content
          container.appendChild(space);
          //Appending the movieContainer to my container const from above
          container.appendChild(movieContent);
          
          //Testing and checking information.
          console.log(container);
          console.log(data); 
          console.log(plot);
     })
      //Error catch
      .catch(err => {
          console.log(err);
          const errorMessage = document.createElement('marquee');
          errorMessage.textContent = `Not working!`;
          container.appendChild(errorMessage);
     })
  })