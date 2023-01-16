import { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    });
  }, []);

  function playSound(selector){
    const patern = document.getElementById(selector);
    patern.play()
    setActiveKey(selector)
  }
  return (
    <div className="App">
      <h1>Project: Drum-machine</h1>
      <div id="drum-machine" className='main'>
        
        <div className='pad-bank'>
          <div className='drum-pad' id='Heater1' onClick={()=> {playSound("Q")}}>
            <audio className='clip' id="Q" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio><button>Q</button></div>
          <div className='drum-pad' id='Heater2' onClick={()=> {playSound("W")}}>
            <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio><button>W</button></div>
          <div className='drum-pad' id='Heater3' onClick={()=> {playSound("E")}}>
            <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio><button>E</button></div>
          <div className='drum-pad' id='Heater4' onClick={()=> {playSound("A")}}>
            <audio className='clip' id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio><button>A</button></div>
          <div className='drum-pad' id='Clap' onClick={()=> {playSound("S")}}>
            <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio><button>S</button></div>
          <div className='drum-pad' id='Open-HH' onClick={()=> {playSound("D")}}>
            <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio><button>D</button></div>
          <div className='drum-pad' id="Kick-n'-Hat" onClick={()=> {playSound("Z")}}>
            <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio><button>Z</button></div>
          <div className='drum-pad' id='Kick' onClick={()=> {playSound("X")}}>
            <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio><button>X</button></div>
          <div className='drum-pad' id='Closed-HH' onClick={()=> {playSound("C")}}>
            <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio><button>C</button></div>
        </div>
        <div className='right'>
          <div className='slideThree'><input type="checkbox" value="None" id="slideThree" name="check" checked />
          <label for="slideThree"></label>
          </div>
          <div id="display" className='show'>{activeKey}</div>
          <div class="chekOne">  
             <input type="checkbox" value="None" id="slideOne" name="check" checked />
             <label forhtnl="slideOne" className='chekOne'></label>
          </div>
          <div className='slideThree'><input type="checkbox" value="None" id="slideThree" name="check" checked />
          <label for="slideThree"></label>
          </div>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
