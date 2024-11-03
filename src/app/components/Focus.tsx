import Image from "next/image";

export default function Focus() {
  return (
    <div className="sm:w-[1170px] sm:h-[290px] w-[90%] h-full mx-auto my-20">
        <h1 className="sm:text-[64px] text-3xl font-light text-gray-300 sm:mb-8 mb-0">Main Focus/Main Statement</h1>
      <div className="flex sm:flex-row flex-col gap-2">
      <div className="sm:w-[570px] sm:h-[144px] w-full h-full flex justify-center gap-4 mt-6">
          <Image className="sm:w-[120px] sm:h-[140px] w-[100px] h-[120px]" src="/images/1.png" width={120} height={140} alt=""/>
          <p className="sm:text-[22px] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat, magna mauris porttitor
          tortor, a auctor est felis ut nisl.
          </p>
        </div>

        <div className="sm:w-[570px] sm:h-[144px] w-full h-full flex justify-center gap-4 mt-6">
        <Image className="sm:w-[120px] sm:h-[140px] w-[100px] h-[120px]" src="/images/2.png" width={120} height={140} alt=""/>
          <p className="sm:text-[22px] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat, magna mauris porttitor
          tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </div>
  );
}
