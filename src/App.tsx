import Home from "./pages/HomePage";

import EventComponent from "./components/EventComponent/EventComponent";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <Home />
      <EventComponent
        name={"SuperBowl"}
        image={
          "https://image.roku.com/blog/wp-content/uploads/2022/02/Superbowl_Chiefs-vs-Eagles_Roku_1200x628.jpg"
        }
      />
    </div>
  );
};

export default App;
