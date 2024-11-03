import Image from "next/image"

export default function Contact(){
    return(
        <div>
            <div className="mx-auto sm:w-[1170px] w-[90%] h-full sm:h-[603px] my-10" >
                <p className="text-[64px] font-light text-slate-300">Contact Us</p>
                <div className="flex justify-between">
                <form>
                    <input className="sm:w-[391px] w-[90%] text-[14px] p-4 h-[45px] mb-3 bg-gray-200" type="text" placeholder="Name"/>
                    <input className="sm:w-[391px] w-[90%] text-[14px] p-4 h-[45px] mb-3 bg-gray-200" type="text" placeholder="Phone Number"/>
                    <input className="sm:w-[391px] w-[90%] text-[14px] p-4 h-[45px] mb-3 bg-gray-200" type="text" placeholder="E-mail"/>
                    <input className="sm:w-[391px] w-[90%] text-[14px] p-4 h-[45px] mb-3 bg-gray-200" type="text" placeholder="Interested in"/>
                    <textarea className="sm:w-[391px] w-[90%] text-[14px] p-4 h-[145px] bg-gray-200"  placeholder="Message"></textarea>
                </form>

                <Image className="sm:w-[749px] sm:h-[369px] hidden sm:block" src="/images/image 12.png" width={749} height={369} alt=""/>

                </div>
                <button className="sm:ml-[81%] mt-14 sm:w-[221.81px] w-36 h-10 sm:h-[71px] mr-10 bg-zinc-800 text-white text-sm">View More <i className="ml-4 bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}