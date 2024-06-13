// /* eslint-disable @next/next/no-img-element */
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const ItemPage = () => {
//   const router = useRouter();
//   const { item } = router.query; // Get the dynamic part of the URL
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     if (item) {
//       fetch(`https://usama-mir-server.vercel.app/blogs?item=${item}`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("Fetched Blogs:", data);
//           setBlogs(data);
//         });
//     }
//   }, [item]);

//   return (
//     <div>
//       <h1>{item}</h1>
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-[800px] mx-auto">
//         {blogs.map((blog) => (
//           <div key={blog._id}>
//             <div className="mx-auto mb-10" style={{ borderBottom: "1px solid black" }}>
//               <img src={blog.images[0]} className="p-2 border" alt="Blog Image" />
//               <div className="text-center">
//                 <h2 className="text-xl font-bold font-serif text-red-500 opacity-55 my-4">
//                   {blog.category.toUpperCase()}
//                 </h2>
//                 <div className="divider w-1/4 mx-auto">X</div>
//                 <h3 className="text-lg font-bold font-serif mb-4">{blog.title}</h3>
//                 <p className="text-left" dangerouslySetInnerHTML={{ __html: blog.descriptions.split(" ").slice(0, 60).join(" ").replace(/,/g, ",<br />") }}></p>
//                 <button className="btn btn-outline text-red-500 uppercase my-7 rounded-none">Continue Reading</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemPage;
