import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"

  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
  <SheetTrigger className="items-center">
    <Image src="/assets/icons/menu.svg" width={24} height={24} alt="icon" className="cursor-pointer"/>
  </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
   <Image src="/assets/images/logo.svg" width={128} height={38} alt="logo"/>
   <Separator className="border border-grey-50"/>
   <NavItems/>
  </SheetContent>
</Sheet>


    </nav>
  )
}

export default MobileNav