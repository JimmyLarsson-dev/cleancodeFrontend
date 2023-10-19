import React, {useState} from "react";
import Header from "../reusableComponents/header";
// import CustomerFooter from "../reusableComponents/footer";
import {CustomerTable} from "../components/tabels/CustomerTable";
import CustomerFooter from "../components/CustomerComponents/CustomerFooter";
import EditCustomerForm from "../forms/editCustomerForm";

export default function CustomerPage() {

    const  [showUpdateCustomer, setShowUpdateCustomer] = useState(false)
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null)

    const handleUpdate = (cusId: number) =>{
        setSelectedCustomerId(cusId);
        setShowUpdateCustomer(true);
    }
    const handleUpdateComplete = () => [
        setShowUpdateCustomer(false)
    ]

    return (
        <>
            <Header/>
            <div className="h1" style={styles.h1}>
                <h1>Customers</h1>

                {!showUpdateCustomer ? <CustomerTable onUpdate={(cusId: number) => handleUpdate(cusId)} /> :
                <EditCustomerForm cusId={selectedCustomerId} doneWithEdit={handleUpdateComplete} /> }
                {/*<CustomerFooter/>*/}
            </div>
        </>
    )
}

const styles = {
    h1: {
        marginTop: "4%",
        justifyContent: "center" as 'center',
        textAlign: "center" as 'center'
    }
}