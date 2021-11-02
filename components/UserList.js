import React from 'react';

const UserList = ({ users, setUserId, userId }) => {
    return (
        <div className='border min-w-[280px] shadow-xl'>
            <h1 className='title border-b border-b-white'>User List</h1>
            <div className=''>
                {users &&
                    users.map((user) => (
                        <div
                            key={user._id}
                            className={`relative border-b flex items-center hover:cursor-pointer hover:bg-gray-100 hover:shadow-sm  pl-4 pr-8 py-[6px] transition duration-300 last:border-0 ${
                                userId === user._id && 'bg-gray-100'
                            }`}
                            onClick={() => setUserId(user._id)}
                        >
                            <img
                                src={user.image}
                                alt={user.name}
                                className='h-12 w-12 rounded-full border-white border-2'
                            />
                            <span className='font-semibold ml-4'>
                                {user.name}
                            </span>
                            {userId === user._id && (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-7 w-7 absolute right-1 text-green-600'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M9 5l7 7-7 7'
                                    />
                                </svg>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default UserList;
