import moment from 'moment';
import { MDXRemote } from 'next-mdx-remote';

const PostItem = ({ post }) => {
    return (
        <div className='border rounded-lg p-3 shadow-md'>
            <h2 className='text-lg text-gray-700'>{post.content}</h2>
            {/* <div>
                <MDXRemote {...post.content} />
            </div> */}
            <p className='text-sm text-gray-500 mt-2'>
                {moment(post.updatedAt * 1).fromNow(true)}
            </p>
        </div>
    );
};

export default PostItem;
