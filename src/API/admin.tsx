import React, {useState} from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';

const admin = {

        getAllJobs: async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/jobs/getAllJobs');
                const formattedData = response.data.map((job: any) => {
                    const date = new Date(job.date);
                    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                    return {
                        ...job,
                        date: formattedDate,
                        id: job.jobId,
                        customerId: job.customer ? job.customer.id : 'N/A'
                    }; // kollar om customer finns, isåfall får man id, annars NA
                });
                return formattedData;
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        },

        getJobByStatus: async () => {
            try {
                const statuses = ['DONE', 'APPROVED', 'UNAPPROVED', 'PAID', 'CANCELLED'];
                const response = await axios.get('http://localhost:8080/api/jobs/getByStatus', {
                    params: {statuses},
                    paramsSerializer: params => {
                        return `statuses=${statuses.join('&statuses=')}`
                    }
                });

                const formattedData = response.data.map((job: { date: string | number | Date; }) => {
                    const date = new Date(job.date);
                    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                    return {...job, date: formattedDate};
                });

                return formattedData;

            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        },

        adminLogIn: () => {

            const [email, setEmail] = useState<string>('');
            const [password, setPassword] = useState<string>('');

            const handleLogin = () => {

                const baseURL = 'null';

                const credentials = {
                    email, password
                };

                axios
                    .post(baseURL, credentials)
                    .then((response: AxiosResponse) => {

                        //  const token = response.data.token;
                        //
                        // console.log('Admin logs in with token: ' + token);

                    })
                    .catch((error: AxiosError) => {
                        console.error('Admin log in failed: ' + error.message);
                    });
            }
        },

        getAvailableEmp: async (date: string, hours: number) => {

            if (!date) {
                console.error('Ogiltigt datum.');
                return;
            }
            try {
                const Url = 'http://localhost:8080/api/jobs/getAvailableEmployees';

                const checkEmployees = {
                    date: date,
                    lookForAvailableThisManyHours: hours
                };
                const response = await axios.post(Url, checkEmployees);
                console.log(response.data);
                return response.data;

            } catch (error) {
                console.error('Error creating employee', error);
            }
        },

        createBooking: async (
            jobType: string,
            dateAndTime: string,
            timeSlotList: string[],
            squareMeters: string,
            payment: string,
            customer: string
        ) => {

            console.log("................*********" + timeSlotList)
            try {
                const Url = 'http://localhost:8080/api/jobs/createJob/';

                const bookingData = {
                    jobtype: jobType,
                    date: dateAndTime,
                    timeSlotList: timeSlotList,
                    squareMeters: squareMeters,
                    paymentOption: payment,
                    customerId: customer
                };

                const response = await axios.post(Url, bookingData);
                console.log('Booking was created', response.data);
            } catch (error) {
                console.error('Error creating booking', error);
            }
        }
    };


export default admin;



