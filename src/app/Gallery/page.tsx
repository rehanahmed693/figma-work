import Image from "next/image"

export default function Gallery(){
    return(
        <div>
            <div className="sm:w-[1170px] w-[90%] mx-auto mt-6 ">
            <h1 className="sm:text-[64px] text-3xl font-light text-gray-400">Photo</h1>
            <p className="sm:text-[64px] text-3xl font-bold mb-10 sm:mt-6 mt-0">Gallery</p>
            <div className="w-full flex flex-col sm:flex-row flex-wrap justify-around gap-6">
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 22.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 23.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 24.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 25.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 26.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 27.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 28.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 29.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 30.png" width={210} height={260} alt=""/>
                <Image className="w-[210px] mx-auto sm:mx-0 h-[260px]" src="/images/Rectangle 31.png" width={210} height={260} alt=""/>


            </div>

            </div>
        </div>
    )
}