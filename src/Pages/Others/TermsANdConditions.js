import React from 'react';
import { Link } from 'react-router-dom';

const TermsANdConditions = () => {
    return (
        <div>
            <h3>Here is our Terms and conditions</h3>
            <p>go back to Registration: <Link to='/register'>Resgister</Link></p>
        </div>
    );
};

export default TermsANdConditions;