
const MovieBox = ({selectedMovie, setSelectedMovie, category}) => {

    const handleClick = (category) => {
        return () => {
            console.log(category.movie); 

            //DeSelection & Selection functionality
            if(selectedMovie.includes(category)){
                //deselection part
                setSelectedMovie(selectedMovie.filter((movie)=>movie!==category));
            }else{
                //selection part
                setSelectedMovie([...selectedMovie,category])
            }
        }
        
    }

  return (
   
    <div
        
        style={{
            width: "150px",
        height: "150px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        border: `2px solid ${selectedMovie.includes(category)?"red":"black"}`
        }}
        onClick={handleClick(category)}
    >
      <h1>{category.movie}</h1>
    </div>
  )
}

export default MovieBox;