import "./App.css";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {data.map((products, index) => {
          return (
            <div>
              <p>
                {products.ProductName} - {products.Price}$
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
