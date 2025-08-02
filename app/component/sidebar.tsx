import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const Sidebar=({isOpen,setIsOpen}:
    {
        isOpen:boolean,
        setIsOpen:(value:boolean)=>void
    }
)=>{
    const sideBarRef=useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        document.addEventListener('mousedown',(event:MouseEvent)=>{
             const clickedElement=event.target as Node 
             const menuIcon=document.querySelector("[data-menu-icon]");
             if(menuIcon?.contains(clickedElement)) return
            
            if(sideBarRef.current &&!sideBarRef.current.contains(clickedElement) ){
                setIsOpen(false);
            }
        })
    },[setIsOpen])
    
    return(
        <div ref={sideBarRef} className={twMerge("fixed top-0 right-0  z-[50] bg-[#031557] h-full w-[250px] transform transition-transform duration-300 ease-in-out",
                isOpen ?  "translate-x-0" : "translate-x-full"
        

        )}>
            <div className="flex flex-col gap-[25px] p-[20px] mt-[60px] text-[18px]">
              <Link href='/' className="hover:text-primary transition-colors text-white">
                              Home
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors text-white">
                            Features
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors text-white">
                         How it works
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors text-white">
                         Resources
                    </Link>
                    <Link href='/' className="hover:text-primary transition-colors text-white">
                         Pricing
                    </Link>
                    
                    
                </div>
        </div>
    )
}
export default Sidebar