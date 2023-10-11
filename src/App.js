import "./App.css";
import travel3 from "./assets/bike-photo.avif";
import travel2 from "./assets/mounts-photo.avif";
import travel1 from "./assets/palms-photo.avif";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel1} />
      <Slider
        imageSrc={travel2}
        title={"Be an explorer"}
        subtitle={
          "Our platform offers a wide variety of unique travel locations."
        }
      />
      <Slider
        imageSrc={travel3}
        title={"Memories for a lifetime!"}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
