import Home from "./pages/HomePage";

import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
