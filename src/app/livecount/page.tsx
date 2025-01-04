'use client'
import NavBar from "../component/NavBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Livecount() {
 const [ChampID, setChampID] = useState<string | undefined>(
   Cookies.get("ChampID")
   );
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Melakukan GET request
        const response = await fetch("https://backend-pemira-hme2023.vercel.app/api/live_count_total");
        // Mengubah response menjadi JSON
        const data = await response.json();
        // Handle data
        console.log(data);
        setJumlah(data.suara)
      } catch (error) {
        console.error("Terjadi kesalahan saat melakukan request:", error);
      }
    };

    // Menetapkan interval untuk menjalankan fetchData setiap 10 detik
    const intervalId = setInterval(fetchData, 5000);

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);





  return ( 
    <main className="flex w-[100vw] h-[150vh]" style={{ background: 'linear-gradient(111.84deg, #DDC28E -1.42%, #77684C 65.2%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
      {/* Bagian lain dari komponen */}
      <div className="Background Hero w-full min-h-full h-fit sm:min-h-0 sm:h-[150vh] m-auto overflow-hidden bg-[url('/mainbg.png')] bg-cover bg-center flex">
        <div className="livecount animate-popup m-auto block pt-10 pb-10 w-[500px] md:w-[700px] h-fit rounded-3xl transition-all ease-in-out duration-1000">
          <div className="tittlecontainer w-full h-[70px] flex">
            <div className="wrapper flex m-auto w-fit h-[60px]">
              <div className="dotsection w-[60px] h-full flex">
                <div className="dot w-[60%] h-[60%] bg-[#B3403D] m-auto rounded-md animate-pulse"></div>
              </div>
              <div className="textSection h-full w-[200px] flex">
                <h1 className="livecount m-auto text-[#B3403D] text-[30px] font-Montserrat font-extrabold">Live Count</h1>
              </div>
            </div>
          </div>
          <div className="subtitle w-full h-[40px] flex">
            <h1 className="subtitle  text-[#552624] m-auto font-bold font-Montserrat pl-3 pr-3 text-center">PEMILIHAN KETUA HIMPUNAN HME ITB 2023/2024</h1>
          </div>
          <div className="voteform block sm:flex w-full h-fit">
            <div className="kolomkiri w-full sm:w-[50%] h-fit flex p-8">
              <div 
                className="card w-[200px] h-[260px] m-auto bg-white  rounded-xl overflow-hidden">
                <div className={`nomor w-full text-black h-[15%] flex`}>
                  <div className="nomor m-auto font-extrabold text-[18pt]">01</div>
                </div>
                <div className="gambar w-full h-[70%]  bg-[url('/poggy.png')] bg-cover bg-center"></div>
                <div className={`nama text-black w-full h-[15%]  flex`}>
                  <h2 className="nama m-auto text-[12pt] font-Montserrat">Poggy M. Gultom</h2>
                </div>
              </div>
            </div>
            <div className="kolomkanan w-full sm:w-[50%] h-fit flex p-8">
              <div 
                className="card w-[200px] h-[260px] m-auto bg-white  rounded-xl overflow-hidden">
                <div className={`nomor text-black w-full h-[15%]  flex`}>
                  <div className="nomor m-auto  font-extrabold text-[18pt]">02</div>
                </div>
                <div className="gambar w-full h-[70%]  bg-[url('/kotak.png')] bg-cover bg-center"></div>
                <div className={`nama text-black w-full h-[15%]  flex`}>
                  <h2 className="nama  m-auto text-[12pt] font-Montserrat">Kotak Kosong</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="counter w-full h-fit mt-3 flex">
            <div className="wrapper m-auto h-fit w-[200px] p-1">
              <h1 className="judul w-full h-fit text-center text-[#552624] font-Montserrat font-extrabold text-[18pt]">TOTAL SUARA</h1>
              <h1 className="judul w-full h-fit text-center text-[#552624] font-Montserrat font-extrabold text-[40pt]">{jumlah}</h1>
              <div className="loadingbar m-auto h-[20px] overflow-hidden w-full bg-white">
                <div className={`progress relative h-full w-full overflow-hidden rounded-sm transition-all ease-in-out duration-200`}>
              <div className="loadingbox relative top-[-100px] left-[-100px] h-[500px] w-[500px] bg-gradient-to-br from-[#D7FF38] to-[#a18721] rounded-full animate-slowspin m-auto"></div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar data={ChampID}/> 
    </main> 
  );
}

export default Livecount;