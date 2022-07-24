import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const [container, setContainer] = useState([]);

  const [endPoint, setEndPoint] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d084387890msh56f569523afc551p1cd8dajsn1c40dee94a8c",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${query}`,
      options
    )
      .then((response) => {
        return response.json();
      }, [])
      .then((data) => {
        setContainer(data.hints);
      })
      .catch((err) => console.error(err));
  }, [endPoint]);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEndPoint(query);
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={query} onChange={onChangeHandler} />
        <button type="submit">submit</button>

        {container.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.food.image} alt="food" />
              <div>{item.food.label}</div>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default App;
