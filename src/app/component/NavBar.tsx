'use client'

import Image from 'next/image';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NavBarProps {
  data: any;
}

const NavBar: React.FC<NavBarProps> = ({ data }) => {
  const router = useRouter();
  const [buttonStyle, setButtonStyle] = useState('bg-transparent bg-clip-text font-bold pl-6 pr-6 text-transparent bg-gradient-to-b from-[#F8E5C1] to-[#928671] hover:from-[#FFC045] hover:to-[#997329]');
  const [buttonText, setButtonText] = useState('Login');
  const [liveCountButtonStyle, setLiveCountButtonStyle] = useState('bg-transparent bg-clip-text font-bold pl-6 pr-6 text-transparent bg-gradient-to-b from-[#F8E5C1] to-[#928671] hover:from-[#FFC045] hover:to-[#997329]');
  const [liveCountButtonText, setLiveCountButtonText] = useState('Live Count');

  useEffect(() => {
    if (data) {
      setButtonStyle('bg-transparent bg-clip-text font-bold pl-6 pr-6 text-transparent bg-gradient-to-b from-[#F8E5C1] to-[#928671] hover:from-[#FFC045] hover:to-[#997329]');
      setButtonText('Logout');
    } else {
      setButtonStyle('bg-transparent bg-clip-text font-bold pl-6 pr-6 text-transparent bg-gradient-to-b from-[#F8E5C1] to-[#928671] hover:from-[#FFC045] hover:to-[#997329]');
      setButtonText('Login');
    }
  }, [data]);

  const actionHandler = () => {
    if (data) {
      Cookies.remove('ChampID');
      Cookies.remove('ChampAccess');
      setButtonStyle('bg-[#E8DFA0] text-black pl-6 pr-6');
      setButtonText('Login');
      router.push('/');
    } else {
      router.push('/');
    }
  };

  const liveCountHandler = () => {
    router.push('/livecount');
  };

  return (
    <div className="NavBar w-full h-24 absolute flex">
      <div className="container h-[60px] w-[1648px] bg-gradient-to-r from-[#3D3320] to-[#A38855] flex rounded-[50px] m-auto mb-0 shadow-xl overflow-hidden opacity-80" style={{ top: '60px', left: '136px', gap: '10px' }}>
        <div className="logoContainer h-full w-[90px] flex">
          <Image
            className="logo h-[70%] w-auto m-auto"
            src={"/hme.png"}
            alt={"Logo HME"}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="blankspace w-[calc(100%-320px)]"/>
        <div className="livecountbutton flex h-full w-[200px]">
          <button
            className={`button font-bold p-2 m-auto rounded-full ${liveCountButtonStyle} transition-all ease-in-out duration-300 NavBarText`}
            onClick={liveCountHandler}
          >
            {liveCountButtonText}
          </button>
        </div>
        <div className="authbutton flex h-full w-[120px]">
          <button
            className={`button font-bold p-2 m-auto rounded-full ${buttonStyle} transition-all ease-in-out duration-300 NavBarText`}
            onClick={actionHandler}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;