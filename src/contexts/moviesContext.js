import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  //NEW
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    setPlaylist(newPlaylist)
  };

//   return (
//     <MoviesContext.Provider
//       value={{
//         favorites,
//         addToFavorites,
//         removeFromFavorites
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

return (
  <MoviesContext.Provider
    value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      addReview,
      addToPlaylist,
    }}
  >
    {props.children}
  </MoviesContext.Provider>
);
};


export default MoviesContextProvider;