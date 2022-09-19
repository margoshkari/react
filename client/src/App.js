import "./App.css";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    if (data.length === 0) {
      fetch(`/api/products`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.products);
          setData(data.products);
        });
    }
  }, [data, value]);

  function Filter(value) {
    fetch(`/api/filter?productname=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }

  function updateInputValue(evt) {
    setValue(evt.target.value);
  }

  function clickedProduct(name) {
    console.log(name);
  }

  return (
    <div className="App">
      <div className="filter">
        <input
          type="text"
          placeholder="Product name:"
          onChange={(evt) => updateInputValue(evt)}
        />
        <div style={{ marginLeft: "2%" }}>
          <button onClick={() => Filter(value)}>Show</button>
        </div>
      </div>
      <header className="App-header">
        {data.map((products, index) => {
          return (
            <div
              className="productlist"
              key={index}
              onClick={(e) => clickedProduct(products.ProductName)}
            >
              <p>
                {products.ProductName} - {products.Price}$
              </p>
              <hr style={{ margin: 0, padding: 0 }} />
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
