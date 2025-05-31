import { useState } from "react";
import reactimg from './assets/react.svg';

function Profile() {
  return (
    <div>
      <img src={reactimg} alt="" />
    </div>
  );
}

const App = () => {
  const [showImage, setShowImage] = useState(false); // State to control image visibility

  function handleButtonClick() {
    setShowImage(true); // Update state to show the image
  }

  return (
    <section>
      <button onClick={handleButtonClick}> click me </button>
      <div>
        {showImage && <img src={reactimg} alt="" />} {/* Conditionally render the image */}
        <Profile />
        <Profile />
      </div>
    </section>
  );
};

export default App;