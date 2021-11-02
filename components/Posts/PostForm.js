import { useRef, useState } from 'react';
import { request } from 'graphql-request';
import { MUTATION_ADD_POST, endpoint } from '../../utils/gqlSyntax';

const PostForm = () => {
    // const inputRef = useRef('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const variables = { content };
        const post = await request(endpoint, MUTATION_ADD_POST, variables);
        setContent('');
        console.log('POST: ', post);
    };

    return (
        <div className=' p-4 text-center'>
            <form onSubmit={handleSubmit}>
                <textarea
                    className='border w-full p-2 placeholder-gray-500 text-lg'
                    placeholder={`What's on your mind, `}
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    // ref={inputRef}
                />
                <button
                    type='submit'
                    className={`btn mt-6 ${
                        content.length === 0 &&
                        'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={content.length > 0 ? false : true}
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default PostForm;
