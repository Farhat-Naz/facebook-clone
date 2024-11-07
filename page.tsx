import react from 'react';
import Image from "next/image";

const Home=()=>{
  return(
    <div className="min-h-screen bg-gray-100">
      < div className="container mt-20 flex mx-auto item-center justify-center">
      <div className="w-1/2 mx-16">
        <Image  className="flex flex-col" src={"/images/facebook.jpg"} alt="logo" width={60} height={60} ></Image>
        <p className="text-3xl mx-15">Facebook helps you connect and share with the people in your life.</p>
        </div>
      <div className="flex flex-col bg-white p-8 mt-14 rounded-lg w-1/4 border ">
        <input className="px-4 h-12 my-2 border-2 border-gray-100 rounded-lg" type="text" placeholder="Email address or phonenumber"></input>
        
        <input className="px-4 h-12 my-2 border-2 border-gray-100 rounded-lg" type="password" placeholder="password"></input>
        <button className="btn bg-blue-400  hover:bg-blue-700 text-white my-2 py-3 rounded-lg font-bold text-xl">Log In</button>
        <span className=" text-blue-600 text-center text-sm my-2">Forgotten Password?</span>
        <hr/>
        <button className="btn bg-green-400  hover:bg-green-700 text-white my-2 px-4 mx-auto py-3 rounded-lg font-bold w-fit text-xl">Create New Account</button>
      
        

      
      </div>

      </div>
   
      

            


          
      </div>

    

    
    
      
      



  );
}

export default Home
