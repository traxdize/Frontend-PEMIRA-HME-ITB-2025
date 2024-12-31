'use client'

import Image from 'next/image';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

 interface NavBarProps {
    // Anda bisa menambahkan props jika diperlukan
    data : any
  }

  const NavBar: React.FC<NavBarProps> = ({data}) => {

    const router = useRouter();
    const [buttonStyle, setbuttonStyle] = useState('bg-[#E8DFA0] text-black pl-6 pr-6')
    const [buttonText, setbuttonText] = useState('Login')

    useEffect(() => {
      if (data){
        setbuttonStyle('bg-red-700 text-white pl-5 pr-5')
        setbuttonText('Logout')
      } else {
        setbuttonStyle('bg-[#E8DFA0] text-black pl-6 pr-6')
        setbuttonText('Login')
      }
    }, [data]);


    const ActionHandler = () =>{
      if (data){
        Cookies.remove('ChampID');
        Cookies.remove('ChampAccess');
        setbuttonStyle('bg-[#E8DFA0] text-black pl-6 pr-6')
        setbuttonText('Login')
        router.push('/')
      } else {
        router.push('/')
      }
    }

    return (
      <div className="NavBar w-full h-24 absolute flex">
        <div className="container h-[60px] w-[90%] bg-white flex rounded-full m-auto mb-0 shadow-xl overflow-hidden">
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
          <div className="blankspace w-[calc(100%-205px)]"></div>
          <div className="authbutton flex h-full w-[115px]">
            <button
              className={`button font-bold p-2  m-auto rounded-full ${buttonStyle} transition-all ease-in-out duration-300 font-Montserrat`}
              onClick={ActionHandler}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default NavBar;
