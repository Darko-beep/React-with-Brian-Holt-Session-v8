
const Pet = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h2", {}, "Luna"),
            React.createElement("h3", {}, "Dog"),
            React.createElement("h4", {}, "Havanese"),
        ]
    );
  };


const App = () => {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement("h2", {}, "Luna"),
      
    );
  };

  
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));