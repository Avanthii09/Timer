//import "./Todo.css"
// import "./App.css"
import "./Slider.css"
import Timer from "./components/Timer";
//import Todolist from "./components/Todolist"    //<Todolist /> in return
import 'bootstrap/dist/css/bootstrap.min.css'
 import {useState} from "react";
 import Settings from "./components/Settings";
 import Settingscontext from "./components/Settingscontext";

function App() {

 const [showSettings, setShowSettings] = useState(false);
 const [workMinutes, setWorkMinutes] = useState(45);
 const [breakMinutes, setBreakMinutes] = useState(15);


 
  return(
    <main>
      <Settingscontext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer/>}
      </Settingscontext.Provider>
    


    </main>
  )

//       return(
//         <Todolist />
//       )
};

export default App;




