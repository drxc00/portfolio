
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import ButtonShapeTabs from "@/components/tabs";
import { Separator } from "./ui/separator";
import Link from "next/link";



export default function Header() {
    return (
        <>
            <div className="gap-2 justify-items-center justify-center text-center items-center">
                <h1 className="text-xl font-bold">
                    Neil Patrick Villanueva
                </h1>
                <p>Software/AI Developer</p>
                <div className="flex gap-2 mt-2 items-center justify-center">
                    <Link href="https://www.linkedin.com/in/neil-patrick-villanueva/" target="_blank">
                        <IoLogoLinkedin className="w-6 h-6" />
                    </Link>
                    <Link href="https://github.com/drxc00" target="_blank">
                        <FaGithub className="w-6 h-6" />
                    </Link>
                    <Link href="mailto:npdvillanueva@gmail.com" target="_blank">
                        <MdAttachEmail className="w-6 h-6" />
                    </Link>
                </div>
            </div>
            <Separator className="my-4 max-w-3xl bg-muted/90"/>
            <div className="">
                <ButtonShapeTabs />
            </div>
        </>
    )
}