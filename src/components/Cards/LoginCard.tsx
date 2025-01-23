import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Template/Card';
import { UserContext } from '../../context/AuthContext';
import api from '../../services/api';
interface LoginForm {
    username: string;
    password: string;
  }
  
const LoginCard = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext)!; // Use non-null assertion
    const [formData, setFormData] = useState<LoginForm>({
        username: '',
        password: '',
      });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });

      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        try {
          const response = await api.post('/auth/login', {
            ...formData,
          });
          console.log(response.data);
          // Assuming the response contains a token
          const { token } = response.data;
          // Store the token in localStorage
          localStorage.setItem('token', token);
          login(formData);
          // Redirect to a protected route
          navigate('/');
        } catch (err) {
          console.log(err)
        }
      };
  return (
   <>
   <Card handleChange={handleChange} handleSubmit={handleSubmit} pageName='Login' path="/signup" message="Don't have an account? Sign up here" buttonName='Sign in'/>
   </>
  )
}

export default LoginCard