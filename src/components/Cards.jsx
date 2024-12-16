

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//create a f. and use searchTerm as prop
export default function Cards({ searchTerm }) {

    //initialize an array to store the fetch movies data and set it as empty array
    const [movies, setMovies] = useState([]);

    //boolean state ehich is initially set to False
    const [loading, setLoading] = useState(false);

    //useEffect:runs whenever the searchTerm changes
    useEffect(() => {

        if (!searchTerm) return; // Do nothing if search term is empty

        setLoading(true); //Marks the start of the data-fetching process by setting loading to true

        //sending GET request to API
        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${import.meta.env.VITE_API_KEY}`)


            .then((res) => res.json())//Parse JSON Response: Converts the HTTP response into a JS object

            .then((result) => { //outputs the API's response to the browser console for debugging purposes.

                console.log(result); // Debugging: Check the API response

                setLoading(false);//: Indicates that the API request has finished

                //If result.Search (array of movies) exists, update movies with the data
                if (result.Search) {
                    setMovies(result.Search);

                    //Otherwise, set movies to an empty array
                } else {
                    setMovies([]); // No results found
                }
            })
            //Stops the loading indicator in case of an error.
            .catch((err) => {
                setLoading(false);
                console.error("Error fetching movies:", err); // Handle fetch errors
            });

    }, [searchTerm]);//ensures the useEffect runs only when searchTerm changes and avoids unnecessary API calls or infinite loops

    return (
        <>
            {/*class: styling perpose */}
            <div className="movie-card">


                {loading ? ( //Displays a "Loading..." message if loading is true
                    <p>Loading...</p>
                    //If movies are available (movies.length > 0), renders a list of movie cards using map()
                ) : movies.length > 0 ? (
                    movies.map((movie) => (

                        //unique key for each movie card to help React efficiently update the DOM.
                        <div key={movie.imdbID} className="movie-item">

                            {/*TEST... Link to the movie details page */}
                            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>


                            {/*  <h3>{movie.Title}</h3> */} {/*Displays the movie title */}
                            {/* test...... */}
                            {/* Image with onError handler */}
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                width={200}
                                onError={(e) => {
                                    e.target.style.display = "none"; // Hide the broken image
                                    e.target.parentNode.appendChild(
                                        document.createElement("p")
                                    ).innerText = "Poster is not available";// Add fallback text
                                }}
                            />

                            {/*  <img src={movie.Poster} alt={movie.Title} width={200} /> */} {/* Shows the movie poster */}

                            <p>Year: {movie.Year}</p> {/*   Displays the release year of the movie*/}
                        </div>
                    ))
                ) : (
                    <p>No movies found!</p> /* If there are no movies in the movies array, displays "No movies found!" */
                )}
            </div>


        </>
    );
}
