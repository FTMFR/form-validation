import { Link } from 'react-router-dom';


const Lounge = () => {
    return (
        <section>
            <h1>The Lounge</h1>
            <br />
            <p>Admin and Editors Can Hang Out Here.</p>
            <div className='flexGrow'>
                <link to='/'>Home</link>
            </div>
        </section>
    );
};


export default Lounge;