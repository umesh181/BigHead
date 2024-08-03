import { ModeToggle } from "@/components/ui/mode-toggle"
import Image from "next/image"
import Link from "next/link"
import { HeaderActions } from "./header-actions"

export function Header(){
    return <div className="bg-zinc-950  py-1 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center pl-3">
        <Link href="/dashboard" className="flex items-center gap-3 text-2xl font-bold tracking-widest">
            <Image src="/brain.png" width={50} height={50} alt={"logo"} />
            BigHead
        </Link>

        <div className="flex gap-6 items-center">
        <ModeToggle/>
        <HeaderActions/>
        </div>
        
      </div>
    </div>
}