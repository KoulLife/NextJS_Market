import React from 'react';
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

const NavItem = ({mobile} : {mobile?:boolean}) => {
  const {data: session, status} = useSession();
  console.log(session)
  return (
    <ul className={`flex gap-4 justify-center text-md w-full items-center ${mobile && "flex-col h-full"}`}>
      <li className='py-2 text-center border-b-2 cursor-pointer'><Link href='/admin'>Admin</Link></li>
      <li className='py-2 text-center border-b-2 cursor-pointer'><Link href='/user'>User</Link></li>
      {session?.user
        ?
        < li className='py-2 text-center border-b-2 cursor-pointer'><button
          onClick={() => signOut()}
        >Sign Out</button></li>
        :
        <li className='py-2 text-center border-b-2 cursor-pointer'><button
          onClick={() => signIn()}
        >Sign In</button></li>
      }
    </ul>
  );
};

export default NavItem;