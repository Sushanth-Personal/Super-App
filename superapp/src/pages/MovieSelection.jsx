
import { useState } from "react";
import MovieBox from "../../components/MovieBox";
import SelectedChips from "../../components/SelectedChips";

const MOVIES = [
  {
    id: 0,
    movie: "Action",
  },
  {
    id: 1,
    movie: "Drama",
  },
  {
    id: 2,
    movie: "Romance",
  },
  {
    id: 3,
    movie: "Thriller",
  },
  {
    id: 4,
    movie: "Horror",
  },
  {
    id: 5,
    movie: "Western",
  },
  {
    id: 6,
    movie: "Fantasy",
  },
  {
    id: 7,
    movie: "Fiction",
  },
  {
    id: 8,
    movie: "Music",
  },
];

const Selection = () => {
const [selectedMovie, setSelectedMovie] = useState([]);
  return (
    
    <div>
      <div style ={{
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
      }}>
        { MOVIES.map((category) => (
          <div key={category.id}>
            <MovieBox
              selectedMovie = {selectedMovie}
              setSelectedMovie = {setSelectedMovie}
              category = {category}
            />
          </div>
        )
      
        )}

        {
         selectedMovie.length<3 && <span>Select atleast 3 movies</span>
        }
     
      </div>
      <p>I m supposed to be here</p>
      <div>
        {
        selectedMovie.map((category) => (
          <div key={category.id}>
            <SelectedChips
            category={category}
            setSelectedMovie={setSelectedMovie}
            />
           
          </div>
          
        ))
       }
      </div>
      
    </div>
  )
}

export default Selection;