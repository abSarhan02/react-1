import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="py-10 text-white bg-gray-800">
       <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-6 md:w-1/3 md:mb-0">
            <div className="p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-center">LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3">
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-center">AROUND THE WEB</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="flex items-center justify-center w-10 h-10 p-2 text-white border rounded-full hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 p-2 text-white border rounded-full hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 p-2 text-white border rounded-full hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 p-2 text-white border rounded-full hover:text-gray-400">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3">
            <div className="p-6 space-y-4 text-center">
              <h3 className="mb-2 text-xl font-bold">ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='py-5 text-center text-white bg-slate-700'>
      <p>Copyright © Your Website 2021</p>
    </div>
</footer>
    
  );
}
