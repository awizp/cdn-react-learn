import { Project01 } from "./projects/index.js";

// const MyProjects = () => {
//   return (
//     <div className="w-full flex flex-col justify-center items-center gap-5">
//       <div className="px-3 md:px-0 w-full md:w-[80%] container mx-auto">
//         <h1 className="text-orange-500 text-xl font-bold text-center mt-10">My React Tasks</h1>

//         <div className="w-full grid grid-colos-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20">
//           <a href="./project" className="w-full p-5 rounded-xl border-2 bg-zinc-900 border-white/20 hover:-translate-y-0.75 transition duration-300">
//             <p>Project 01</p>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Project01 />
    </div>
  );
};

export default App;