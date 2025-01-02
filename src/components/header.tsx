
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import ButtonShapeTabs from "@/components/tabs";
import { Separator } from "./ui/separator";
import Link from "next/link";



export default function Header() {
    return (
        <>
            <div className="w-full max-w-2xl gap-2 flex justify-between items-center border border-border rounded-md px-6 py-4">
                <div>
                    <h1 className=" font-medium">
                        Neil Patrick Villanueva
                    </h1>
                    <p className="text-muted-foreground text-sm">Software/AI Developer</p>
                </div>
                <div className="flex gap-2 mt-2 items-center justify-center">
                    <Link href="https://www.linkedin.com/in/neil-patrick-villanueva/" target="_blank">
                        <IoLogoLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://github.com/drxc00" target="_blank">
                        <FaGithub className="w-5 h-5" />
                    </Link>
                    <Link href="mailto:npdvillanueva@gmail.com" target="_blank">
                        <MdAttachEmail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            {/* <Separator className="my-4 max-w-3xl" /> */}
            <div className="mt-4">
                <ButtonShapeTabs />
            </div>
        </>
    )
}