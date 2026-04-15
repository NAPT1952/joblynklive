import { useState } from "react";

const blogs = [
  { title: "Customer Service Jobs", category: "Non-Tech", file: "/blog-pages/blog1.html" },
  { title: "Sales Jobs", category: "Non-Tech", file: "/blog-pages/blog2.html" },
  { title: "Data Entry Jobs", category: "Non-Tech", file: "/blog-pages/blog3.html" },
  { title: "Retail Jobs", category: "Non-Tech", file: "/blog-pages/blog4.html" },
  { title: "Hospitality Jobs", category: "Non-Tech", file: "/blog-pages/blog5.html" },
  { title: "Delivery & Logistics Jobs", category: "Non-Tech", file: "/blog-pages/blog6.html" },
  { title: "Office Assistant Jobs", category: "Non-Tech", file: "/blog-pages/blog7.html" },
  { title: "BPO / Call Center Jobs", category: "Non-Tech", file: "/blog-pages/blog8.html" },
  { title: "Banking & Finance Jobs", category: "Non-Tech", file: "/blog-pages/blog9.html" },
  { title: "HR & Recruitment Jobs", category: "Non-Tech", file: "/blog-pages/blog10.html" }
];

function Blog() {
  const [filter, setFilter] = useState("All");

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((b) => b.category === filter);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-6">Blog</h1>

      {/* FILTER BUTTONS */}
      <div className="mb-6">
        <button onClick={() => setFilter("All")} className="mr-3 bg-gray-700 px-3 py-1 rounded">All</button>
        <button onClick={() => setFilter("Non-Tech")} className="bg-gray-700 px-3 py-1 rounded">Non-Tech</button>
      </div>

      {/* BLOG GRID */}
      <div className="grid gap-4">
        {filteredBlogs.map((blog, index) => (
          <div key={index} className="border p-4 rounded bg-gray-800">
            <h2 className="text-xl mb-2">{blog.title}</h2>
            <p className="text-sm mb-2">{blog.category}</p>

            <a
              href={blog.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;