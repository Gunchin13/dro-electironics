import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"
import Swiper from "../../../companents/client/Slider"
import { FaPhoneFlip } from "react-icons/fa6"
import { CiMail } from "react-icons/ci"
import { TbMap2 } from "react-icons/tb"
import { BsPinMap } from "react-icons/bs"

   
const Home = () => {
  

  return (
    <>
     <section className=' flex justify-between px-40 py-10 w-full '>
        <div className=' relative flex gap-3 justify-between'>
          <div>
            <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/new-s1_b9ecc0a5-4779-4351-86ac-7947dd6afc81.jpg?v=1674276677" className='w-283' alt="" />
          </div>
          <div className="absolute top-10  w-full h-full">
            <div className="text-white text-start pt-30 pl-20 ">
              <h5 className="p-3 ">-28% <span className="text-xl">New iPhone Series</span></h5>
              <h1 className="p-3 text-4xl font-bold">Up To 40% Off <br /> Premium  Smart watch</h1>
              <p className="p-3 text-white">We work with global brand and have create an <br />
                smart gadget for you to make easiest life.</p>
                <button  className="p-[15px] font-bold border-2 rounded-3xl m-3 border-none bg-[#323232]">Buy now</button>
            </div>
         </div>
          <div className="space-y-3">
            <div className=" relative ">
            <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/bnr1_grande.jpg?v=1674276675" alt="" />
            <div className="absolute text-white top-1 pt-15 pl-5">
            <span className="text-1xl">Modern mobile</span>
            <h1 className="text-2xl">New Collection</h1>
            <h4 className="text-[#E4573D] font-bold text-xl">$99.00</h4>
            </div>
            </div>
            <div className="relative">
            <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/nbnr22_grande.jpg?v=1674276675" alt="" />
            <div className="absolute text-white top-1 pt-15 pl-5">
            <span className="text-1xl">Smart Watch</span>
            <h1 className="text-2xl">Best Seller Product</h1>
            <h4 className="text-[#E4573D] font-bold text-xl">$15.00</h4>
            </div>
            </div>
          
          </div>

        </div>


        


      </section>
  
       <div className="  px-40  rounded-xl p-4 mt-6">
        <Swiper/ >
      </div>

      <section className="relative  ">
        <div className="  scale-110 transition-transform duration-700  ease-in-out  hover:scale-100">
          <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/slide61.jpg?v=1674276677" alt="" />
        </div>
        <div className="absolute top-1 left-160 pt-30 text-center">
          <span className="text-md p-3">30 NOV - 03 DEC</span>
          <h1 className="text-3xl p-3">The wait is on iPhone 14 max pro</h1>
          <h4 className="text-2xl font-bold text-[#E4573D] p-3">$999.00</h4>
          <button className="p-3 font-bold m-3 border-none rounded-2xl bg-[#E52E06] text-white">Shop Now</button>
        </div>

      </section>

      <div className="px-40 w-full ">
        <Swiper/>
      </div>

      <section className="flex justify-center gap-4">
        <div className="bg-[#f8f8f8] p-15 ">
          <h4 className=" text-xl p-2 font-bold">Great quality!</h4>
          <p className="p-2">This is a great design and I hope that we will <br /> create a website with a good signature. <br /> Team90Degree team is reactive and kind. <br /> Thanks for the help so far.</p>
          <h3 className="p-2 font-bold text-xl">David smith</h3>
          <span className="text-l p-2">Developer, Canada</span>
        </div>
        <div className="bg-[#f8f8f8] p-15 ">
          <h4 className=" text-xl p-3 font-bold">Great quality!</h4>
          <p className="p-2">This is a great design and I hope that we will <br /> create a website with a good signature. <br /> Team90Degree team is reactive and kind. <br /> Thanks for the help so far.</p>
          <h3 className="p-2 font-bold text-xl">Ashley rosa</h3>
          <span className="text-l p-2">Designer, UK</span>
        </div>
        <div className="bg-[#f8f8f8] p-15 ">
          <h4 className=" text-xl p-3 font-bold">Great quality!</h4>
          <p className="p-2">This is a great design and I hope that we will <br /> create a website with a good signature. <br /> Team90Degree team is reactive and kind. <br /> Thanks for the help so far.</p>
          <h3 className="p-2 font-bold text-xl">Luke hego</h3>
          <span className="text-l p-2">Managing, USA</span>
        </div>
       

      </section>

      <section className=" bg-[#f8f8f8]  flex mt-6 " > 
      <div class="max-w-3xl  p-30 m-30 bg-white shadow-2xl rounded-md">
      <h2 class="text-2xl font-bold text-center mb-6">Ask us anything here</h2>
      <form action="" method="POST" class="space-y-7 bg-[#f8f8f8 border-none]">
         <div class="flex flex-col md:flex-row gap-4">
         <input type="text" name="name" placeholder="Name *" required
             class="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
         <input type="email" name="email" placeholder="Email *" required
             class="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
         </div>
          <input type="text" name="subject" placeholder="Subject *" required
           class="w-full border border-gray-300 rounded-full px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500" />
         <textarea name="message" rows="4" placeholder="Message *" required
              class="w-full border border-orange-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          <div class="text-center">
            <button type="submit"
              class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition">
            Send message
            </button>
          </div>
        </form>
      </div>
      <div className="p-50 pl-10">
      <div className="p-6">
        <div className="flex ">
        <div className="pt-1 text-5xl p-3 text-[#e52e05]">
        <FaPhoneFlip />
        </div>
        <div className="div">
          <h1 className="text-5xl p-2 font-bold">
            <a href="tel:+91-7654321">+91-7654321</a>
          </h1>
        </div>
        </div>
      </div>
      <div className="flex p-6">
      <div className="text-7xl pt-9  text-[#e52e05]">
      <CiMail />
      </div>
      <div className="p-5">
        <h1 className="text-4xl  p-3 pt-9">
          <a href="mailto:info@drou.com">info@drou.com</a>
        </h1>
      </div>
      </div>
      <div className="p-5 flex">
        <div className="pt-5 pl-4 text-6xl text-[#e52e05]"><BsPinMap />        </div>
        <div className="div">
        <h3 className="text-3xl p-3 text-center">  1259 Freedom, New York United States </h3>
        </div>
      </div>
      </div>
      </section>  


      
  
  
    </>
  )
}

export default Home
