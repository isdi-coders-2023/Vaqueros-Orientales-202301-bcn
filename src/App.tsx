import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
