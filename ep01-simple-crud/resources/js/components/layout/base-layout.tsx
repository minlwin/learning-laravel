import { Link, Head } from "@inertiajs/react";
import React from "react";

export default function BaseLayout({title, children} : {title:string, children : React.ReactNode}) {
    return (
        <>
            <Head title={title} />
                      
            <div className="">
                <NavBar />

                <main className="px-16 py-6">
                    {children}
                </main>
            </div>
        </>
    )
}

function NavBar() {
    return (
        <nav className="bg-gray-300 px-16 py-4 flex justify-between items-center">
            <h3 className="font-semibold">Laravel CRUD</h3>

            <div className="flex justify-end gap-4">
                <Link href={"/regions"}>Regions</Link>
                <Link href={"/townships"}>Townships</Link>
            </div>
        </nav>
    )
}