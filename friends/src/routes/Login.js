
import { useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import useForm from 'hooks/useForm';
import { axiosWithAuth } from 'functions/auth';





const Login = (props) => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ form, handleChange ] = useForm({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    setIsLoading(true);
    setErrorMessage('');

    axiosWithAuth().post('http://localhost:5000/api/login', form)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => {
        console.log(err.response);
        setErrorMessage(err.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div style={{padding: 20}}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label><br/>
          <input name='username' id='username' type='text' onChange={handleChange} value={form.username} />
        </div>
        <div>
          <label htmlFor='password'>Password</label><br/>
          <input name='password' id='password' type='password' onChange={handleChange} value={form.password} />
        </div>
        <button>Log In</button>
      </form>
      <p style={{color: 'red'}}>{errorMessage}</p>
      <FadeLoader loading={isLoading} />
    </div>
  );
}



export default Login;