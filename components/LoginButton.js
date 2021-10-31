import React from 'react';
import { signIn } from 'next-auth/client';

const LoginButton = ({ provider, csrfToken, className, icon }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(provider.id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='hidden' name='csrfToken' defaultValue={csrfToken} />
            <button
                type='submit'
                className={`login-btn text-gray-50 ${className}`}
            >
                <div className='flex items-center'>
                    <img src={icon} alt={provider.name} className='h-8 w-8' />
                    <p className='ml-2'>Log in with {provider.name}</p>
                </div>
            </button>
        </form>
    );
};

export default LoginButton;
