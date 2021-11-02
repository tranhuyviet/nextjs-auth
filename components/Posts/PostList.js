import React from 'react';
import PostForm from './PostForm';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    console.log(posts);
    return (
        <div className='h-full '>
            <h1 className='title'>Post List</h1>
            <PostForm />
            <div className='space-y-8 p-4  h-full overflow-scroll max-h-[573px]'>
                {posts.posts &&
                    posts.posts.map((post) => (
                        <PostItem key={post._id} post={post} />
                    ))}
            </div>
        </div>
    );
};

export default PostList;
