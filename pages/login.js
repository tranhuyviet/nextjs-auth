import { getSession, signIn, csrfToken, providers } from 'next-auth/client';
import React from 'react';
import LoginButton from '../components/LoginButton';

const Login = ({ session, csrfToken, providers }) => {
    // console.log('LOGIN PAGE SESSION: ', session);
    // console.log('LOGIN PAGE CSRFTOKEN: ', csrfToken);
    // console.log('LOGIN PAGE PROVIDERS: ', providers);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center shadow-lg'>
                <h1 className='text-xl bg-green-600 text-gray-50 font-bold tracking-widest  w-full text-center py-3 uppercase shadow-lg'>
                    Login
                </h1>
                <div className='flex flex-col space-y-4 p-10'>
                    <LoginButton
                        provider={providers.google}
                        csrfToken={csrfToken}
                        // className='bg-[#DF492F]'
                        className='text-gray-700 border'
                        icon='/images/icon-google.svg'
                    />
                    <LoginButton
                        provider={providers.facebook}
                        csrfToken={csrfToken}
                        className='bg-[#314A86]'
                        icon='/images/icon-facebook.svg'
                    />
                    <LoginButton
                        provider={providers.github}
                        csrfToken={csrfToken}
                        className='bg-[#232628]'
                        icon='/images/icon-github.svg'
                    />
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session) return { redirect: { destination: '/', permanent: false } };
    return {
        props: {
            providers: await providers(context),
            session,
            csrfToken: await csrfToken(context),
        },
    };
}

export default Login;
