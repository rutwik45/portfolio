import {Icon} from '@chakra-ui/react'
import {AiFillMail,AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
const ContactScreen=()=>{
    return (
       <div className='bg-zinc-700 text-white my-200 shadow-2xl shadow-cyan-500/50'>
            <header className="text-3xl font-bold mx-5 my-5 ">Contact Me</header>
            <div className="grid  grid-cols-3 text-center my-10 align-center bg-slate-100">
            <div className='my-5'>
                <h1 className="text-2xl font-bold mx-5 my-5 text-black">Email</h1>
                <h2 className='text-black'><Icon as={AiFillMail}/>rutwikbhatde@gmail.com</h2>
                
            </div>
        <div className='my-5'>
               <h1 className="text-2xl font-bold mx-5 my-5 text-black ">Contact Number</h1>
               <h2 className='text-black'><Icon as={BsFillTelephoneFill}/> 9511227804</h2>
            </div>
            <div className='my-5'>
                <h1 className="text-2xl font-bold mx-5 my-5 text-black ">Address</h1>
                <p className='text-black'><Icon as={AiFillHome}/> 301 Sai Tower 2 Rajaram Chowk OPP Shivesh Park , 421306</p>
            </div>

        </div>
       </div>
        
    )
}
export default ContactScreen