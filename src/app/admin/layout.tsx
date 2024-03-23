/* eslint-disable react-hooks/rules-of-hooks */
// "use client";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Loading from "@/components/Loading/Loading";
import Sidebar from "@/components/Admin/Sidebar";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const page:React.FC<{children:React.ReactNode}> = ({children}): React.JSX.Element => {
    // const router: AppRouterInstance = useRouter();
    // const [loading, setLoading] = useState<boolean>(true);
    // useEffect(() => {
    //     // if (!localStorage.getItem("accessToken")) {
    //     //     router.push("login");
    //     //     return;
    //     // }
    //     setLoading(false);
    // }, [router]);
    // return 
    // loading ? (
    //     <Loading/>
    // ) : 
    return (
        <section className={`container mx-auto flex-1 flex md:gap-0`}>
            <Sidebar/>
            <div className="flex-grow bg-gray-50 bg-opacity-50 p-2">
             {children}
            </div>
        </section>
    );
};

export default page;
