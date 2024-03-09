// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import React from "react";

// const sideBar = () => {
//   //   const [users, setUsers] = useState([]);

//   //   useEffect(() => {
//   //     fetchUsers();
//   //   }, []);

//   //   const fetchUsers = async () => {
//   //     try {
//   //       const response = await fetch('http://kursach4/src/api/getUsers.php');
//   //       const data = await response.json();
//   //       setUsers(data);
//   //     } catch (error) {
//   //       console.error('Error fetching users:', error);
//   //     }
//   //   };
//   const [nav, setNav] = useState(false);

//   return (
//     <div>
//       <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
//         {/* Left side */}
//         <div className="flex items-center">
//           <div onClick={() => setNav(!nav)} className="cursor-pointer">
//             <svg
//               width="19"
//               height="15"
//               viewBox="0 0 19 15"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H18C18.5523 0.5 19 0.947715 19 1.5C19 2.05228 18.5523 2.5 18 2.5H1C0.447715 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H18C18.5523 6.5 19 6.94772 19 7.5C19 8.05228 18.5523 8.5 18 8.5H1C0.447715 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447715 14.5 1 14.5H18C18.5523 14.5 19 14.0523 19 13.5C19 12.9477 18.5523 12.5 18 12.5H1Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
//             Best <span className="font-bold">Eats</span>
//           </h1>
//           <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
//             <p className="bg-black text-white rounded-full p-2">Delivery</p>
//             <p className="p-2">Pickup</p>
//           </div>
//         </div>

//         {/* Search Input */}
//         <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
//           <svg
//             width="19"
//             height="15"
//             viewBox="0 0 19 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H18C18.5523 0.5 19 0.947715 19 1.5C19 2.05228 18.5523 2.5 18 2.5H1C0.447715 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H18C18.5523 6.5 19 6.94772 19 7.5C19 8.05228 18.5523 8.5 18 8.5H1C0.447715 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447715 14.5 1 14.5H18C18.5523 14.5 19 14.0523 19 13.5C19 12.9477 18.5523 12.5 18 12.5H1Z"
//               fill="white"
//             />
//           </svg>
//           <input
//             className="bg-transparent p-2 w-full focus:outline-none"
//             type="text"
//             placeholder="Search foods"
//           />
//         </div>
//         {/* Cart button */}
//         <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
//           <svg
//             width="19"
//             height="15"
//             viewBox="0 0 19 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H18C18.5523 0.5 19 0.947715 19 1.5C19 2.05228 18.5523 2.5 18 2.5H1C0.447715 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H18C18.5523 6.5 19 6.94772 19 7.5C19 8.05228 18.5523 8.5 18 8.5H1C0.447715 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447715 14.5 1 14.5H18C18.5523 14.5 19 14.0523 19 13.5C19 12.9477 18.5523 12.5 18 12.5H1Z"
//               fill="white"
//             />
//           </svg>{" "}
//           Cart
//         </button>

//         {/* Mobile Menu */}
//         {/* Overlay */}
//         {nav ? (
//           <div className="fixed w-full h-screen z-10 top-0 left-0"></div>
//         ) : (
//           ""
//         )}

//         {/* Side drawer menu */}
//         <div
//           className={
//             nav
//               ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
//               : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
//           }
//         >
//           <svg
//             onClick={() => setNav(!nav)}
//             width="19"
//             height="15"
//             viewBox="0 0 19 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H18C18.5523 0.5 19 0.947715 19 1.5C19 2.05228 18.5523 2.5 18 2.5H1C0.447715 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H18C18.5523 6.5 19 6.94772 19 7.5C19 8.05228 18.5523 8.5 18 8.5H1C0.447715 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447715 14.5 1 14.5H18C18.5523 14.5 19 14.0523 19 13.5C19 12.9477 18.5523 12.5 18 12.5H1Z"
//               fill="white"
//             />
//           </svg>

//           <h2 className="text-2xl p-4">
//             Best <span className="font-bold">Eats</span>
//           </h2>
//           <nav>
//             <ul className="flex flex-col p-4 text-gray-800">
              
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default sideBar;
