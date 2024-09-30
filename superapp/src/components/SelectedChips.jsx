const SelectedChips = ({ category, setSelectedMovie }) => {
  const handleClick = (category) => {
    return () => {
      setSelectedMovie((SelectedMovie) =>
        SelectedMovie.filter((movie) => movie !== category)
      );
    };
  };

  return (
    <div>
      <button
        style={{
          width: "80px",
          height: "30px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {category.movie}
        <span onClick={handleClick(category)}>X</span>
      </button>
    </div>
  );
};

export default SelectedChips;
