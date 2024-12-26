"use client";
import Loading from "@/app/component/Loading";
import NavBar from "@/app/component/NavBar";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import VerifySubmit from "../component/VerifySubmit";
import { stringify } from "querystring";

// function Vote() {
//   const route = useRouter();
//   const ChampID = Cookies.get("ChampID")
//   const ChampAccess = Cookies.get("ChampAccess")

//   const  [LoadingCondition, setLoadingCondition] = useState(false);
//   const  [popupAnimation, setpopupAnimation] = useState('opacity-0');
//   const  [isVerify, setIsVerify] = useState(false)
//   let  isAbleToSubmit = false

//   useEffect(() => {
//      if (ChampAccess){
//       setpopupAnimation('animate-popup opacity-100')
//     } else {
//       route.push('/verification')
//     }
//   }, [ChampAccess, route]);  

//   // Selection handler
//   const [Selection, setSelection] = useState("0")
//   let styleCard1 = 'text-black'
//   let styleCard2 = 'text-black'
//   let styleSubmit = 'bg-[#B3403D]'
  

//   if (Selection == "1") {
//     styleCard1 = 'bg-black text-white'
//     styleCard2 = 'text-black'
//     styleSubmit = 'bg-orange-500 hover:bg-[#B3403D]'
//     isAbleToSubmit = true
//   } else if (Selection == "2"){
//     styleCard2 = 'bg-black text-white'
//     styleCard1 = 'text-black'
//     styleSubmit = 'bg-orange-500 hover:bg-[#B3403D]'
//     isAbleToSubmit = true
//   } else {
//     styleCard1 = 'text-black'
//     styleCard2 = 'text-black'
//     isAbleToSubmit = false
//   }

//   const verification = (allow:boolean) => {
//     if (allow){
//       setIsVerify(true)
//     }
//   }

//   const setAction = async (sure:boolean) => {

//     if (sure) {
//       setLoadingCondition(true)
//       setIsVerify(false)

//       // API REQUEST SUBMIT DATA
//       const requestBody = {
//         username: Cookies.get("ChampID"),
//         pilihan: Selection,
//         token: process.env.NEXT_PUBLIC_API_TOKEN,
//       };

//       // LAKUKAN PENGECEKAN SURAT SUARA
//       try {
//         // Melakukan POST request
//         const voteresponse = await fetch(
//           "https://backend-pemira-hme2023.vercel.app/api/vote",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(requestBody),
//           }
//         );
    
//         // Mengubah response menjadi JSON
//         const votedata = await voteresponse.json();
        
//         if (votedata.error){
//           console.log(votedata.message)
//           setLoadingCondition(false)
//         }

//         if (votedata.action == "success"){
//           route.push('/thankyou')
//         } 
        
//       } catch (error) {
//         console.error("Terjadi kesalahan saat melakukan request:", error);
//         route.push("/");
//       }


//     } else {
//       setIsVerify(false)
//     }

//   }

//   return (
//     <main className="flex w-[100vw] h-[100vh] bg-Orange">
//       {/* Bagian lain dari komponen */}
//       <div className="Background Hero w-full h-full m-auto overflow-auto bg-[url('/bg1.png')] bg-cover bg-center flex">
//         <div className={`voteform w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] min-h-[80vh] h-fit m-auto mt-[20vh] shadow-2xl block p-5 sm:p-7 md:p-16 pt-10 bg-gradient-to-b from-white to-[#ccedba] via-white ${popupAnimation}`}>
//           <div className="title block w-full text-center text-black font-Montserrat font-bold text-[13pt] sm:text-[18pt]">
//             <h1 className="">SURAT SUARA</h1>
//             <h1 className="">PEMIRA HME ITB</h1>
//             <h1 className="">KETUA HIMPUNAN HME ITB 2024/2025</h1>
//           </div>
//           <div className="voteform block sm:flex w-full h-fit pt-5">
//             <div className="kolomkiri w-full sm:w-[50%] h-fit flex p-8">
//               <div 
//                 className="card w-[280px] h-[370px] m-auto bg-white border-solid border-[2px] border-black hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
//                 onClick={() => {setSelection("1")}}>
//                 <div className={`nomor w-full ${styleCard1} h-[15%] border-solid border-[1.5px] border-black flex`}>
//                   <div className="nomor m-auto font-extrabold text-[23pt]">01</div>
//                 </div>
//                 <div className="gambar w-full h-[70%] border-solid border-[1.5px] border-black bg-[url('/bright.png')] bg-cover bg-center"></div>
//                 <div className={`nama ${styleCard1} w-full h-[15%] border-solid border-[1.5px] border-black flex`}>
//                   <h2 className="nama m-auto text-[15pt] font-Montserrat">Bright C. Kusuma</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="kolomkanan w-full sm:w-[50%] h-fit flex p-8">
//               <div 
//                 className="card w-[280px] h-[370px] m-auto bg-white border-solid border-[2px] border-black hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
//                 onClick={() => {setSelection("2")}}>
//                 <div className={`nomor ${styleCard2} w-full h-[15%] border-solid border-[1.5px] border-black flex`}>
//                   <div className="nomor m-auto  font-extrabold text-[23pt]">02</div>
//                 </div>
//                 <div className="gambar w-full h-[70%] border-solid border-[1.5px] border-black bg-[url('/kotak.png')] bg-cover bg-center"></div>
//                 <div className={`nama ${styleCard2} w-full h-[15%] border-solid border-[1.5px] border-black flex`}>
//                   <h2 className="nama  m-auto text-[15pt] font-Montserrat">Kotak Kosong</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="buttoncontainer w-full h-fit flex pt-5">
//               <button 
//                 className={`buttonsubmit text-white p-2 pl-5 pr-5 font-bold ${styleSubmit} rounded-full m-auto text-[16pt] transition-all ease-in-out duration-300`}
//                 onClick={() => {verification(isAbleToSubmit)}}
//                 >
//                   SUBMIT
//               </button>
//           </div>
//         </div>
//       </div>
//       <VerifySubmit active={isVerify} setAction={setAction} />
//       <Loading condition={LoadingCondition} />
//       <NavBar data={ChampID} />
      
//     </main>
//   );
// }

/*this is a mockdata*/
function Vote() {
  const route = useRouter();
  // Mock data for testing
  const ChampID = "MockUserID"; // Simulate a logged-in user
  const ChampAccess = "true";   // Simulate user having access
  
  const [LoadingCondition, setLoadingCondition] = useState(false);
  const [popupAnimation, setpopupAnimation] = useState("animate-popup opacity-100");
  const [isVerify, setIsVerify] = useState(false);
  const [Selection, setSelection] = useState("0");

  // No redirection to verification page for testing
  useEffect(() => {
    if (!ChampAccess) {
      console.log("No access - redirecting to verification");
      route.push("/verification");
    }
  }, [ChampAccess, route]);

  let styleCard1 = "text-black";
  let styleCard2 = "text-black";
  let styleSubmit = "bg-[#B3403D]";
  let isAbleToSubmit = false;

  if (Selection === "1") {
    styleCard1 = "bg-black text-white";
    styleSubmit = "bg-orange-500 hover:bg-[#B3403D]";
    isAbleToSubmit = true;
  } else if (Selection === "2") {
    styleCard2 = "bg-black text-white";
    styleSubmit = "bg-orange-500 hover:bg-[#B3403D]";
    isAbleToSubmit = true;
  }

  const verification = (allow: boolean) => {
    if (allow) {
      setIsVerify(true);
    }
  };
  
  const setAction = async (sure: boolean) => {
    if (sure) {
      console.log("Vote submitted: ", Selection);
      setLoadingCondition(true);
      setIsVerify(false);
  
      // Simulate successful submission without a backend
      setTimeout(() => {
        console.log("Vote success");
        route.push("/thankyou");
      }, 1000);
    } else {
      setIsVerify(false);
    }
  };
  
  
  return (
    <main className="flex w-[100vw] h-[100vh] bg-Orange">
      <div className="Background Hero w-full h-full m-auto overflow-auto bg-[url('/bg1.png')] bg-cover bg-center flex">
        <div className={`voteform w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] min-h-[80vh] h-fit m-auto mt-[20vh] shadow-2xl block p-5 sm:p-7 md:p-16 pt-10 bg-gradient-to-b from-white to-[#ccedba] via-white ${popupAnimation}`}>
          <div className="title block w-full text-center text-black font-Montserrat font-bold text-[13pt] sm:text-[18pt]">
            <h1>SURAT SUARA</h1>
            <h1>PEMIRA HME ITB</h1>
            <h1>KETUA HIMPUNAN HME ITB 2024/2025</h1>
          </div>
          <div className="voteform block sm:flex w-full h-fit pt-5">
            <div className="kolomkiri w-full sm:w-[50%] h-fit flex p-8">
              <div 
                className="card w-[280px] h-[370px] m-auto bg-white border-solid border-[2px] border-black hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                onClick={() => {setSelection("1")}}>
                <div className={`nomor w-full ${styleCard1} h-[15%] border-solid border-[1.5px] border-black flex`}>
                  <div className="nomor m-auto font-extrabold text-[23pt]">01</div>
                </div>
                <div className="gambar w-full h-[70%] border-solid border-[1.5px] border-black bg-[url('/bright.png')] bg-cover bg-center"></div>
                <div className={`nama ${styleCard1} w-full h-[15%] border-solid border-[1.5px] border-black flex`}>
                  <h2 className="nama m-auto text-[15pt] font-Montserrat">Bright C. Kusuma</h2>
                </div>
              </div>
            </div>
            <div className="kolomkanan w-full sm:w-[50%] h-fit flex p-8">
              <div 
                className="card w-[280px] h-[370px] m-auto bg-white border-solid border-[2px] border-black hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                onClick={() => {setSelection("2")}}>
                <div className={`nomor ${styleCard2} w-full h-[15%] border-solid border-[1.5px] border-black flex`}>
                  <div className="nomor m-auto font-extrabold text-[23pt]">02</div>
                </div>
                <div className="gambar w-full h-[70%] border-solid border-[1.5px] border-black bg-[url('/kotak.png')] bg-cover bg-center"></div>
                <div className={`nama ${styleCard2} w-full h-[15%] border-solid border-[1.5px] border-black flex`}>
                  <h2 className="nama m-auto text-[15pt] font-Montserrat">Kotak Kosong</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="buttoncontainer w-full h-fit flex pt-5">
            <button 
              className={`buttonsubmit text-white p-2 pl-5 pr-5 font-bold ${styleSubmit} rounded-full m-auto text-[16pt] transition-all ease-in-out duration-300`}
              onClick={() => {verification(isAbleToSubmit)}}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <VerifySubmit active={isVerify} setAction={setAction} />
      <Loading condition={LoadingCondition} />
      <NavBar data={ChampID} />
    </main>
  );
}


export default Vote;
