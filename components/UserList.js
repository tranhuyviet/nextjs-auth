import React from 'react';

const UserList = ({ users }) => {
    return (
        <div className='border min-w-[280px] shadow-xl'>
            <h1 className='bg-green-600 text-white text-lg text-center uppercase py-3 font-bold tracking-wider'>
                User List
            </h1>
            <div className=''>
                {users &&
                    users.map((user) => (
                        <div
                            key={user._id}
                            className='border-b flex items-center hover:bg-green-600 hover:cursor-pointer hover:text-white px-4 py-[6px] transition duration-300 last:border-0'
                        >
                            <img
                                src={user.image}
                                alt={user.name}
                                className='h-12 w-12 rounded-full border-white border-2'
                            />
                            <span className='font-semibold ml-4'>
                                {user.name}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default UserList;
