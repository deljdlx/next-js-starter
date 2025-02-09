import React, { useState } from 'react';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


import { ThemeRoller } from "../../components/ThemeRoller/ThemeRoller";
import { useDemoStore } from "../../stores/useDemoStore";
import Switch from '@mui/material/Switch';


import { useApplicationContext } from "../../contexts/applicationContext";




export const Header:React.FC = () => {


  const { data: session } = useSession();
  const { debug, setDebug } = useDemoStore();
  const [ debugChecked, setDebugChecked ] = useState(debug ?? true);

  const { theme } = useApplicationContext();


  const label = { inputProps: { 'aria-label': 'Debug' } };

  const handleDebug = () => {
    setDebug(!debug);
    setDebugChecked(!debugChecked);
  };

  return (
    <div className="header debug">
      <Link href="/">HOME</Link>
      <ThemeRoller />
      <span>
        Debug :
        <Switch
          {...label}
          checked={debugChecked}
          onChange={(e) => handleDebug()}
        />
      </span>

      <span>Theme : {theme}</span>

      <div className="user_menu">
          {session ? (
              <Link href="/"  onClick={() => signOut()}>Logout</Link>
          ) : (
              <>
                  <Link href="/signin">Login</Link>
                  <Link href="/signup">Signup</Link>
              </>
          )}
      </div>
    </div>
  );
};