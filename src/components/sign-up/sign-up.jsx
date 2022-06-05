import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/fiirebase.utils';

import FormInput from '../form-input/form-input';
import './sign-up.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
} 

const SignUp = () => {
    
    const [formField, setFormField] = useState(defaultFormFields)
    const {displayName, email, password, confirmedPassword} = formField;

    const reset = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmedPassword) {
            alert('not match pass');
            return;
        } else {
            try {

                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                createUserDocumentFromAuth(user, {displayName});
                reset()
            } catch(err) {
                console.log(err.message)
            }
        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setFormField({...formField, [name]: value})
    }


    return (
        <div className="sign-up-container">
            <h2>Let Sign Up</h2>
            <span>With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                        label='Display Name'
                        type="text"
                       name="displayName"
                       value={displayName}
                       required
                       onChange={handleChange}
                />
                
                <FormInput
                        label='Email'
                        type="email"
                       name="email"
                       value={email}
                       required
                       onChange={handleChange}

                />
             
                <FormInput
                        label='Password'
                        type="password"
                       name="password"
                       value={password}
                       required
                       onChange={handleChange}
                />
               
                <FormInput
                        label='Password Confirmed'
                        type="password"
                       name="confirmedPassword"
                       value={confirmedPassword}
                       required
                       onChange={handleChange}
                />  
                <button className='sign-up-button'>Sign Up</button>
            </form>
        </div>
    )

}


export default SignUp;