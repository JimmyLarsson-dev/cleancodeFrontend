import CustomerFooter from "../../components/CustomerComponents/CustomerFooter";
import {customerStyles} from "../../styles/styles";
import React from "react";
import {useUserType} from "../../components/UserTypeContext";
import CustomerHeader from "../../components/CustomerComponents/CustomerHeader";

export const CustomerHomePage: React.FC = () => {
    const { userType } = useUserType();
    const selectedStyles =
        userType === "Customer" ? customerStyles : {};


    return (
        <>
          <CustomerHeader />
            <div style={{ ...selectedStyles }}>

            </div>
            <CustomerFooter />
        </>
    );
};
