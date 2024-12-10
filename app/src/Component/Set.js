import React, { useEffect, useState } from 'react';

const Set = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('ID');
        const fName = localStorage.getItem('firstName');
        const lName = localStorage.getItem('lastName');
        const isChecked = localStorage.getItem('checked') === 'true';

        if (id) {
            setFirstName(fName);
            setLastName(lName);
            setChecked(isChecked);
        }
    }, []);

    return (
        <div>
            <h2>Update Item</h2>
            {/* Add your update logic or form here */}
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Checked: {checked ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default Set;