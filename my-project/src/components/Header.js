import { Link } from "react-router-dom"
const Header=()=>{
    return (
        <div class="flex justify-between border-solid border-2 from-transparent border-sky-500 shadow-lg w-[100%] bg-zinc-700 text-white brightness-125">
            
            <span className="text-2xl font-bold mx-5 my-5 tracking-tight ">
                RUTWIK BHATDE
            </span>
            <div class="flex justify-around">
                <nav class="flex justify-around">
                    <Link to='/' class="mx-5 my-5 text-lg font-bold hover:text-blue-600/100">Home</Link>
                    <Link to="/about" class="mx-5 my-5 text-lg font-bold hover:text-blue-600/100">About</Link>
                    <Link to="/resume"  class="mx-5 my-5 text-lg font-bold hover:text-blue-600/100">Resume</Link>
                    <Link to="/project"  class="mx-5 my-5 text-lg font-bold hover:text-blue-600/100">Project</Link>
                    <Link to="/contact"  class="mx-5 my-5 text-lg font-bold hover:text-blue-600/100">Contact</Link>
                </nav>
            </div>
            
        </div>
    )
}
export default Header