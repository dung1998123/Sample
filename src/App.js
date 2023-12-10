import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navigation/Navbar.js';
import Story from './Component/Story/Story.js';
import ImageSlider from './Component/ImageSlider/ImageSlider.js';
import DateCounter from './Component/DateCounter/DateCounter.js';
import Couple from './Component/Couple/Couple.js';
import Video from './Component/Video/Video.js';
import Gallery from './Component/Gallery/Gallery.js';
import Event from './Component/Event/Event.js';
import Accept from './Component/Accept/Accept.js';


function App() {
  return (
    <div className="App">
    <body>
      <header id="header">
        {/* <Navbar/> */}
      </header>
      <main id="main" className='App-main'>
        <ImageSlider/>
        <DateCounter/>
        <Couple/>
        <Video/>
        <Story/>
        <Gallery/>
        <Accept/>
        <Event/>
      </main>
    </body>
    </div>
  );
}

export default App;
