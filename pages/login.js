import { getSession, signIn } from 'next-auth/client';
import React from 'react';

const Login = ({ session }) => {
    console.log('LOGIN PAGE SESSION: ', session);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center shadow-lg'>
                <h1 className='text-xl bg-green-600 text-gray-50 font-bold tracking-widest  w-full text-center py-3 uppercase shadow-lg'>
                    Login
                </h1>
                <div className='flex flex-col space-y-4 p-10'>
                    <button
                        className='login-btn'
                        onClick={() => signIn('google')}
                    >
                        Login with Google
                    </button>
                    <button
                        className='login-btn'
                        onClick={() => signIn('facebook')}
                    >
                        Login with Facebook
                    </button>
                    <button
                        className='login-btn'
                        onClick={() => signIn('github')}
                    >
                        Login with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    // if session already -> redirect to home page
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}
