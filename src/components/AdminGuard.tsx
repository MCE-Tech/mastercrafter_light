import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/isLoggedin', { method: 'GET', credentials: 'include' })
      .then(res => {
        if (res.ok) {
          navigate('/admin/dashboard');
        } 
      })
      .catch();
  }, [navigate]);

  if (checking) return <div className="p-8">Validating admin session...</div>;

  return <>{children}</>;
};

export default AdminGuard;
