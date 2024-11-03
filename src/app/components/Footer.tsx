import Image from "next/image";

export default function Footer() {
  return (
    <div className="sm:h-[470px] h-full bg-zinc-800 mt-32 flex sm:flex-row flex-col justify-evenly">
      <div>
        <Image className="mt-24 ml-28 sm:ml-0 w-[145px] h-[94px]" src="/images/Group 11 1.png" width={145} height={94} alt="" />
      </div>
      <div className="flex sm:flex-row flex-col items-center sm:gap-32 gap-6">
        <ul className="text-[14px] font-medium text-white sm:mt-24 mt-10">
          <li className="mb-6 text-[16px] font-bold">Main</li>
          <li className="mb-6">Gallery</li>
          <li className="mb-6">Projects</li>
          <li className="mb-6">Certifications</li>
          <li className="mb-6">Contacts</li>
        </ul>
        <div className="sm:mt-24 mt-10 text-white">
          <p className="mb-6 text-[16px] font-bold text-white">Contacts</p>
            <div className="flex mb-6 gap-3">
            <i className="bi bi-geo-alt"></i>
            <p>1234 Sample Street<br></br>Austin Texax 78704</p>
            </div>

            <div className="flex mb-6 gap-3">
            <i className="bi bi-telephone"></i>
            <p>512.333.2222</p>
            </div>

            <div className="flex mb-6 gap-3">
            <i className="bi bi-envelope"></i>
            <p>sampleemail@gmail.com</p>
            </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <p className="text-[16px] font-bold text-white">Social Media</p>
          <div className="flex gap-8 mt-4 text-white">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-pinterest"></i>
          </div>
        </div>
      </div>
    
    </div>
  );
}
