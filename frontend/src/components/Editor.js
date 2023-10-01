import {Link} from 'react-router-dom';

const Editor = () => {
  return (
    <section>
        <h1>Editors Page</h1>
        <br />
        <p>You Must Have Been Assigned en Editor Role.</p>
        <div className='flexGrow'>
            <link to='/'>Home</link>
        </div>
    </section>
  );
};

export default Editor;