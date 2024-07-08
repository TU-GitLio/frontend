import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import dayjs from 'dayjs';
import Gicon from '../public/main/gitlio-icon.svg';
import TitleSvg from '../public/main/title.svg';
import DashText from '../public/main/dashtext.svg';
import frame from '../public/main/frame.png';
import NavAnimation from '../components/mainComponents/NavAnimation';

const StartPage: React.FC = () => {
  const now = dayjs();
  now.format();
  return (
    <div className="flex flex-col bg-primary h-screen justify-center items-center">
      <div className="fixed top-0 left-0 w-full">
        <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2 bg-white">
          <Gicon />
          <SignedOut>
            <SignInButton
              forceRedirectUrl="/studio/dashboard"
              fallbackRedirectUrl="/studio/dashboard"
            />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-row ">
          <div>Site of the Day</div>
          <div className="border rounded-md"></div>
        </div>
        <TitleSvg />
        <SignedOut>
          <SignInButton
            forceRedirectUrl="/studio/dashboard"
            fallbackRedirectUrl="/studio/dashboard"
            mode={'modal'}
          >
            <button className="btn-lg btn">Join Us!</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/studio/dashboard">
            <DashText />
          </Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default StartPage;
