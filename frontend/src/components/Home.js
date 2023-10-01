import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';


const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/linkpage');
    };

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You Are Logged In!</p>
            <br />
            <link to='/editor'>Go to the Editor Page.</link>
            <br />
            <link to='/admin'>Go to the Admin Page.</link>
            <br />
            <link to='/lounge'>Go to the Lounge.</link>
            <br />
            <link to='/linkpage'>Go to the Link Page.</link>
            <div className='flexGrow'>
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    );
};

export default Home;