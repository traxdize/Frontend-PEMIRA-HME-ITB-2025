interface LoadingProps {
  condition: boolean;
}

function Loading({ condition }: LoadingProps) {
  let mainStyle = "backdrop-blur-0 hidden"
  let popup = "mt-[-100%]"

  if (condition){
    mainStyle = "backdrop-blur-sm"
    popup =""
  } else {
    mainStyle = "backdrop-blur-0 hidden"
    popup = "mt-[-100%]"
  }

  return ( 
  <div className={`Loading w-full h-full absolute top-0 ${mainStyle} flex transition-all ease-in-out duration-700 overflow-hidden`}>
    <div className={`popupcontainer ${popup} p-2 h-[60px] w-[230px] bg-white rounded-3xl m-auto md:scale-125 overflow-hidden flex shadow-2xl`}>
      <div className="LoadingAniContainer h-full aspect-square bg-gradient-to-br from-Orange to-orange-800 p-1 rounded-full animate-spin">
        <div className="inner w-full h-full bg-white rounded-full overflow-hidden">
        </div>
      </div>
      <div className="textcontainer h-full w-[calc(100%-45px)] flex">
        <h2 className="text text-[#B3403D] m-auto font-bold text-[18pt] w-[100px]">LOADING</h2>
      </div>
    </div>
    
  </div> 
  );
}

export default Loading;