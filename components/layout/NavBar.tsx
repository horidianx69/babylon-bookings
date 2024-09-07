"use client"

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  const router = useRouter(); // Call useRouter to initialize the router object
  const {userId} = useAuth(); // Call useAuth to initialize the user object


  return (
     <div className="sticky top-0 border border-b-primary/10 bg-secondary/50">
       <Container>
        <div className="flex items-center justify-between ">
         <div 
           className="flex items-center gap-1 cursor-pointer" 
           onClick={() => router.push('/')}> {/* Use the router object */}
           
           <Image src="/logo.svg" alt="logo" width="35" height="35" />
           <div className="font-semibold text-l p-2">BabylonBookings</div>
         </div>

          <div>
            <SearchInput />
          </div>
          
         <div className="flex gap-3 items-center">
            <div>
              <ModeToggle />
              < NavMenu />
            </div>

            <UserButton showName />

            {!userId && <>
              <Button onClick={()=> router.push('/sign-in')} variant='outline' size='sm'>Sign In</Button>
              <Button onClick={()=> router.push('/sign-up')} size='sm'>Sign Up</Button>
            </>}

         </div>
        </div>
       </Container>
     </div>
  );
};

export default NavBar;


// the navbar componenet includes the UserButton component from the clerk,which provides interactivity for the user to sign in or sign out of the application.
//components that involve interactivity ,state changes need to rendered client side while in nextjs all componenets are rendered server side.