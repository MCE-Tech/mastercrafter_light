import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if already logged in using the provided guard endpoint
    fetch('http://localhost:8080/adminloginguard', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          navigate('/admin');
        } else {
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        navigate('/admin');
      } else {
        const text = await res.text();
        setError(text || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  if (loading) return <div className="p-8">Checking session...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white/80 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-sm">Email</span>
            <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" type="email" required />
          </label>
          <label className="block mb-4">
            <span className="text-sm">Password</span>
            <input value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" type="password" required />
          </label>
          <div className="flex items-center justify-between">
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
