import { useState } from "react";

import Navbar from "./components/Navbar";
import BlogShow from "./components/BlogShow";
import FormData from "./components/FormData.jsx";
import BlogModal from "./components/BlogModal.jsx";

import blogs from "./data/blogData.js";
import "./style.css";

const Project03 = () => {
    const [blogsData, setBlogsData] = useState(blogs);
    const [isFormShowing, setIsFormShowing] = useState(false);
    const [isBlogShowing, setIsBlogShowing] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        category: "",
        img: "",
        description: "",
    });
    const [singleBlog, setSingleBlog] = useState(null);

    // local storage implement when load,
    useState(() => {
        const localBlogs = JSON.parse(localStorage.getItem('blogs')) || blogs;
        localBlogs.length == 0 ? setBlogsData(blogs) : setBlogsData(localBlogs);
    }, [blogsData]);

    // changing the form value,
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, id: Date.now(), [name]: value });
    };

    // form data submitting,
    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, category, img, description } = formData;

        if (title, category, img, description === "") return;

        setBlogsData([...blogsData, formData]);
        localStorage.setItem('blogs', JSON.stringify([...blogsData, formData]));

        setFormData({
            id: "",
            title: "",
            category: "",
            img: "",
            description: "",
        });
        setIsFormShowing(false);
    };

    // form showing handle,
    const formShowHandle = () => {
        setIsFormShowing(prev => !prev);
    };

    // blog showing handle,
    const blogShowHandle = (id) => {
        const blog = blogsData.filter((blog) => blog.id === id);
        setSingleBlog(blog[0]);
        setIsBlogShowing(true);
    };

    // blog deleting,
    const blogDeleteHandle = (id) => {
        confirm("Are you confirm to delete this blog?");
        const expectedBlogs = blogsData.filter((blog) => blog.id === id ? !blog : blog);
        setBlogsData(expectedBlogs);
        localStorage.setItem('blogs', JSON.stringify(expectedBlogs));
        setIsBlogShowing(false);
    };

    return (
        <main className="w-full bg-light-gray text-blacky">
            <title>Blog website | React, Tailwindcss, React Router</title>

            <Navbar onClick={formShowHandle} />

            <BlogShow data={blogsData} blogShowHandle={blogShowHandle} />

            <FormData
                formShow={isFormShowing}
                formData={formData}
                handleFormData={handleFormData}
                onSubmit={handleSubmit}
                closeEvent={formShowHandle}
            />

            <BlogModal
                isBlogShow={isBlogShowing}
                blogShowHandle={() => setIsBlogShowing(false)}
                data={singleBlog}
                deleteHandle={blogDeleteHandle}
            />
        </main>
    );
};

export default Project03;