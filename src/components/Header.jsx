/* 




import { Link } from "react-router-dom";
export default function Header({ setSearchTerm }) {
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.elements.searchInput.value.trim();
        if (query) setSearchTerm(query);
        e.target.elements.searchInput.value = "";
    };
    const handleHomeClick = () => {
        setSearchTerm(""); // Reset search when clicking home
    };
    return (
        <header className="header">
            <nav>
                <Link to="/" onClick={handleHomeClick}>Home</Link>
            </nav>
            <form className="header" onSubmit={handleSearch}>
                <h1>Movie Search</h1>
                <p>Find your favorite movies!</p>
                <input type="text" name="searchInput" placeholder="Search your movie..." />
                <button type="submit">Search</button>
            </form>
        </header>
    );
} */



import { Link, useLocation } from "react-router-dom";

export default function Header({ setSearchTerm }) {
    const location = useLocation(); // Get the current route

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.elements.searchInput.value.trim();
        if (query) setSearchTerm(query);
        e.target.elements.searchInput.value = "";
    };

    const handleHomeClick = () => {
        setSearchTerm(""); // Reset search when clicking home
    };

    // Hide the search bar if the current path is for movie details
    const isMovieDetailPage = location.pathname.includes("/movie/");

    return (
        <header className="header">
            <nav>
                {/* Ensure clicking Home resets the search */}
                <Link to="/" onClick={handleHomeClick}>Home</Link>
            </nav>

            {/* Only show the search form if we are NOT on the movie details page */}
            {!isMovieDetailPage && (
                <form className="header" onSubmit={handleSearch}>
                    <h1>Movie Search</h1>
                    <p>Find your favorite movies!</p>
                    <input type="text" name="searchInput" placeholder="Search your movie..." />
                    <button type="submit">Search</button>
                </form>
            )}
        </header>
    );
}
