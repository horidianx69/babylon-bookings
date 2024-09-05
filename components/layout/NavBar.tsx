"use client"

import {UserButton} from "@clerk/nextjs";


const NavBar = () => {
  return (
     <header className="flex justify-between">
              <h1>BabylonBookings</h1>
              <UserButton showName/>
            </header>
  )
}

export default NavBar;