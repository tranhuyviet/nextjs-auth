import { useSession, signOut } from 'next-auth/client';
import Image from 'next/image';

const Navbar = () => {
    const [session, loading] = useSession();
    console.log('NAVBAR SESSION: ', session);
    return (
        <nav className='h-16 bg-green-600 text-gray-50 shadow-xl'>
            <div className='container h-full flex items-center'>
                <h1 className='uppercase font-bold text-xl first-letter:text-yellow-300 tracking-widest'>
                    next-auth
                </h1>
                <div className='flex items-center space-x-4 ml-auto'>
                    {session && (
                        <>
                            <div className='flex items-center space-x-2'>
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name}
                                    width={46}
                                    height={46}
                                    className='rounded-full'
                                />
                                <h2 className='font-bold tracking-wider'>
                                    {session.user.name}
                                </h2>
                            </div>
                            <div className='w-[1px] h-[30px] bg-gray-200' />
                            <button
                                className=' py-2 px-8 rounded-full shadow-lg bg-gray-50 text-gray-700'
                                onClick={() => signOut()}
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
