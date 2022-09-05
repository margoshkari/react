import "./App.css";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`/people`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.people);
        setData(data.people);
      });
  });
  return (
    <div className="App">
      <header className="App-header">
        {data.map((person, index) => {
          return (
            <div key={index}>
              <p>
                {person.name} {person.surname}
                <br />
                age: {person.age}
              </p>
              <hr />
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
