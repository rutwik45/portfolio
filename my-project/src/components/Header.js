import { Link } from "react-router-dom"
const Header=()=>{
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            
            <span className="ml-3 text-xl">RUTWIK BHATDE</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to='/' className="mr-5 hover:text-white">Home</Link>
            <Link to='/about' className="mr-5 hover:text-white">About</Link>
            <Link to='/resume' className="mr-5 hover:text-white">Resume</Link>
            <Link to='/project' className="mr-5 hover:text-white">Project</Link>
            <Link to='/contact' className="mr-5 hover:text-white">Contact</Link>
          </nav>
         
        </div>
      </header>
    )
}
export default Header