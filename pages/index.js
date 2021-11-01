import Head from 'next/head';
import { getSession, signOut } from 'next-auth/client';
import Image from 'next/image';
import UserList from '../components/UserList';
import { request, gql } from 'graphql-request';

export default function Home({ users }) {
    // console.log(users);
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

            <main className='h-[calc(100vh-64px)] container flex'>
                <div className='mt-4'>
                    <UserList users={users} />
                </div>
                <div className='flex justify-center items-center flex-auto '>
                    <div className='text-center'>
                        <h1 className='uppercase text-lg font-bold'>
                            Welcome to Next Auth - Home Page
                        </h1>
                        <p className='uppercase font-semibold'>
                            You are logged in
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession({ req });
    console.log('HOME SESSION', session);

    // if have no session -> not authentication yet -> redirect to login page
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const endpoint = process.env.NEXTAUTH_URL + '/api/graphql';

    const data = await request(endpoint, QUERY_GET_USERS);

    // if session already -> return users props
    return {
        props: {
            users: data.getUsers.map((user) => {
                if (user._id === session.userLoggedInId) {
                    user.name = `${user.name}   --- YOU`;
                    user.selected = true;
                } else {
                    user.selected = false;
                }
                return user;
            }),
        },
    };
}

const QUERY_GET_USERS = gql`
    query GetUsers {
        getUsers {
            _id
            name
            email
            image
        }
    }
`;
