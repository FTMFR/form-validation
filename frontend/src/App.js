import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Layout from "./components/Layout";
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import Missing from './components/Missing';
import RequireAuth from './components/RequireAuth';



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
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Home />} />
          <Route path='editor' element={<Editor />} />
          <Route path='admin' element={<Admin />} />
          <Route path='lounge' element={<Lounge />} />
        </Route>

        {/* Catch All */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
};


export default App;
