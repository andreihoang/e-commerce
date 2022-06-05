import { useState } from 'react';
import { signInWithGoogle } from '../../firebase/fiirebase.utils';
import { signInAuthWithEmailAndPassword } from '../../firebase/fiirebase.utils';


import FormInput from '../form-input/form-input';
import './sign-in.scss';

const defaultFormFields = {
    email: '',
    password: '',   
} 

const SignIn = () => {
    const [formField, setFormField] = useState(defaultFormFields)
    const {email, password} = formField;
    
    const reset = () => {
        setFormField(defaultFormFields)
    }

    const signInWithGooglePopup = async () => {
        const {user} = await signInWithGoogle();
        console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const {user} = await signInAuthWithEmailAndPassword(email, password);
            
            reset();
    
        } catch(err) {
            console.log(err)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value})
    }



    return (
        <div className="sign-in-container">
            <h2>Let Sign In Babe</h2>
            <span>With Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
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
                <div className='buttons-container'>

                        <button className='sign-in-button'>Sign In</button>
                        <button onClick={signInWithGooglePopup} className='google-button'>Sign In With Google</button>
                </div>
            </form>
        </div>
    )

}


export default SignIn;