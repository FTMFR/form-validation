import { Link } from 'react-router-dom';


const LinkPage = () => {
    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <link to='/login'>Login</link>
            <link to='/register'>Register</link>
            <br />
            <h2>Private</h2>
            <link to='/'>Home</link>
            <link to='/editor'>Editor Page</link>
            <link to='/admin'>Admin Page</link>
        </section>
    );
};

export default LinkPage;