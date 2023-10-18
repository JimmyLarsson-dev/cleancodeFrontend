import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddBusinessCustomerForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [address, setAdress] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');
    const [orgNr, setOrgNr] = useState('');

    const goBackToAddUser = useNavigate();

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();

        try {
            const Url = 'http://localhost:8080/api/customer/create';

            const BusinessCustomerData = {
                firstName: firstname,
                lastName: lastname,
                password: password,
                companyName: company,
                orgNumber: orgNr,
                email: email,
                phoneNumber: phonenumber,
                address: address,
                customerType: "BUSINESS"
            };

            const response = await axios.post(Url, BusinessCustomerData);

            console.log('Business Customer was created', response.data);

            setFirstname('')
            setLastname('')
            setEmail('')
            setPhoneNumber('')
            setAdress('')
            setPassword('')
            setCompany('')
            setOrgNr('')

        } catch (error) {
            console.error('Error creating business customer', error);
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2>Create new Business Customer</h2>
                <input
                    type="text"
                    placeholder="Firstname"
                    style={styles.input}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Lastname"
                    style={styles.input}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    style={styles.input}
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    style={styles.input}
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Company name"
                    style={styles.input}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Organisation Number"
                    style={styles.input}
                    value={orgNr}
                    onChange={(e) => setOrgNr(e.target.value)}
                />
                <button type="submit" style={styles.button}>
                    Create new Business Customer
                </button>
                <button type="submit" style={styles.button} onClick={() => {{goBackToAddUser(("/AddUser"))}}}>
                    Go Back
                </button>
            </form>
        </div>
    );
};

export default AddBusinessCustomerForm;

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        padding: '20px',
        border: '2px solid silver',
        borderRadius: '5px',
        backgroundColor: '#b3d9e3',
        width: "500px",
        height: '760px',
        marginTop: '4%'
    },
    input: {
        marginTop: '10px',
        marginBottom: '15px',
        padding: '10px',
        width: '75%',
        borderRadius: '5px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#2b7285',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        marginTop: '25px',
    },
}
