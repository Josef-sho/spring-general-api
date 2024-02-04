import React from 'react';
import { useToasts } from 'react-toast-notifications';

function MyComponent() {
  const { addToast } = useToasts();

  const handleNotification = () => {
    addToast('Notification message!', { appearance: 'success', autoDismiss: true });
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleNotification}>Show Notification</button>
    </div>
  );
}

export default MyComponent;
