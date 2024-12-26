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
    <main className="flex w-[100vw] h-[100vh] bg-Orange">
      {/* Bagian lain dari komponen */}
      <div className="Background Hero w-full h-full m-auto overflow-hidden bg-[url('/bg1.png')] bg-cover bg-center flex">
        <div className="logincontainer animate-popup m-auto block pt-10 pb-10 w-[500px] md:w-[700px] h-[200px] rounded-3xl transition-all ease-in-out duration-1000">
          <div className="title leading-tight w-full text-center text-[30pt] sm:text-[40pt] md:text-[50pt] lg:text-[60pt] font-extrabold text-black font-Montserrat">
              THANK YOU!!
          </div>
          <div className="maincontent h-fit relative top-[-53px] sm:top-[-68px] md:top-[-86px] lg:top-[-103px] block">
            <div className="title leading-tight w-full text-center text-[30pt] sm:text-[40pt] md:text-[50pt] lg:text-[60pt] font-extrabold text-[#B3403D] font-Montserrat">
                THANK YOU!!
            </div>
          </div>
          <div className="message w-full flex text-[10pt] sm:text-[12pt] md:text-[14pt] lg:text-[16pt] mt-[-30px] sm:mt-[-40px] md:mt-[-50px] lg:mt-[-70px]">
            <h1 className="pesan m-auto font-bold font-Montserrat text-[#B3403D]">SUARAMU BERHASIL DIREKAM CHAMP!!</h1>
          </div>
        </div>
      </div>
      <NavBar data={ChampID}/>
    </main> 
  );
}

export default Thankyou;