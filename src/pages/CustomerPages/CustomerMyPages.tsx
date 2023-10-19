import CustomerFooter from "../../components/CustomerComponents/CustomerFooter";
import Dashboard from "../../reusableComponents/dashboard";
import {customerStyles} from "../../styles/styles";
import React, {useState} from "react";
import {useUserType} from "../../components/UserTypeContext";
import CustomerHeader from "../../components/CustomerComponents/CustomerHeader";

export const CustomerMyPages: React.FC = () => {
    const { userType } = useUserType();
    const [loggedIn, setLoggedIn] = useState(false);

    const selectedStyles =
        userType === "Customer" ? customerStyles : {};

    const testUserData = {
        firstname: 'Testkund',
        lastname: 'Test',
        email: 'test@example.com',
        password: 'test',
        address: '123 Test',
        SSnumber: '123456789',
        phoneNumber: '555-555-5555',
    };


    return (
        <>
            <CustomerHeader showLoggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div style={{ ...selectedStyles }}>
                <Dashboard userType="customer" userData={testUserData} />
            </div>
            <CustomerFooter />
        </>
    );
};
