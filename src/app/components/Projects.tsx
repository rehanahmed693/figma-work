import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <div className="mx-auto sm:w-[1170px] sm:h-[765px] w-[90%] h-full my-10">
        <p className="sm:text-[64px] text-3xl font-light text-gray-300 pb-4 sm:mb-8 mb-0">Our Projects</p>

        <div className="flex justify-between flex-wrap">
          <div className="relative">
            <Image
              className=" mb-8 sm:w-[570px] w-[90%] h-[255px]"
              src="/images/Rectangle 12.png" width={570} height={255} alt=""
            />
            <div className="absolute top-10 left-16  w-[233px] h-[128px]">
              <p className="text-[64px] sm:mb-4 mb-0 font-bold text-white">
                Sample <br></br>Project
              </p>
            </div>
            <button className="absolute top-56 left-20">View More</button>
          </div>
          <Image
              className="sm:w-[570px] mb-8 sm:mb-0 w-[90%] h-[255px]"
              src="/images/image 15.png" width={570} height={255} alt=""
            />
            <Image
              className="sm:w-[270px] mb-8 sm:mb-0 w-[90%] h-[255px]"
              src="/images/image 16.png" width={270} height={255} alt=""
            />
            <Image
              className="sm:w-[470px] mb-8 sm:mb-0 w-[90%] h-[255px]"
              src="/images/image 17.png" width={470} height={255} alt=""
            />
            <Image
              className="sm:w-[370px] mb-8 sm:mb-0 w-[90%] h-[255px]"
              src="/images/image 18.png" width={370} height={255} alt=""
            />
        </div>
        <button className="sm:ml-[81%] w-36 h-10 mt-10 sm:w-[221.81px] sm:h-[71px] bg-zinc-800 mr-10 text-white text-sm">View More <i className="ml-4 bi bi-arrow-right"></i></button>
      </div>
    </div>
  );
}
