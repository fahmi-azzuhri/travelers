import Destinations from "./components/Destinations";
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
    </>
  );
}

export default App;
