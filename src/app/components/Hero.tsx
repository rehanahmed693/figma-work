import Image from "next/image"
export default function Hero(){
    return(
        <div className="flex sm:flex-row flex-col justify-center sm:mt-8 mt-3">
            <div className="sm:mt-64 mt-4 mr-14">
                
                <h1 className="sm:text-[64px] text-2xl font-light text-gray-400">PROJECT</h1>
                <p className="sm:text-[64px] text-2xl font-bold sm:mt-6 mt-0">Lorum</p>
            </div>
            <div className="sm:w-[770px] sm:h-[829px] w-full h-[400px]">
                <Image className="relative sm:w-[770px] sm:h-[829px] w-full h-[400px]" src="/images/hero.png" width={770} height={829} alt=""/>
                <button className="absolute top-3/4 sm:mt-96 mt-2 sm:w-[221.81px] sm:h-[71px] w-32 h-10 bg-zinc-800 mr-10 text-white text-sm">View More <i className="ml-4 bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}