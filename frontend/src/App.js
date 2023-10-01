import { Routes, Route } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Layout from "./components/Layout";
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import Missing from './components/missing';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Roles */}
        <Route path='Login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* We Want Protect This Roles */}
        <Route path='/' element={<Home />} />
        <Route path='editor' element={<Editor />} />
        <Route path='admin' element={<Admin />} />
        <Route path='lounge' element={<Lounge />} />

        {/* Catch All */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
};


export default App;
