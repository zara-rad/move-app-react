import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cards from "./components/Cards"
import Header from "./components/Header"
import MovieDetails from "./components/MovieDetails"
import { useState } from "react"
function App() {

  //PART of state to store the current search entered by the user,must be empty
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <BrowserRouter>

      <Header setSearchTerm={setSearchTerm} />  {/* renders the header component/using prop allows the header to update searchTerm App */}
      <Routes>

        {/* <Cards searchTerm={searchTerm} /> */} {/* renders the card component/using prop: searchTerm,cards component can use this to fetch and display movies,based on users seaarch */}

        {/*  TEST... */}
        <Route path="/" element={<Cards searchTerm={searchTerm} />} />
        {/* Route for movie details */}
        <Route path="/movie/:imdbID" element={<MovieDetails />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
