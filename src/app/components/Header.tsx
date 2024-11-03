import Link from "next/link"
import Image from "next/image"


export default function Header(){
    return(
        <div className="flex justify-around items-center w-full h-[102px]">
            <div className="">
             <Image className="w-[80px] h-[50px]" src="/images/logo.png" width={80} height={50} alt=""/>   
            </div>
            <ul className="sm:flex text-[12px] gap-14 hidden tracking-widest">
                <Link href="/"><li>MAIN</li></Link>
                <Link href="/Gallery"><li>GALLERY</li></Link>
                <Link href=""><li>PROJECTS</li></Link>
                <Link href=""><li>CERTIFIATIONS</li></Link>
                <Link href=""><li>CONTACTS</li></Link>
            </ul>
        </div>
    )
}