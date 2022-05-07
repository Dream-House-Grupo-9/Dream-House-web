import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cadastro from "./pages/Cadastro";


function App() {
  return (
    <div className="App">
       <Home/>
       <Cadastro/>
       {/* <Dashboard/> */}
    </div>
  );
}

export default App;

// instalar o MUI via terminal 
// Use este comando: npm install @mui/material @emotion/react @emotion/styled