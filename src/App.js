import './App.css';
import TerminalText from './TerminalText';
import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

function App() {

  const terminalTitle = 'Terminal';
  const terminalStart = "$ SALEEMI =>";

  const help = [
    {
      id: 1,
      help: 'saleemi --cgpa',
    },
    {
      id: 2,
      help: 'saleemi --portfolio',
    },
    {
      id: 3,
      help: 'saleemi --contact',
    },
    {
      id: 4,
      help: 'saleemi --fav-games',
    },
    {
      id: 5,
      help: 'saleemi --address',
    },
    {
      id: 6,
      help: 'saleemi --age',
    },
    {
      id: 7,
      help: 'saleemi --spotify-playlist',
    },
    {
      id: 8,
      help: 'saleemi --wallet-amount',
    },
    {
      id: 9,
      help: 'saleemi --skills',
    },
  ]

  const allCommands = [
    {
      id: 1,
      command: 'saleemi --cgpa',
      result: 'My CGPA: 1.2 + 1.0 - 0.2. Dont Calculate Please :(',
    },
    {
      id: 2,
      command: 'saleemi --portfolio',
      result: "visit my portfolio: https://github.com/AbdurehmanSaleemi",
    },
    {
      id: 3,
      command: 'saleemi --contact',
      result: "Contact me @asaleemi121@gmail.com. I check my emails once a month so you can be sure I'll get back to you.",
    },
    {
      id: 4,
      command: 'saleemi --fav-games',
      result: "Favourite games: CS:GO, Call of Duty, FIFA22, Cricket19, Battlefield V, and more.",
    },
    {
      id: 5,
      command: 'saleemi --address',
      result: "Address: This house has no home, This home has no heart, This heart has no soul, This soul has no part, This soul has no part feat Swallow the Sun",
    },
    {
      id: 6,
      command: 'saleemi --age',
      result: "Age: 21",
    },
    {
      id: 7,
      command: 'saleemi --spotify-playlist',
      result: "https://open.spotify.com/playlist/7HcdWhWeLvLMBvivKBl1im?si=0a494edac74747a7",
    },
    {
      id: 8,
      command: 'saleemi --wallet-amount',
      result: "Wallet amount: Rs 0 :)",
    },
    {
      id: 9,
      command: 'saleemi --skills',
      result: "Sari raat jaagna & saara din soona",
    }
  ]


  const [command, setCommand] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState('');
  const [helpShow, setShowHelp] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCommand = (e) => {
    setCommand(e.target.value);
  }

  const handleSubmit = (e) => {
    setShowResult(false);
    e.preventDefault();

    if (command === 'saleemi --help') {
      setCommand('');
      setShowHelp(true);
      setError(false);
    }
    else if (command === 'clear') {
      setCommand('');
      setError(false);
    }
    else if (showResult == false) {
      setCommand('');
      for (let i = 0; i < allCommands.length; i++) {
        if (command === allCommands[i].command) {
          setResult(allCommands[i].result);
          setShowResult(true);
          setError(false);
          setShowHelp(false);
          break;
        }
        else if (i == allCommands.length - 1) {
          setError(true);
          setShowHelp(false);
          setCommand('');
        }
      }
    }
  }

  const disclaimer = "This project is built purely for learning purposes so the information provided here can be wrong. No part of this Application comes under any sort of free liscence. You can take inspiration from it but cannot copy its code and design."

  return (
    <div className="App">
      <div className='h-screen w-full bg-gradient p-24 hidden lg:flex flex-auto overflow-hidden antialiased'>
        <div className='grid grid-cols-5 gap-10 w-full h-full'>
          <div className='col-span-1 row-span-2'>
            <div className='flex flex-col justify-between items-start  h-full'>
              <div className='flex flex-col justify-center items-start space-y-2 h-auto'>
                <div><h1 className='text-green-200 text-6xl text-left font-bold'>SALEEMIX</h1></div>
                <div><h1 className='text-green-200/30 text-[0.87rem] text-left uppercase tracking-wider font-normal'>Written in ReactJS & TailwindCSS</h1></div>
              </div>
              <div className='flex flex-col justify-center items-start space-y-2 h-auto'>
                <div className='mb-2 text-green-200/90 uppercase text-3xl font-bold'>disclaimer </div>
                <div className='text-green-200/70 font-light text-justify'>{disclaimer}</div>
                <div className='mt-7'></div>
                <div className='text-white/90 font-bold text-justify'>NO DATA WILL BE COLLECTED AND NO COMMAND WILL BE STORED ON SERVER.</div>
              </div>
            </div>
          </div>
          <div className='col-span-4 row-span-3 terminalBg p-10 overflow-auto'>
            <div className='flex flex-col p-2 justify-between items-center w-full'>
              <h1 className='text-green-200 tracking-wider font-bold text-5xl uppercase'>{terminalTitle}</h1>
            </div>
            <div className='flex flex-col gap-5 justify-between items-start w-full mt-5'>
              <div className='flex flex-row gap-5 flex-wrap items-center w-10/12'>
                <TerminalText handleChange={handleCommand} handleSubmit={handleSubmit} terminalStart={terminalStart} />
                {helpShow && help.map((item, index) => { return (<h1 key={index} className='text-xl text-yellow-100 font- mr-8'>{item.help}</h1>) })}
                {error && <h1 className='text-xl text-red-200 font- mr-8'>Command Not Found. Type "saleemi --help"</h1>}
                {showResult && <h1 className='text-xl text-yellow-100 font- mr-8 leading-loose'>{result}</h1>}
              </div>
            </div>
          </div>
          <div className='col-span-1 row-span-1 w-full h-full'>
            <div className='flex flex-col justify-evenly h-full w-full'>
              <div className='w-full items-center justify-center flex'>
                <a className='w-full h-full text-center p-5 text-xl uppercase text-white btnBg ease-in duration-75 hover:scale-110 hover:ease-in hover:duration-75 cursor-pointer antialiased'>Report a Bug</a>
              </div>
              <div className='w-full items-center justify-center flex'>
                <a className='w-full inline-flex items-center gap-5 justify-center text-center text-xl uppercase text-white p-0 ease-in duration-75 hover:scale-110 hover:ease-in hover:duration-75 cursor-pointer antialiased'>Source Code <BsArrowRightShort className='text-2xl'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
