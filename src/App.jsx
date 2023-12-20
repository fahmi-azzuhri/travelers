import Destinations from "./components/Destinations";
import { Footers } from "./components/Footers";
import Header from "./components/Header";
import Review from "./components/Review";
import { SimpleNavbar } from "./components/SimpleNavbar";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <>
      <SimpleNavbar />
      <Header />
      <Sponsor />
      <Destinations />
      <Review />
      <Footers />
    </>
  );
}

export default App;
