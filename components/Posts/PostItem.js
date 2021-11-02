import moment from 'moment';

const PostItem = ({ post }) => {
    return (
        <div className='border rounded-lg p-3 shadow-md'>
            <h2 className='text-lg text-gray-700'>{post.content}</h2>
            <p className='text-sm text-gray-500'>
                {moment(post.updatedAt * 1).fromNow(true)}
            </p>
        </div>
    );
};

export default PostItem;
