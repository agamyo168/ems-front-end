import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Template/Card';
interface LoginForm {
    username: string;
    password: string;
  }
  
const LoginCard = () => {
  const navigate = useNavigate();
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
        console.log(formData)

      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        try {
          const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
            ...formData,
          });
    
          // Assuming the response contains a token
          const { token } = response.data;
    
          // Store the token in localStorage
          localStorage.setItem('token', token);
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