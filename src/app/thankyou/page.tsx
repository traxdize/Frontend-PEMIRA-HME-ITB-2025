'use client'
import NavBar from "../component/NavBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Thankyou() {
  const [ChampID, setChampID] = useState<string | undefined>(
    Cookies.get("ChampID")
  );
  useEffect(() => {
    setChampID(Cookies.get("ChampID"));
  }, []);
  return ( 
    <main className="flex w-[100vw] h-[100vh]" style={{ background: 'linear-gradient(111.84deg, #DDC28E -1.42%, #77684C 65.2%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
        {/* Bagian lain dari komponen */}
      <div className="Background Hero w-full h-full m-auto overflow-hidden bg-[url('/mainbg.png')] bg-cover bg-center flex">
        <div className="logincontainer animate-popup m-auto block pt-10 pb-10 w-[500px] md:w-[700px] h-[320px] rounded-3xl transition-all ease-in-out duration-1000">
        <div className="title leading-tight w-full text-center text-[60pt] font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#221D11] via-[#221D11] to-[#A38855] font-Algerian flex justify-center items-center h-full">
          THANK YOU!!
        </div>
        <h1 className="title m-auto leading-tight w-full text-center text-transparent bg-clip-text bg-gradient-to-b from-[#221D11] via-[#221D11] to-[#a97d2b]" style={{ fontFamily: 'Abhaya Libre ExtraBold', fontSize: '26px' }}>SUARAMU BERHASIL DIREKAM CHAMP!!</h1>
        </div>
      </div>
      <NavBar data={ChampID}/>
    </main> 
  );
}

export default Thankyou;