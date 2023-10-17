import React from 'react';
import BookingHistoryTable from "../components/tabels/BookingHistoryTable";
import BookingTable from "../components/tabels/BookingTable";
import updateBooking from "../adminForms/updateBooking";
import CustomerJobCheck from "../components/CustomerJobCheck";


interface DashboardProps {
    userType: 'customer' | 'employee' | 'admin';
    userData: {
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        address: string,
        SSnumber: string,
        phoneNumber: string,
    }
}

const Dashboard: React.FC<DashboardProps> = ({ userType, userData }) => {

    const handleBookingUpdate = (jobId: number) => {
        console.log(`Booking ${jobId} was updated.`);
    };
    return (
        <div className="dashboard" style={styles.dashboard}>
            <div className="section" style={styles.section}>
                <div className="section-title" style={styles.sectionTitle}>
                    {userType === 'admin'
                        ? 'All Upcoming Bookings'
                        : userType === 'customer'
                            ? 'My Upcoming Bookings'
                            : 'My Upcoming Shifts'}
                </div>
                <div className="section-content">
                    {userType === "admin" && <BookingTable onUpdate={handleBookingUpdate}/>}
                    {userType === "customer" && <CustomerJobCheck />}

                </div>
            </div>

            <div className="section" style={styles.section}>
                <div className="section-title" style={styles.sectionTitle}>
                    User Data
                </div>
                <div className="section-content">
                    <div>First Name: {userData.firstname}</div>
                    <div>Last Name: {userData.lastname}</div>
                    <div>Email: {userData.email}</div>
                    {userData.address !== '' ?<div>Address: {userData.address}</div>: <></>}
                    {userData.SSnumber !== '' ? <div>Social Security Number: {userData.SSnumber}</div> : <></>}
                    <div>Phone Number: {userData.phoneNumber}</div>
                </div>
            </div>

            <div className="section" style={styles.section}>
                <div className="section-title" style={styles.sectionTitle}>
                    Today's Date and Time
                </div>
                <div className="section-content">
                    <div>Today's Date: {new Date().toLocaleDateString()}</div>
                    <div>Today's Time: {new Date().toLocaleTimeString()}</div>
                </div>
            </div>

            <div className="section" style={styles.section}>
                <div className="section-title" style={styles.sectionTitle}>
                    (Specific Content)
                </div>
                <div className="section-content">
                    {userType === 'admin' ? (
                        <div>Transaction Overview</div>
                    ) : userType === 'customer' ? (
                        <div>(Customer-specific content)</div>
                    ) : (
                        <div>(Employee-specific content)</div>
                    )}
                    <BookingHistoryTable />
                </div>
            </div>
            </div>
    );
};


const styles: { [key: string]: React.CSSProperties } = {
    dashboard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        color: 'black',
    },
    section: {
        flex: 1,
        border: '1px solid #ccc',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',

    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: '10px',

    },
};
export default Dashboard;


