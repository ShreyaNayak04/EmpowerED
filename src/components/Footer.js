import React from 'react'

function Footer() {
  return (
    <div>
       <div>
            
            <footer className="bg-white dark:bg-gray-500">
              <div className="container px-6 py-8 mx-auto">
             <div className="text-center">
                    <a href="#" className="text-3xl font-bold dark:text-cyan-400 hover:text-gray-700 dark:hover:text-gray-300  lg-text-3xl tracking-widest">EmpowerED.</a>
                    <div className="flex flex-wrap justify-center mt-5 -mx-4">
                    <a href="#" className="mx-4 text-gray-900 transition-colors duration-300  hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-semibold " aria-label="Reddit"> Home </a>
      
                    <a href="#" className="mx-4 text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-semibold" aria-label="Reddit"> About </a>
      
                    <a href="#" className="mx-4 text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-semibold" aria-label="Reddit"> Contact Us </a>
      
                  
                  </div>
             </div>
             <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
             <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                  <p className="text-gray-500 dark:text-gray-200">© Copyright 2022. All Rights Reserved.</p>
                  </div>
                  </div>
                  </footer>
             
             
            
              </div>
    </div>
  )
}

export default Footer
