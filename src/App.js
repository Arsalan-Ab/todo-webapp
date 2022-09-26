import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import ShowTodoList from './routes/show-todo-list/show-todo-list.component'

const App = ()=> {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='show-todo-list' element={<ShowTodoList/>}/>
    </Routes>
  );
}

export default App;
