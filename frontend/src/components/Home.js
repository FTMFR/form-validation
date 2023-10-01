import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import useAuth from '../hooks/useAuth';
import AuthContext from '../context/AuthProvider';


const Home = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/Linkpage');
    };

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You Are Logged In!</p>
            <br />
            <Link to='/editor'>Go to the Editor Page.</Link>
            <br />
            <Link to='/admin'>Go to the Admin Page.</Link>
            <br />
            <Link to='/lounge'>Go to the Lounge.</Link>
            <br />
            <Link to='/Linkpage'>Go to the Link Page.</Link>
            <div className='flexGrow'>
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    );
};

export default Home;