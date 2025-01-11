  "use client";
  import { useState, useEffect } from "react";
  import { useRouter } from "next/navigation";
  import Loading from "@/app/component/Loading";
  import Cookies from "js-cookie";
  import NavBar from "@/app/component/NavBar";
  import ErrorDialogBox from "./component/ErrorDialogBox";
  import { authService } from "./services/api.services";

  export default function Auth() {
    const [errorMessage, setErrorMessage] = useState("");
    const [errorStatus, setErrorStatus] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loadingCondition, setLoadingCondition] = useState(false);
    const [cookieValue, setCookieValue] = useState<string | undefined>(
      Cookies.get("ChampID")
    );
    
    const router = useRouter();

    useEffect(() => {
      setCookieValue(Cookies.get("ChampID"));
      if (Cookies.get('AuthError')) {
        handleError("AUTENTIKASI GAGAL!!");
        Cookies.remove('AuthError');
      }
    }, []);

    const handleError = (message: string) => {
      setErrorMessage(message);
      setErrorStatus(true);
      setTimeout(() => {
        setErrorStatus(false);
      }, 4000);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoadingCondition(true);

      try {
        // Check if all fields are filled
        if (!username || !password) {
          handleError("FORM HARUS DILENGKAPI!!");
          setLoadingCondition(false);
          return;
        }

        // Attempt login
        const response = await authService.login(username, password);

        if (response.ID) {
          // Successful login
          Cookies.set("ChampID", response.ID, { expires: 1 });
          router.push("/verification");
        } else {
          // Failed login
          handleError("LOGIN TIDAK VALID!!");
        }
      } catch (error) {
        handleError("SERVER CONNECTION ERROR");
      } finally {
        setLoadingCondition(false);
      }
    };

    return (
      <main className="flex w-[100vw] h-[100vh]" style={{ background: 'linear-gradient(111.84deg, #DDC28E -1.42%, #77684C 65.2%)', boxShadow: '0px 4px 4px 0px #00000040' }}>
        <div className="Background Hero w-full h-full m-auto overflow-hidden bg-[url('/mainbg.png')] bg-cover flex">
          <div className="blankspace h-full w-[calc(100%-720px)]"/>
          <div className="loginspace h-full w-[720px] flex">
            <div className="logincontainer animate-popup m-auto block pt-12 pb-18 w-[350px] md:w-[500px] h-[400px] rounded-3xl transition-all ease-in-out duration-6000">
              <div className="title leading-tight w-full text-center text-[60pt] font-extrabold text-[#F8E5C1] font-Algerian">
                PEMIRA HME ITB
              </div>
              <div className="maincontent h-fit relative top-[-205px] block">
                <div className="title leading-tight w-full text-center text-[60pt] font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#221D11] via-[#221D11] to-[#A38855] font-Algerian">
                  PEMIRA HME ITB
                </div>
                <form onSubmit={handleSubmit} className="inputSection block p-4 mt-[20px]">
                  <div className="username w-full flex pt-2 pb-2">
                    <input
                      type="text"
                      className="username w-[85%] m-auto p-2 text-black rounded-lg font-['Abhaya_Libre_ExtraBold']"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="pass w-full flex pt-2">
                    <input
                      type="password"
                      className="password w-[85%] m-auto p-2 text-black rounded-lg font-['Abhaya_Libre_ExtraBold']"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="submitsection w-full flex mt-8">
                    <button
                      type="submit"
                      className="button m-auto ButtonText pt-2 pb-2 px-6 text-black rounded-lg bg-[#B3403D] hover:bg-[#8A2C2A] transition-colors duration-300"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Loading condition={loadingCondition} />
        <NavBar data={cookieValue} />  
        <ErrorDialogBox condition={errorStatus} errormessage={errorMessage}/>
      </main>
    );
  }