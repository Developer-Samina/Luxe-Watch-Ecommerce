import React from "react";

const Detail = () => {
  return (
    <section className="relative h-screen bg-black bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Desktop background image (visible on larger screens) */}
      <div
        className="absolute inset-0 hidden md:block bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/aboutbg.png')" }}
      ></div>

      {/* Mobile background image (visible on smaller screens) */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/aboutbg1.png')" }}
      ></div>

      {/* Content Section with Two Columns */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 sm:px-8 lg:px-12">
        {/* Left: Logos in 2x2 Grid */}
        <div className="flex flex-col space-y-8 w-full md:w-1/2 items-center md:items-start">
          <div className="flex justify-center space-x-6 md:space-x-10">
            <img
              src="/Rectangle 4.png"
              alt="Rolex Logo"
              className="h-16 sm:h-20 md:h-24"
            />
            <img
              src="/Rectangle 5.png"
              alt="Patek Philippe Logo"
              className="h-16 sm:h-20 md:h-24"
            />
          </div>

          <div className="flex justify-center space-x-6 md:space-x-10">
            <img
              src="/Rectangle 7.png"
              alt="Hublot Logo"
              className="h-16 sm:h-20 md:h-24"
            />
            <img
              src="/Rectangle 6.png"
              alt="Panerai Logo"
              className="h-16 sm:h-20 md:h-24"
            />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="text-white text-center md:text-left w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            LUXE offers Precision and Elegance in Every Tick
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-xl">
            Luxe Watches embody the pinnacle of sophistication and precision in
            timekeeping. Our curated collection seamlessly marries classic
            design with modern innovation, delivering watches that not only tell
            time but also express your style and personality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;

// 'use client';
// import Image from 'next/image';

// const About = () => {
//   return (
//     <section id='about' className="relative h-screen bg-black bg-cover bg-center flex items-center justify-center overflow-hidden">
//       {/* Desktop background image (visible on larger screens) */}
//       <div
//         className="absolute inset-0 hidden md:block bg-black bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/aboutbg.png')`, // Desktop image
//           backgroundSize: 'cover',
//         }}
//       ></div>

//       {/* Mobile background image (visible on smaller screens) */}
//       <div
//         className="absolute inset-0 block md:hidden bg-cover bg-center"
//         style={{
//           backgroundImage: `url('/aboutbg1.png')`, // Mobile image
//         }}
//       ></div>

//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

//       {/* Content Section with Two Columns */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-8">

//         {/* Left: Logos in 2x2 Grid */}
//         <div className="flex flex-col space-y-8 w-full md:w-1/2 justify-center items-center md:items-start">
//           {/* Top Row: Rolex & Patek Philippe */}
//           <div className="flex justify-center space-x-6 md:space-x-10">
//             <Image src="/Rectangle 4.png" alt="Rolex Logo" width={150} height={80} className="h-16 sm:h-20 md:h-24" />
//             <Image src="/Rectangle 5.png" alt="Patek Philippe Logo" width={150} height={80} className="h-16 sm:h-20 md:h-24" />
//           </div>

//           {/* Bottom Row: Hublot & Panerai */}
//           <div className="flex justify-center space-x-6 md:space-x-10">
//             <Image src="/Rectangle 7.png" alt="Hublot Logo" width={150} height={80} className="h-16 sm:h-20 md:h-24" />
//             <Image src="/Rectangle 6.png" alt="Panerai Logo" width={150} height={80} className="h-16 sm:h-20 md:h-24" />
//           </div>
//         </div>

//         {/* Right: Text Section */}
//         <div className="text-white text-center md:text-left w-full md:w-1/2 mt-8 md:mt-0">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
//             LUXE offers Precision and Elegance in Every Tick
//           </h2>
//           <p className="text-sm md:text-base lg:text-lg max-w-xl">
//             Luxe Watches embody the pinnacle of sophistication and precision in timekeeping. Our curated collection seamlessly marries classic design with modern innovation, delivering watches that not only tell time but also express your style and personality.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
