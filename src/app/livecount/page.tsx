'use client';
import NavBar from "../component/NavBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Livecount() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const TOTAL_VOTERS = 577;
  const [ChampID, setChampID] = useState<string | undefined>(Cookies.get("ChampID"));
  const [jumlah, setJumlah] = useState(0);
  const [jumlahPercentage, setJumlahPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/live_count_total`);
        const data = await response.json();

        // Logging for debugging
        console.log("Data fetched:", data);

        setJumlah(data.suara);
        setJumlahPercentage(
          Math.min(100, Number(((data.suara / TOTAL_VOTERS) * 100).toFixed(2))) // Set 1% for each voter/total available voter 
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className="flex w-[100vw] h-[200vh]"
      style={{
        background: 'linear-gradient(111.84deg, #DDC28E -1.42%, #77684C 65.2%)',
        boxShadow: '0px 4px 4px 0px #00000040',
      }}
    >
      <div className="Background Hero w-full min-h-full h-fit sm:min-h-0 sm:h-[200vh] m-auto overflow-hidden bg-[url('/mainbg.png')] bg-cover bg-center flex">
        <div className="livecount animate-popup m-auto block pt-10 pb-10 w-[500px] md:w-[700px] h-fit rounded-3xl transition-all ease-in-out duration-1000">
          <div className="tittlecontainer w-full h-[70px] flex">
            <div className="wrapper flex m-auto w-fit h-[60px]">
              <div className="dotsection w-[60px] h-full flex">
                <div className="dot w-[60%] h-[60%] bg-[#B3403D] m-auto rounded-md animate-pulse"></div>
              </div>
              <div className="textSection h-full w-[200px] flex">
                <h1 className="livecount m-auto text-[#B3403D] text-[36px] font-Algerian font-extrabold">Live Count</h1>
              </div>
            </div>
          </div>
          <div className="subtitle w-full h-[40px] flex">
            <h1 className="subtitle text-[#552624] m-auto text-[16pt] font-Algerian pl-3 pr-3 text-center">
              PEMILIHAN KETUA HIMPUNAN HME ITB 2024/2025
            </h1>
          </div>
          <div className="voteform block sm:flex w-full h-fit">
            <div className="kolomkiri w-full sm:w-[50%] h-fit flex p-8">
              <div className="card w-[200px] h-[300px] m-auto bg-white rounded-xl overflow-hidden">
                <div className="nomor w-full text-black h-[15%] flex">
                  <div className="nomor m-auto font-extrabold text-[18pt]">01</div>
                </div>
                <div className="gambar w-full h-[70%] bg-[url('/poggy.png')] bg-cover bg-center"></div>
                <div className="nama text-black w-full h-[15%] flex">
                  <h2 className="m-auto text-[14pt] font-Algerian">Poggy M. Gultom</h2>
                </div>
              </div>
            </div>
            <div className="kolomkanan w-full sm:w-[50%] h-fit flex p-8">
              <div className="card w-[200px] h-[300px] m-auto bg-white rounded-xl overflow-hidden">
                <div className="nomor w-full text-black h-[15%] flex">
                  <div className="nomor m-auto font-extrabold text-[18pt]">02</div>
                </div>
                <div className="gambar w-full h-[70%] bg-[url('/kotak.png')] bg-cover bg-center"></div>
                <div className="nama text-black w-full h-[15%] flex">
                  <h2 className="m-auto text-[14pt] font-Algerian">Kotak Kosong</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="counter w-full h-fit mt-3 flex">
            <div className="wrapper m-auto h-fit w-[300px] p-1">
              <h1 className="judul w-full h-fit text-center text-[#552624] font-Algerian font-extrabold text-[24pt]">TOTAL SUARA</h1>
              <h1 className="judul w-full h-fit text-center text-[#552624] font-Algerian font-extrabold text-[40pt]">{jumlah}</h1>
              <div className="loadingbar m-auto h-[20px] overflow-hidden w-full bg-[#997329] drop-shadow-md">
                <div
                  className="progress relative h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                  style={{
                    width: `${jumlahPercentage}%`,
                    transition: 'width 0.5s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar data={ChampID} />
    </main>
  );
}

export default Livecount;
