import { useRef } from 'react';
import { request } from 'graphql-request';
import { MUTATION_ADD_POST, endpoint } from '../../utils/gqlSyntax';

const PostForm = () => {
    const inputRef = useRef('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const variables = { content: inputRef.current.value };
        const post = await request(endpoint, MUTATION_ADD_POST, variables);
        inputRef.current.value = '';
        console.log('POST: ', post);
    };
    return (
        <div className=' p-4 text-center'>
            <form onSubmit={handleSubmit}>
                <textarea
                    className='border w-full p-2 placeholder-gray-500 text-lg'
                    placeholder={`What's on your mind, `}
                    rows={4}
                    ref={inputRef}
                />
                <button type='submit' className='btn mt-6'>
                    Post
                </button>
            </form>
        </div>
    );
};

export default PostForm;
