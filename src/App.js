import "./App.css";

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d084387890msh56f569523afc551p1cd8dajsn1c40dee94a8c",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div className="App">
      <h1>halo</h1>
    </div>
  );
}

export default App;
