import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col relative sm:mt-10 sm:w-[1170px] sm:h-[435px] w-full h-full bg-gray-100 mx-auto mt-10 ">
        <Image className="sm:ml-16 sm:my-8 ml-10 my-2 sm:w-[270px] sm:h-[265px] w-[300px] h-[320px]" src="/images/Rectangle 8.png" width={270} height={265} alt="" />
        <img className="ml-8 my-16 sm:w-[270px] sm:h-[345px] w-[300px] h-[320px]" src="images/Rectangle 9.png" />

        <div className="mx-10 my-8">
          <h2 className="sm:text-[64px] text-3xl sm:mt-6 mt:0 text-gray-400">About</h2>
          <p className="sm:text-[16px] text-sm sm:mt-10 mt:6 sm:w-[400px] sm:h-[200px] w-[300px] h-[140px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className=" sm:w-[221.81px] sm:h-[71px] w-[140px] mt-6 h-[40px]  bg-white text-black sm:mt-2 text-sm">Read More <i className="ml-4 bi bi-arrow-right"></i></button>
        </div>
        <Image className="absolute top-64 left-16 items- my-16 w-[270px] h-[140px]" src="/images/Rectangle 10.png" width={270} height={140} alt="" />
      </div>
    </div>
  );
}
