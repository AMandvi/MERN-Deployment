import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Link,Routes, Route, Navigate} from 'react-router-dom'     //Navigate is for redirection
import Main from "./components/Main";
import Create from "./components/Create";
import Edit from "./components/Edit";
import ViewOne from "./components/ViewOne";


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>

      {/* THEATER STATE - routes */}
      <Routes>
        {/* MAIN-all notes */}
        <Route path='/' element={<Main/>} />
        {/* CREATE */}
        <Route path = "/new" element ={<Create/>}/>

        {/* UPDATE */}
        <Route path ="/edit/:id" element={<Edit/>}/>

        {/* REDIRECT */}
        <Route path='*' element={<Navigate to = "/" replace/>} />

        {/* VIEW ONE */}
        <Route path='/pets/:id' element={<ViewOne/>} />

      </Routes>
    </div>
  );
}

export default App;
