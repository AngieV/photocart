
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <div className='relative my-4 pb-4' >
      <div className='flex justify-start'>
        <nav className='flex items-center box-content h-26 w-screen py-1.5 border-b-[6px] border-color: rgb(110 231 183);'>
          <div><NavLink className="text-white font-bold py-2.5 px-8 no-underline" to="/">Home</NavLink></div>
          <div><NavLink className="text-white font-bold py-2.5 px-8 no-underline" to="/about">About</NavLink></div>
          <div className="dropdown h-26" dropdown-menu>
            <NavLink className="text-white font-bold py-2.5 px-8 no-underline link" to="/galleries" dropdown-menu-link>Galleries</NavLink>
            <div className="drop-menu text-white font-bold py-2.5 px-4 no-underline">
              <a href="#" className='link' dropdown-menu-link>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 items-center">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg> */}
              Angel</a>
              <div className="dropdown" dropdown-menu> <a dropdown-menu-link>Theater</a></div>
              <div className="dropdown" dropdown-menu> <a dropdown-menu-link>MDA</a></div>
            </div>  
          </div>
        </nav>
      </div>
      <div className="absolute px-3" style={{ top: -3, right:0}}>
        <button
          style={{width: "3.5rem", height: "3.5rem", position: "relative"}} 
          //variant="outline-primary"
          className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            fill="blue"  
            viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>

          {/* adds circle qty indicator with counter */}
          <div 
            className="rounded-full bg-red-600 justify-content-center align-items-center"
            style={{ 
              color: "white", 
              width: "1.3rem", 
              height: "1.3rem", 
              position: "absolute", 
              top: -6, 
              }}>
            0 
          </div>
        </button> 
      </div>
    </div>
  )
}