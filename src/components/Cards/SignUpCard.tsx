import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Template/Card';
import api from '../../services/api';
interface SignUpForm {
    username: string;
    password: string;
  }
// interface IError {
//   message: string;
// }
const SignUpCard = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState<SignUpForm>({
        username: '',
        password: '',
      });
      // const [error, setError] = useState<IError>({message: ''});
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
          await api.post('/auth/signup', {
            ...formData,
          });

          navigate('/login');
        } catch (err) {
          // setError({message: 'Error signing up. Please try again.'}  );
          console.log(err)
        }
      };
  return (
   <>
   <Card handleChange={handleChange} handleSubmit={handleSubmit} pageName='Sign up' path="/login" buttonName="Sign up" message="Already have an account? Login here"/>
   </>
  )
}

export default SignUpCard