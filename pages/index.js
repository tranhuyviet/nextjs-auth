import Head from 'next/head';
import { getSession, signOut } from 'next-auth/client';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='Nextjs Authentication'
                    content='Nextjs Authentication by Google, Facebook and Github'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='h-[calc(100vh-64px)] flex justify-center items-center'>
                <div className='flex flex-col space-y-4 text-center items-center'>
                    <h1 className='uppercase text-lg'>
                        Welcome to Next Auth - Home Page
                    </h1>
                    <p>You are logged in</p>
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    // if have no session -> not authentication yet -> redirect to login page
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    // if session already -> return session props
    return {
        props: { session },
    };
}
