type VerifySubmitProps = {
  active: boolean;
  setAction: (isActive: boolean) => void;
};

function VerifySubmit({ active, setAction }: VerifySubmitProps) {
  if (!active) return null;

  return (
    <div className="main w-full h-full absolute flex bg-[url('/bgconfirm.png')] animate-fadein" >
      <div className="confirmContainer w-[300px] h-[200px] p-8 block bg-white m-auto rounded-3xl shadow-2xl animate-popup">
        <div className="title w-full h-[40%] flex">
          <h2 className="title m-auto text-black font-bold">Apakah Anda sudah yakin?</h2>
        </div>
        <div className="buttons w-full h-[60%] flex">
          <div className="left w-[50%] h-full flex">
            <h2
              className="ya p-2 text-black m-auto pl-8 pr-8 border-solid border-[3px] border-black rounded-full font-bold hover:bg-gray-400 hover:text-white cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => setAction(true)}
            >
              Ya
            </h2>
          </div>
          <div className="left w-[50%] h-full flex">
            <h2
              className="ya p-2 text-white m-auto pl-6 pr-6 border-solid border-[3px] bg-black border-black rounded-full font-bold hover:bg-gray-600 cursor-pointer transition-all ease-in-out duration-300"
              onClick={() => setAction(false)}
            >
              Tidak
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifySubmit;
