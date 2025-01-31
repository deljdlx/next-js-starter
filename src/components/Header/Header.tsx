import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


import { ThemeRoller } from "../../components/ThemeRoller/ThemeRoller";


export const Header:React.FC = () => {


  const { data: session } = useSession();

  return (
    <div className="header">
      <Link href="/">HOME</Link>
      <ThemeRoller />

      <div className="user_menu">
          {session ? (
              <Link href="/"  onClick={() => signOut()}>Logout</Link>
          ) : (
              <>
                  <Link href="/login">Login</Link>
                  <Link href="/signup">Signup</Link>
              </>
          )}
      </div>
    </div>
  );
};