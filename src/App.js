import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Task from './TaskList' 
import CreateTask from './TaskCreate' 
import DetailTask from './TaskDetails' 
import EditTask from './TaskEdit';
import Signin from './SignIn';
import Signup from './SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/task' element={<Task />} />
          <Route exact path='/create-task' element={<CreateTask />} />
          <Route exact path='/details-task/:id' element={<DetailTask />} />
          <Route exact path='/edit-task/:id' element={<EditTask />} />
          <Route path='/authenticate' element={ <Navigate to="/signin" /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
