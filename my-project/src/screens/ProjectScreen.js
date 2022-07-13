import img1 from '../images/project.png'
import { Image } from '@chakra-ui/react'
const ProjectScreen=()=>{
    return(
        <div className='bg-zinc-700 text-white my-200 shadow-2xl shadow-cyan-500/50'>
            
            <h1  className="text-3xl font-bold mx-5 my-5 ">Project</h1>
            
            <div className='md:flex flex-col lg:grid grid-cols-2 bg-slate-100 my-200 shadow-2xl '>
                <div className='ml-10 overflow-hidden rounded-md my-5'>
                    <Image src={img1}  width='600px'/>
                </div>
                <div className='flex flex-col overflow-hidden rounded-md'>
                    <a href='https://rststore3.herokuapp.com/' target='_blank'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 w-[300px] mx-14'>View Site</button>
                    </a>
                    <a href='https://github.com/rutwik45/rststore' target='_blank'>
                        <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[300px] my-5 mx-14'>View Code</button>
                    </a>
                    
                   
                </div>
                
            </div>
        </div>
        
    )
}
export default ProjectScreen