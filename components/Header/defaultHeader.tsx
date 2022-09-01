import React from "react";
import Image from "next/image"

const DefaultHeader: React.FC<{}> = () => {
    return (
        <header className="flex flex-row items-center justify-between p-5 bg-blue-200 lg:px-20 xl:px-40 ">
            <h1 className="">
                <a href="#">
                    <Image src=""  alt="ロゴ画像" width={200} height={50} className="bg-red-300"/>
                </a>
            </h1>
            <nav>
                <ul className="hidden font-semibold md:flex md:flex-row md:gap-x-12">
                    <li className="px-4 py-2 bg-white hover:text-white hover:bg-black"><a href="#">ABOUT</a></li>
                    <li className="px-4 py-2 bg-white hover:text-white hover:bg-black"><a href="#">Main</a></li>
                    <li className="px-4 py-2 bg-white hover:text-white hover:bg-black"><a href="#">Contact</a></li>
                </ul>
                <div className="md:hidden">
                    <p className="border-2 border-solid border-black p-2">🍔</p>
                </div>
            </nav>
        </header>
    )
}

export default DefaultHeader