import React from 'react';
import PostForm from './PostForm';
import PostItem from './PostItem';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { endpoint, QUERY_GET_POSTS_BY_USERID } from '../../utils/gqlSyntax';

const fetchPosts = async (userId) => {
    const posts = await request(endpoint, QUERY_GET_POSTS_BY_USERID, {
        userId,
    });
    return posts;
};

const PostList = ({ userId }) => {
    const { data } = useSWR(userId, fetchPosts);

    if (!data) return null;

    const posts = data?.getPostsByUserId;

    // const contentSource = await serialize(posts.posts.content)

    // console.log(posts);

    return (
        <div className='h-full  flex flex-col'>
            <h1 className='title'>Post List</h1>
            <PostForm />
            <div className=' w-full flex-auto relative'>
                {/* flex flex-col-reverse space-y-reverse */}
                <div className='space-y-8 p-4 overflow-scroll absolute inset-0 '>
                    {posts.posts &&
                        posts.posts.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;
