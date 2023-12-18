import Image from "next/image";
import Login from "../components/Login";

export default function Home() {
  return <div className="flex
  min-h-screen flex-col justify-center py-12 sm:px-16 lg:px-8 bg-gray-100">
    <div className=" sm:mx-auto sm:w-full sm:max-w-screen-md">
        <Image src={'/logo2.png'} alt="logo" width={'68'} height='68' className="mx-auto w-auto"/>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div> 
        
        <Login/>     
        </div>;
}
