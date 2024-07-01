import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { isAuthenticated, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    if (error) {
      console.error('Error during authentication:', error);
    }
  }, [isAuthenticated, error, navigate]);

  return <div>Loading...</div>;
};

export default Callback;