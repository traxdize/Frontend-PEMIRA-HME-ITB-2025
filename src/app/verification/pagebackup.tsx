"use client"

import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;


// function VerificationPage() {

//   const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
//   const username = Cookies.get("ChampID")
//   const route = useRouter()

//   const [progress, setProgress] = useState('ml-[-100%]')

//   const verify = async () => {
//     // Struktur body request
//     const requestBody = {
//       username: username,
//       token: TOKEN,
//     };

//     // PENGECEKAN COOKIES TERDAFTAR ATAU TIDAK
//     try {
//       // Melakukan POST request
//       const accountresponse = await fetch(
//         "https://backend-pemira-hme2023.vercel.app/api/is_there",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestBody),
//         }
//       );
//       setProgress('ml-[-80%]')
//       // Mengubah response menjadi JSON
//       const data = await accountresponse.json();

//       // Pengecekan respon
//       if (data.error){
//         Cookies.set("AuthError", "400", { expires: 1 });
//         route.push("/");
//       }
//       if (data.data == "true"){
//         setProgress('ml-[-50%]')

//         // LAKUKAN PENGECEKAN SURAT SUARA
//         try {
//           // Melakukan POST request
//           const voteresponse = await fetch(
//             "https://backend-pemira-hme2023.vercel.app/api/is_vote",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(requestBody),
//             }
//           );

//           setProgress('ml-[-30%]')
      
//           // Mengubah response menjadi JSON
//           const votedata = await voteresponse.json();
          
//           if (votedata.error){
//             route.push("/");
//           }

//           if (votedata.data == "true"){
//             setProgress('ml-[0%]')
//             route.push('/thankyou')
//           } else if (votedata.data == "false"){
//             setProgress('ml-[0%]')
//             Cookies.set("ChampAccess", "granted, Elektro! Elektro! Elektro!", { expires: 1 });
//             route.push('/vote')
//           }
          
//         } catch (error) {
//           console.error("Terjadi kesalahan saat melakukan request:", error);
//           Cookies.set("AuthError", "400", { expires: 1 });
//           route.push("/");
//         }

//       } else if (data.data == "false") {
//         Cookies.set("AuthError", "400", { expires: 1 });
//         route.push("/");
//       }
      
//     } catch (error) {
//       console.error("Terjadi kesalahan saat melakukan pengecekan akun:", error);
//       Cookies.set("AuthError", "400", { expires: 1 });
//       route.push("/");
//     }
//   };


//   //Jalankan pengecekan
//   useEffect(() => {
//     verify();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return ( 
//     <main className="flex w-[100vw] h-[100vh] bg-Orange">
//       {/* Bagian lain dari komponen */}
//       <div className="Background Hero w-full h-full m-auto overflow-hidden bg-[url('/mainbg.png')] bg-cover bg-center flex">
//        <div className="loadingContainer w-[250px] h-fit m-auto block">
//         <div className="image">
//           <Image 
//             src={"/hmeball.png"} 
//             alt={"hmeball"}
//             width={250}
//             height={250}
//             priority>

//           </Image>
//         </div>
//         <div className="loadingbarcont w-[250px] h-[50px] flex">
//           <div className="loadingbar m-auto h-[30px] overflow-hidden w-full bg-white">
//             <div className={`progress relative ${progress} h-full w-full overflow-hidden rounded-sm transition-all ease-in-out duration-220`}>
//                <div className="loadingbox relative top-[-100px] left-[-100px] h-[500px] w-[500px] bg-gradient-to-br from-[#77684C] to-[#BA9E68] rounded-full animate-slowspin m-auto"></div>
//           </div>
//         </div>
//        </div>
//       </div>
//     </main> 
//   );
// }

//this is a mockdata
function VerificationPage() {
  const username = Cookies.get("ChampID");
  const route = useRouter();

  const [progress, setProgress] = useState("ml-[-100%]");

  const verify = async () => {
    setProgress("ml-[-80%]");

    // Simulate account check
    setTimeout(() => {
      console.log("Simulating account verification for:", username);
      const isAccountValid = true; // Change to `false` to simulate an invalid account

      if (!isAccountValid) {
        Cookies.set("AuthError", "400", { expires: 1 });
        route.push("/");
        return;
      }

      setProgress("ml-[-50%]");

      // Simulate vote check
      setTimeout(() => {
        console.log("Simulating vote verification for:", username);
        const hasVoted = false; // Change to `true` to simulate an already-cast vote

        if (hasVoted) {
          setProgress("ml-[0%]");
          route.push("/thankyou");
        } else {
          setProgress("ml-[0%]");
          Cookies.set("ChampAccess", "granted, Elektro! Elektro! Elektro!", { expires: 1 });
          route.push("/vote");
        }
      }, 1000);
    }, 1000);
  };

  // Run the simulated verification on page load
  useEffect(() => {
    verify();
  }, []);

  return (
    <main className="flex w-[100vw] h-[100vh]" style={{ background: 'linear-gradient(111.84deg, #DDC28E -1.42%, #77684C 65.2%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
      <div className="Background Hero w-full h-full m-auto overflow-hidden bg-[url('/mainbg.png')] bg-cover bg-center flex">
        <div className="loadingContainer w-fit h-fit m-auto block">
            <div className="image rounded-full overflow-hidden">
            <Image
              src={"/hmeball.png"}
              alt={"hmeball"}
              width={250}
              height={250}
              priority
            />
            </div>
            <div className="loadingbarcont w-[250px] h-[50px] flex rounded-full overflow-hidden self-center">
            <div className="loadingbar m-auto h-[30px] overflow-hidden w-full bg-color: bg-gradient-to-r from-[#F8E5C1] to-[#F8E5C1]">
              <div
                className={`progress relative ${progress} h-full w-full overflow-hidden rounded-sm transition-all ease-in-out duration-220`}
              >
                <div className="loadingbox relative top-[-100px] left-[-100px] h-[500px] w-[500px] bg-gradient-to-br from-[#77684C] to-[#BA9E68] rounded-full animate-slowspin m-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default VerificationPage;

