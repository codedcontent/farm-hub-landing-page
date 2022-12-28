import { useState } from "react";
import AppBar from "./components/AppBar";
import SignUpOverlay from "./components/SignUpOverlay";
import About from "./sections/About";
import Community from "./sections/Community";
import Connect from "./sections/Connect";
import FarmProduce from "./sections/FarmProduce";
import Introduction from "./sections/Introduction";
import Testimonials from "./sections/Testimonials";

function App() {
  const [signingUp, setSigningUp] = useState(false);

  const signUp = () => {
    setSigningUp(true);
  };

  const close = () => {
    setSigningUp(false);
  };

  return (
    <div
      className={`min-w-screen min-h-screen ${
        signingUp && "overflow-hidden max-h-screen"
      }`}
    >
      {/* <AppBar /> */}

      {signingUp && <SignUpOverlay close={close} />}
      <div className="min-h-screen w-screen relative max-w-5xl m-auto">
        <Introduction signingUp={signingUp} signUp={signUp} />

        <About signingUp={signingUp} signUp={signUp} />

        <FarmProduce signingUp={signingUp} signUp={signUp} />

        <Community signingUp={signingUp} signUp={signUp} />

        <Testimonials />

        <Connect signingUp={signingUp} signUp={signUp} />
      </div>
    </div>
  );
}

export default App;
