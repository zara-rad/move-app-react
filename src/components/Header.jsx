import { Link } from "react-router-dom";
//setSearchTerm as prop
export default function Header({ setSearchTerm }) {
    //i defined this function to handeles submit event
    const handleSearch = (e) => {

        //to stop reloading the page 
        e.preventDefault()

        //accesses the value of input as query.using trim for removing space in search
        const query = e.target.elements.searchInput.value.trim();

        //i wrote condition that if input is not empty,my function will excecute
        if (query) { setSearchTerm(query) }
        // Clear the input field
        e.target.elements.searchInput.value = "";

    }
    //TEST...for socus input


    return (
        //i used class for styling perpose
        //Attaches the handleSearch f. to the onSubmit event to triggers when the user submits the form
        //TEST...
        <header className="header">
            <nav>
                {/* Link to navigate to the Home page */}
                <Link to="/">Home</Link>
            </nav>

            <form className="header" onSubmit={handleSearch}>

                <h1>Movie Search</h1>
                <p>Find your favorite movies!</p>
                <input
                    //type of input must be text
                    type="text"

                    //giving name allowing it to rendering the form
                    name="searchInput"

                    //style prepose
                    placeholder="Search your movie..."


                />

                <button type="submit">Search</button>

            </form>
        </header>
    )
}
