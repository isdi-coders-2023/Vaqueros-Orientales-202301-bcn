import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
