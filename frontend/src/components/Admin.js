import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <p>You Must Have Been Assigned an Admin role.</p>
            <div className='flexGrow'>
                <Link to='/'>Home</Link>
            </div>
        </section>
    );
};

export default Admin;
