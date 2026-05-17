// import { motion } from "framer-motion";

// // WEBSITE PROJECT IMAGES
// import estate from "../assets/estate.jpg";
// import gym from "../assets/gym.jpg";
// import hotel from "../assets/hotel.jpg";

// // DATA ENTRY PROJECT IMAGES
// import cleaningBefore from "../assets/cleaning-before.png";
// import cleaningAfter from "../assets/cleaning-after.png";

// import excelBefore from "../assets/excel-before.png";
// import excelAfter from "../assets/excel-after.png";

// import pdfBefore from "../assets/pdf-before.png";
// import pdfAfter from "../assets/pdf-after.png";

// export default function Projects() {
//   // WEBSITE PROJECTS

//   const websiteProjects = [
//     {
//       title: "Modern Real Estate Website",

//       desc:
//         "Animated and fully responsive real estate website built using React JS and Tailwind CSS with premium UI design.",

//       image: estate,

//       tools: ["React JS", "Tailwind CSS", "Framer Motion"],

//       link: "https://nikhilproject45.github.io/realstate/",
//     },

//     {
//       title: "Gym Website",

//       desc:
//         "Modern gym and fitness website with smooth animations, responsive layout and attractive user interface.",

//       image: gym,

//       tools: ["React JS", "CSS", "Responsive Design"],

//       link: "https://nikhilproject45.github.io/gymxpert/",
//     },

//     {
//       title: "Hotel Booking Website",

//       desc:
//         "Professional hotel booking website with modern design, room sections and smooth UI interactions.",

//       image: hotel,

//       tools: ["React JS", "Tailwind CSS", "Animation"],

//       link: "https://nikhilproject45.github.io/hotellux/",
//     },
//   ];

//   // DATA ENTRY PROJECTS

//   const dataProjects = [
//     {
//       title: "Data Cleaning Project",

//       before: cleaningBefore,

//       after: cleaningAfter,

//       desc:
//         "Cleaned messy Excel data by removing duplicates, formatting tables and improving overall data structure professionally.",

//       tools: [
//         "Microsoft Excel",
//         "Data Cleaning",
//         "Formatting",
//         "Conditional Formatting",
//       ],
//     },

//     {
//       title: "Excel Data Management",

//       before: excelBefore,

//       after: excelAfter,

//       desc:
//         "Managed and organized large Excel datasets with formulas, sorting, filtering and professional formatting.",

//       tools: [
//         "Excel",
//         "VLOOKUP",
//         "Pivot Table",
//         "Data Formatting",
//       ],
//     },

//     {
//       title: "PDF to Excel Conversion",

//       before: pdfBefore,

//       after: pdfAfter,

//       desc:
//         "Converted PDF files into editable Excel sheets with accurate formatting and structured data organization.",

//       tools: [
//         "PDF Conversion",
//         "Excel",
//         "Typing",
//         "Data Entry",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gradient-to-b from-black via-slate-950 to-black"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* MAIN HEADING */}

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="
//             text-5xl
//             font-bold
//             text-center
//             text-cyan-400
//             mb-20
//           "
//         >
//           My Projects
//         </motion.h2>

//         {/* WEBSITE PROJECTS */}

//         <motion.h3
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="
//             text-3xl
//             font-bold
//             text-white
//             mb-10
//           "
//         >
//           Frontend Development Projects
//         </motion.h3>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
//           {websiteProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//               }}
//               className="
//                 bg-slate-900/70
//                 border
//                 border-white/10
//                 rounded-3xl
//                 overflow-hidden
//                 backdrop-blur-xl
//                 shadow-xl
//               "
//             >
//               {/* IMAGE */}

//               <div className="overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="
//                     w-full
//                     h-60
//                     object-cover
//                     hover:scale-110
//                     transition-transform
//                     duration-700
//                   "
//                 />
//               </div>

//               {/* CONTENT */}

//               <div className="p-6">
//                 <h4 className="text-2xl font-bold text-white mb-3">
//                   {project.title}
//                 </h4>

//                 <p className="text-gray-300 leading-relaxed mb-5">
//                   {project.desc}
//                 </p>

//                 {/* TOOLS */}

//                 <div className="flex flex-wrap gap-3 mb-6">
//                   {project.tools.map((tool, i) => (
//                     <span
//                       key={i}
//                       className="
//                         px-3
//                         py-1
//                         bg-cyan-500/20
//                         border
//                         border-cyan-400/30
//                         rounded-full
//                         text-sm
//                         text-cyan-300
//                       "
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>

//                 {/* BUTTON */}

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-block
//                     bg-cyan-500
//                     hover:bg-cyan-600
//                     px-5
//                     py-3
//                     rounded-xl
//                     font-medium
//                     transition-all
//                     duration-300
//                     hover:scale-105
//                   "
//                 >
//                   Live Preview
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* DATA ENTRY SECTION */}

//         <motion.h3
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="
//             text-3xl
//             font-bold
//             text-white
//             mb-12
//           "
//         >
//           Data Entry & Excel Projects
//         </motion.h3>

//         <div className="space-y-16">
//           {dataProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="
//                 bg-slate-900/70
//                 border
//                 border-white/10
//                 rounded-3xl
//                 p-8
//                 backdrop-blur-xl
//               "
//             >
//               {/* TITLE */}

//               <h3 className="text-3xl font-bold text-cyan-400 mb-8">
//                 {project.title}
//               </h3>

//               {/* BEFORE AFTER IMAGES */}

//               <div className="grid md:grid-cols-2 gap-8 mb-8">
//                 {/* BEFORE */}

//                 <div>
//                   <h4 className="text-xl font-semibold text-red-400 mb-4">
//                     Before
//                   </h4>

//                   <div className="overflow-hidden rounded-2xl">
//                     <img
//                       src={project.before}
//                       alt="before"
//                       className="
//                         w-full
//                         h-72
//                         object-cover
//                         hover:scale-105
//                         transition-transform
//                         duration-500
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* AFTER */}

//                 <div>
//                   <h4 className="text-xl font-semibold text-green-400 mb-4">
//                     After
//                   </h4>

//                   <div className="overflow-hidden rounded-2xl">
//                     <img
//                       src={project.after}
//                       alt="after"
//                       className="
//                         w-full
//                         h-72
//                         object-cover
//                         hover:scale-105
//                         transition-transform
//                         duration-500
//                       "
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* DESCRIPTION */}

//               <p
//                 className="
//                   text-gray-300
//                   leading-relaxed
//                   text-lg
//                   mb-6
//                 "
//               >
//                 {project.desc}
//               </p>

//               {/* TOOLS */}

//               <div className="flex flex-wrap gap-3">
//                 {project.tools.map((tool, i) => (
//                   <span
//                     key={i}
//                     className="
//                       px-4
//                       py-2
//                       bg-cyan-500/20
//                       border
//                       border-cyan-400/30
//                       rounded-full
//                       text-cyan-300
//                       text-sm
//                     "
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { useState } from "react";

// // WEBSITE PROJECT IMAGES
// import estate from "../assets/estate.jpg";
// import gym from "../assets/gym.jpg";
// import hotel from "../assets/hotel.jpg";

// // DATA ENTRY PROJECT IMAGES
// import cleaningBefore from "../assets/cleaning-before.png";
// import cleaningAfter from "../assets/cleaning-after.png";

// import excelBefore from "../assets/excel-before.png";
// import excelAfter from "../assets/excel-after.png";

// import pdfBefore from "../assets/pdf-before.png";
// import pdfAfter from "../assets/pdf-after.png";

// export default function Projects() {

//   // IMAGE MODAL STATE

//   const [selectedImage, setSelectedImage] = useState(null);

//   // WEBSITE PROJECTS

//   const websiteProjects = [

//     {
//       title: "Modern Real Estate Website",

//       desc:
//         "Animated and fully responsive real estate website built using React JS and Tailwind CSS with premium UI design.",

//       image: estate,

//       tools: ["React JS", "Tailwind CSS", "Framer Motion"],

//       link: "https://your-link.com",
//     },

//     {
//       title: "Gym Website",

//       desc:
//         "Modern gym and fitness website with smooth animations, responsive layout and attractive user interface.",

//       image: gym,

//       tools: ["React JS", "CSS", "Responsive Design"],

//       link: "https://your-link.com",
//     },

//     {
//       title: "Hotel Booking Website",

//       desc:
//         "Professional hotel booking website with modern design, room sections and smooth UI interactions.",

//       image: hotel,

//       tools: ["React JS", "Tailwind CSS", "Animation"],

//       link: "https://your-link.com",
//     },

//   ];

//   // DATA ENTRY PROJECTS

//   const dataProjects = [

//     {
//       title: "Data Cleaning Project",

//       before: cleaningBefore,

//       after: cleaningAfter,

//       desc:
//         "Cleaned messy Excel data by removing duplicates, formatting tables and improving overall data structure professionally.",

//       tools: [
//         "Microsoft Excel",
//         "Data Cleaning",
//         "Formatting",
//         "Conditional Formatting",
//       ],
//     },

//     {
//       title: "Excel Data Management",

//       before: excelBefore,

//       after: excelAfter,

//       desc:
//         "Managed and organized large Excel datasets with formulas, sorting, filtering and professional formatting.",

//       tools: [
//         "Excel",
//         "VLOOKUP",
//         "Pivot Table",
//         "Data Formatting",
//       ],
//     },

//     {
//       title: "PDF to Excel Conversion",

//       before: pdfBefore,

//       after: pdfAfter,

//       desc:
//         "Converted PDF files into editable Excel sheets with accurate formatting and structured data organization.",

//       tools: [
//         "PDF Conversion",
//         "Excel",
//         "Typing",
//         "Data Entry",
//       ],
//     },

//   ];

//   return (

//     <section
//       id="projects"
//       className="
//         py-20
//         px-6
//         bg-gradient-to-b
//         from-black
//         via-slate-950
//         to-black
//       "
//     >

//       <div className="max-w-7xl mx-auto">

//         {/* MAIN HEADING */}

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="
//             text-5xl
//             font-bold
//             text-center
//             text-cyan-400
//             mb-20
//           "
//         >
//           My Projects
//         </motion.h2>

//         {/* FRONTEND PROJECTS */}

//         <motion.h3
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="
//             text-3xl
//             font-bold
//             text-white
//             mb-10
//           "
//         >
//           Frontend Development Projects
//         </motion.h3>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">

//           {websiteProjects.map((project, index) => (

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//               }}
//               className="
//                 bg-slate-900/70
//                 border
//                 border-white/10
//                 rounded-3xl
//                 overflow-hidden
//                 backdrop-blur-xl
//                 shadow-xl
//               "
//             >

//               {/* IMAGE */}

//               <div className="overflow-hidden">

//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="
//                     w-full
//                     h-60
//                     object-cover
//                     hover:scale-110
//                     transition-transform
//                     duration-700
//                   "
//                 />

//               </div>

//               {/* CONTENT */}

//               <div className="p-6">

//                 <h4 className="text-2xl font-bold text-white mb-3">
//                   {project.title}
//                 </h4>

//                 <p className="text-gray-300 leading-relaxed mb-5">
//                   {project.desc}
//                 </p>

//                 {/* TOOLS */}

//                 <div className="flex flex-wrap gap-3 mb-6">

//                   {project.tools.map((tool, i) => (

//                     <span
//                       key={i}
//                       className="
//                         px-3
//                         py-1
//                         bg-cyan-500/20
//                         border
//                         border-cyan-400/30
//                         rounded-full
//                         text-sm
//                         text-cyan-300
//                       "
//                     >
//                       {tool}
//                     </span>

//                   ))}

//                 </div>

//                 {/* BUTTON */}

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-block
//                     bg-cyan-500
//                     hover:bg-cyan-600
//                     px-5
//                     py-3
//                     rounded-xl
//                     font-medium
//                     transition-all
//                     duration-300
//                     hover:scale-105
//                   "
//                 >
//                   Live Preview
//                 </a>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//         {/* DATA ENTRY SECTION */}

//         <motion.h3
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="
//             text-3xl
//             font-bold
//             text-white
//             mb-12
//           "
//         >
//           Data Entry & Excel Projects
//         </motion.h3>

//         <div className="space-y-16">

//           {dataProjects.map((project, index) => (

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="
//                 bg-slate-900/70
//                 border
//                 border-white/10
//                 rounded-3xl
//                 p-8
//                 backdrop-blur-xl
//               "
//             >

//               {/* TITLE */}

//               <h3 className="text-3xl font-bold text-cyan-400 mb-8">
//                 {project.title}
//               </h3>

//               {/* BEFORE & AFTER */}

//               <div className="grid md:grid-cols-2 gap-8 mb-8">

//                 {/* BEFORE */}

//                 <div>

//                   <h4 className="text-xl font-semibold text-red-400 mb-4">
//                     Before
//                   </h4>

//                   <div className="overflow-hidden rounded-2xl">

//                     <img
//                       src={project.before}
//                       alt="before"
//                       onClick={() => setSelectedImage(project.before)}
//                       className="
//                         w-full
//                         h-72
//                         object-cover
//                         hover:scale-105
//                         transition-transform
//                         duration-500
//                         cursor-pointer
//                       "
//                     />

//                   </div>

//                 </div>

//                 {/* AFTER */}

//                 <div>

//                   <h4 className="text-xl font-semibold text-green-400 mb-4">
//                     After
//                   </h4>

//                   <div className="overflow-hidden rounded-2xl">

//                     <img
//                       src={project.after}
//                       alt="after"
//                       onClick={() => setSelectedImage(project.after)}
//                       className="
//                         w-full
//                         h-72
//                         object-cover
//                         hover:scale-105
//                         transition-transform
//                         duration-500
//                         cursor-pointer
//                       "
//                     />

//                   </div>

//                 </div>

//               </div>

//               {/* DESCRIPTION */}

//               <p
//                 className="
//                   text-gray-300
//                   leading-relaxed
//                   text-lg
//                   mb-6
//                 "
//               >
//                 {project.desc}
//               </p>

//               {/* TOOLS */}

//               <div className="flex flex-wrap gap-3">

//                 {project.tools.map((tool, i) => (

//                   <span
//                     key={i}
//                     className="
//                       px-4
//                       py-2
//                       bg-cyan-500/20
//                       border
//                       border-cyan-400/30
//                       rounded-full
//                       text-cyan-300
//                       text-sm
//                     "
//                   >
//                     {tool}
//                   </span>

//                 ))}

//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//       {/* IMAGE MODAL */}

//       {selectedImage && (

//         <div
//           className="
//             fixed
//             inset-0
//             bg-black/90
//             backdrop-blur-md
//             flex
//             items-center
//             justify-center
//             z-50
//             p-4
//           "
//         >

//           {/* CLOSE BUTTON */}

//           <button
//             onClick={() => setSelectedImage(null)}
//             className="
//               absolute
//               top-5
//               right-5
//               text-white
//               text-5xl
//               font-bold
//               hover:text-red-400
//               transition
//             "
//           >
//             ✕
//           </button>

//           {/* FULL IMAGE */}

//           <motion.img
//             initial={{ scale: 0.7, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             src={selectedImage}
//             alt="preview"
//             className="
//               max-w-full
//               max-h-[90vh]
//               rounded-3xl
//               shadow-2xl
//             "
//           />

//         </div>

//       )}

//     </section>
//   );
// }





import { motion } from "framer-motion";
import { useState } from "react";

// WEBSITE PROJECT IMAGES
import estate from "../assets/estate.jpg";
import gym from "../assets/gym.jpg";
import hotel from "../assets/hotel.jpg";

// DATA ENTRY PROJECT IMAGES
import cleaningBefore from "../assets/cleaning-before.png";
import cleaningAfter from "../assets/cleaning-after.png";

import excelBefore from "../assets/excel-before.png";
import excelAfter from "../assets/excel-after.png";

import pdfBefore from "../assets/pdf-before.png";
import pdfAfter from "../assets/pdf-after.png";

export default function Projects() {

  // IMAGE MODAL STATE

  const [selectedImage, setSelectedImage] = useState(null);

  // ZOOM STATE

  const [zoomed, setZoomed] = useState(false);

  // WEBSITE PROJECTS

  const websiteProjects = [

    {
      title: "Modern Real Estate Website",

      desc:
        "Animated and fully responsive real estate website built using React JS and Tailwind CSS with premium UI design.",

      image: estate,

      tools: ["React JS", "Tailwind CSS", "Framer Motion"],

      link: "https://nikhilproject45.github.io/realstate/",
    },

    {
      title: "Gym Website",

      desc:
        "Modern gym and fitness website with smooth animations, responsive layout and attractive user interface.",

      image: gym,

      tools: ["React JS", "CSS", "Responsive Design"],

      link: "https://nikhilproject45.github.io/gymxpert/",
    },

    {
      title: "Hotel Booking Website",

      desc:
        "Professional hotel booking website with modern design, room sections and smooth UI interactions.",

      image: hotel,

      tools: ["React JS", "Tailwind CSS", "Animation"],

      link: "https://nikhilproject45.github.io/hotellux/",
    },

  ];

  // DATA ENTRY PROJECTS

  const dataProjects = [

    {
      title: "Data Cleaning Project",

      before: cleaningBefore,

      after: cleaningAfter,

      desc:
        "Cleaned messy Excel data by removing duplicates, formatting tables and improving overall data structure professionally.",

      tools: [
        "Microsoft Excel",
        "Data Cleaning",
        "Formatting",
        "Conditional Formatting",
      ],
    },

    {
      title: "Excel Data Management",

      before: excelBefore,

      after: excelAfter,

      desc:
        "Managed and organized large Excel datasets with formulas, sorting, filtering and professional formatting.",

      tools: [
        "Excel",
        "VLOOKUP",
        "Pivot Table",
        "Data Formatting",
      ],
    },

    {
      title: "PDF to Excel Conversion",

      before: pdfBefore,

      after: pdfAfter,

      desc:
        "Converted PDF files into editable Excel sheets with accurate formatting and structured data organization.",

      tools: [
        "PDF Conversion",
        "Excel",
        "Typing",
        "Data Entry",
      ],
    },

  ];

  return (

    <section
      id="projects"
      className="
        py-20
        px-6
        bg-gradient-to-b
        from-black
        via-slate-950
        to-black
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* MAIN HEADING */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl
            font-bold
            text-center
            text-cyan-400
            mb-20
          "
        >
          My Projects
        </motion.h2>

        {/* FRONTEND PROJECTS */}

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            text-3xl
            font-bold
            text-white
            mb-10
          "
        >
          Web Development Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">

          {websiteProjects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-slate-900/70
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                backdrop-blur-xl
                shadow-xl
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-60
                    object-cover
                    hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h4 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-300 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* TOOLS */}

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tools.map((tool, i) => (

                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        bg-cyan-500/20
                        border
                        border-cyan-400/30
                        rounded-full
                        text-sm
                        text-cyan-300
                      "
                    >
                      {tool}
                    </span>

                  ))}

                </div>

                {/* BUTTON */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-block
                    bg-cyan-500
                    hover:bg-cyan-600
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Live Preview
                </a>

              </div>

            </motion.div>

          ))}

        </div>

        {/* DATA ENTRY SECTION */}

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            text-3xl
            font-bold
            text-white
            mb-12
          "
        >
          Data Entry & Excel Projects
        </motion.h3>

        <div className="space-y-16">

          {dataProjects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                bg-slate-900/70
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur-xl
              "
            >

              {/* TITLE */}

              <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                {project.title}
              </h3>

              {/* BEFORE & AFTER */}

              <div className="grid md:grid-cols-2 gap-8 mb-8">

                {/* BEFORE */}

                <div>

                  <h4 className="text-xl font-semibold text-red-400 mb-4">
                    Before
                  </h4>

                  <div className="overflow-hidden rounded-2xl">

                    <img
                      src={project.before}
                      alt="before"

                      onClick={() => {
                        setSelectedImage(project.before);
                        setZoomed(false);
                      }}

                      className="
                        w-full
                        h-72
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-500
                        cursor-pointer
                      "
                    />

                  </div>

                </div>

                {/* AFTER */}

                <div>

                  <h4 className="text-xl font-semibold text-green-400 mb-4">
                    After
                  </h4>

                  <div className="overflow-hidden rounded-2xl">

                    <img
                      src={project.after}
                      alt="after"

                      onClick={() => {
                        setSelectedImage(project.after);
                        setZoomed(false);
                      }}

                      className="
                        w-full
                        h-72
                        object-cover
                        hover:scale-105
                        transition-transform
                        duration-500
                        cursor-pointer
                      "
                    />

                  </div>

                </div>

              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  text-gray-300
                  leading-relaxed
                  text-lg
                  mb-6
                "
              >
                {project.desc}
              </p>

              {/* TOOLS */}

              <div className="flex flex-wrap gap-3">

                {project.tools.map((tool, i) => (

                  <span
                    key={i}
                    className="
                      px-4
                      py-2
                      bg-cyan-500/20
                      border
                      border-cyan-400/30
                      rounded-full
                      text-cyan-300
                      text-sm
                    "
                  >
                    {tool}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* IMAGE MODAL */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            z-50
            p-4
          "
        >

          {/* CLOSE BUTTON */}

          <button
            onClick={() => {
              setSelectedImage(null);
              setZoomed(false);
            }}
            className="
              absolute
              top-5
              right-5
              text-white
              text-5xl
              font-bold
              hover:text-red-400
              transition
              z-50
            "
          >
            ✕
          </button>

          {/* FULL IMAGE */}

          <motion.img
            initial={{ scale: 0.7, opacity: 0 }}

            animate={{
              scale: zoomed ? 1.8 : 1,
              opacity: 1,
            }}

            transition={{ duration: 0.3 }}

            src={selectedImage}

            alt="preview"

            onClick={() => setZoomed(!zoomed)}

            className="
              max-w-full
              max-h-[90vh]
              rounded-3xl
              shadow-2xl
              cursor-zoom-in
              transition-all
              duration-300
            "
          />

        </div>

      )}

    </section>
  );
}