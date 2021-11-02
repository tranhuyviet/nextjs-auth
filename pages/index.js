import { useState } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import UserList from '../components/UserList';
import { request } from 'graphql-request';
import PostList from '../components/Posts/PostList';
import {
    endpoint,
    QUERY_GET_USERS,
    QUERY_GET_POSTS_BY_USERID,
} from '../utils/gqlSyntax';

export default function Home({ session, users }) {
    const [userId, setUserId] = useState(session.userLoggedInId);
    // console.log('userid: ', userId);
    return (
        <div>
            <Head>
                <title>Nextjs Authentication</title>
                <meta
                    name='Nextjs Authentication'
                    content='Nextjs Authentication by Google, Facebook and Github'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='h-[calc(100vh-64px)] container flex'>
                <div className='mt-4'>
                    <UserList
                        users={users}
                        setUserId={setUserId}
                        userId={userId}
                    />
                </div>
                {/* 64px: banner, 16px: mt-4, 16px: can show shadow */}
                <div className='flex-auto  mt-4 ml-4 max-h-[calc(100vh-64px-16px-16px)] shadow-xl '>
                    <PostList userId={userId} />
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getSession({ req });
    // console.log('HOME SESSION', session);

    // if have no session -> not authentication yet -> redirect to login page
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const users = await request(endpoint, QUERY_GET_USERS);

    // const posts = await request(endpoint, QUERY_GET_POSTS_BY_USERID, {
    //     userId: '6180379c8bb3480c85b762d6',
    // });

    // if session already -> return users props
    return {
        props: {
            session,
            users: users.getUsers.map((user) => {
                if (user._id === session.userLoggedInId) {
                    user.name = `${user.name}   --- YOU`;
                }
                return user;
            }),
            //posts: posts.getPostsByUserId,
        },
    };
}
