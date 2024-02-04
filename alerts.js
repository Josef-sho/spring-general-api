import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alerts = () => {
    const showSuccessAlert = () => {
        toast.success('Operation completed successfully!', { autoClose: 2000 });
    };

    const showErrorAlert = () => {
        toast.error('Something went wrong. Please try again.', { autoClose: 2000 });
    };

    const showWarningAlert = () => {
        toast.warning('Be cautious. This is a warning message.', { autoClose: 2000 });
    };

    return (
        <div>
            <button onClick={showSuccessAlert}>Show Success Alert</button>
            <button onClick={showErrorAlert}>Show Error Alert</button>
            <button onClick={showWarningAlert}>Show Warning Alert</button>

            <ToastContainer />
        </div>
    );
};

export default Alerts;
