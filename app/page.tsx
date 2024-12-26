"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/component/Loading";
import Cookies from "js-cookie";
import NavBar from "@/app/component/NavBar";
import ErrorDialogBox from "./component/ErrorDialogBox";

export default function Auth() {

  const [ErrorMessage, setErrorMessage] = useState("")
  const [ErrorStatus, setErrorStatus] = useState(false)

  // ERROR HANDLER
  const ErrorHandler = (message:string) => {
    console.log("nih pesan:", message)
    setErrorMessage(message);
    
    setErrorStatus(true);
  
    // Delay 4 detik
    setTimeout(() => {
      setErrorStatus(false);
    }, 4000); 
  }
  


  // Pengecekan Cookies
  const [cookieValue, setCookieValue] = useState<string | undefined>(
    Cookies.get("ChampID")
  );
  useEffect(() => {
    setCookieValue(Cookies.get("ChampID"));
    if (Cookies.get('AuthError')){
      ErrorHandler("AUTENTIKASI GAGAL!!")
      Cookies.remove('AuthError');
    }
  }, []);


  // Fungsi login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [LoadingCondition, setLoadingCondition] = useState(false);
  const route = useRouter();

  const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingCondition(true);

    // Struktur body request
    const requestBody = {
      username: username,
      pass: password,
      token: TOKEN,
    };

    //console.log(JSON.stringify(requestBody));

    try {
      // Melakukan POST request
      const response = await fetch(
        "https://backend-pemira-hme2023.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      // Mengubah response menjadi JSON
      const data = await response.json();

      // Mengecek apakah response memiliki atribut "ID"
      if (data.ID) {
        //console.log("Login berhasil, ID:", data.ID);
        Cookies.set("ChampID", data.ID, { expires: 1 });

        route.push("/verification");

        // Lakukan sesuatu dengan ID yang didapat
      } else {
        console.log("Login gagal, pesan error:", data.message);
        setLoadingCondition(false);
        if(data.message == "Username, password, dan token harus diisi.") {
          ErrorHandler("FORM HARUS DILENGKAPI!!")
        } else {
          ErrorHandler("LOGIN TIDAK VALID!!")
        }
        

        // Tampilkan pesan error atau lakukan sesuatu
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat melakukan request:", error);
      ErrorHandler("SERVER CONNECTION ERROR")
    }
  };

  return (
    <main className="flex w-[100vw] h-[100vh] bg-Orange">
      {/* Bagian lain dari komponen */}
      <div className="Background Hero w-full h-full m-auto overflow-hidden bg-[url('/hero.png')] bg-cover flex">
        <div className="blankspace h-full w-[calc(100%-720px)]"></div>
        <div className="loginspace h-full w-[720px] flex">
          <div className="logincontainer animate-popup m-auto block pt-10 pb-10 w-[350px] md:w-[400px] h-[500px] rounded-3xl bg-[rgba(220,255,203,0.7)] lg:bg-[rgba(220,255,203,0.0)] transition-all ease-in-out duration-1000">
            <div className="title leading-tight w-full text-center text-[46pt] font-extrabold text-black font-Montserrat">
              PEMIRA HME ITB
            </div>
            <div className="maincontent h-fit relative top-[-158px] block">
              <div className="title leading-tight w-full text-center text-[46pt] font-extrabold text-[#B3403D] font-Montserrat">
                PEMIRA HME ITB
              </div>
              <form
                onSubmit={handleSubmit}
                className="inputSection block p-4 mt-[20px]"
              >
                <div className="username w-full flex pt-2 pb-2">
                  <input
                    type="text"
                    className="username w-[85%] m-auto p-2 text-black rounded-lg font-Montserrat"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="pass w-full flex pt-2">
                  <input
                    type="password"
                    className="password w-[85%] m-auto p-2 text-black rounded-lg font-Montserrat"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="submitsection w-full flex mt-8">
                  <button
                    type="submit"
                    className="button m-auto font-bold font-Montserrat pt-2 pb-2 p-6 bg-[#D99A4E] rounded-lg"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Loading condition={LoadingCondition} />
      <NavBar data={cookieValue} />
      <ErrorDialogBox condition={ErrorStatus} errormessage={ErrorMessage}/>
    </main>
  );
}
