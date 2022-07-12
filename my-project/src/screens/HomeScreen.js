const HomeScreen=()=>{
    return(
        <>

            <div className="w-[100%]  bg-zinc-700 text-white my-200 shadow-2xl shadow-cyan-500/50 
            brightness-125" >
                <p className="text-3xl font-bold  my-10 text-center py-2">
                 Hi I am<br/><br/> <span className="text-4xl">Rutwik Bhatde</span><br/><br/> <span>Full-Stack Developer</span><br/>
                 <br/> 
                </p>
                <p className="text-2xl text-center">To work with maximum potential in a challenging  , dynamic and professional
Environment  ,  with an opportunity of working with diverse group of people
Where I am utilize and my knowledge and enhance my professional skills
With learning experience for career growth and fulfilling organizational
Goals
                </p>
                <br/>
                <br/>
                <br/>
                
            </div>
            <h3 className="text-3xl text-center font-bold my-5 ">
                    My Skills
                </h3>
            <div className=" grid grid-cols-2 text-center my-10 align-center  bg-zinc-700 text-white">
                
                <div className="border-solid border-2 border-sky-500 ml-3 overflow-hidden rounded-md shadow-2xl
                shadow-cyan-500/50 brightness-125">
                <h2 className="text-3xl text-center font-bold my-2">
                    Frontend Development
                </h2>
                <ul class="list-disc my-1" >
                        <li class="my-2 font-bold">Reactjs</li>
                        <li class="my-2 font-bold">Redux</li>
                        <li class="my-2 font-bold">Javascript</li>
                        <li class="my-2 font-bold">HTML</li>
                        <li class="my-2 font-bold">CSS</li>
                       
                </ul>

                </div>
                <div className="border-solid border-2 border-sky-500 ml-3 overflow-hidden rounded-md shadow-2xl shadow-cyan-500/50
                brightness-125" >
                    <h2 className="text-3xl text-center font-bold my-2">
                    Backend Development
                    </h2>
                    <ul  class="list-disc">
                        <li class="my-2 font-bold">Nodejs</li>
                        <li class="my-2 font-bold">MongoDB</li>
                        <li class="my-2 font-bold">Express Js</li>
                        <li class="my-2 font-bold">Mongoose</li>
                       
                       
                </ul>

                </div>
                
                
               
            
            </div>
           
        </>
       
        
      
    )
}
export default HomeScreen