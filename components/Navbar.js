import { useSession, signOut } from 'next-auth/client';
import Image from 'next/image';

const Navbar = () => {
    const [session, loading] = useSession();
    // console.log('NAVBAR SESSION: ', session);
    return (
        <nav className='h-16 shadow-xl'>
            <div className='container h-full flex items-center'>
                <h1 className='uppercase font-bold text-xl first-letter:text-green-600 tracking-widest'>
                    next-auth
                </h1>
                <div className='flex items-center space-x-4 ml-auto'>
                    {session && (
                        <>
                            <div className='flex items-center space-x-2'>
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name}
                                    width={36}
                                    height={36}
                                    className='rounded-full'
                                />
                                <h2 className='font-bold tracking-wider'>
                                    {session.user.name}
                                </h2>
                            </div>
                            <div className='w-[1px] h-[30px] bg-gray-200' />
                            <button className='btn' onClick={() => signOut()}>
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
