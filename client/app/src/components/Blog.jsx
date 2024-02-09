import React, { useEffect } from "react";
import blog from "../assets/ai.jpg";

const Blog = () => {
  useEffect(()=>{
    console.log(import.meta.env.API_URL) ;
  }, [])
  return (
    <div className="slide-left backdrop-blur-sm bg-opacity-50 w-screen h-screen max-w-4xl mx-auto px-4 pt-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover object-center"
          src={blog}
          alt="blog image"
        />

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Unveiling Insights: Exploring Data Analysis with DataLens
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unveiling Insights: Exploring Data Analysis with DataLens is a
            comprehensive blog dedicated to empowering readers with the
            knowledge and skills needed to navigate the world of data analysis
            through engaging content and practical examples.
          </p>
          <p className="text-xl font-semibold text-gray-600 mb-2">
            In the ever-evolving landscape of data analysis, uncovering insights
            from vast datasets is both an art and a science. Welcome to
            "Unveiling Insights: Exploring Data Analysis with DataLens," where
            we embark on a journey to demystify the intricacies of data analysis
            and unveil the hidden stories within data.
          </p>
          <p className="text-xl font-semibold text-gray-600 mb-2">
            DataLens serves as our guiding light in this exploration, offering a
            powerful toolset to dissect, interpret, and derive meaningful
            insights from diverse datasets. Whether you're a seasoned data
            analyst or a curious novice, this blog is your gateway to
            understanding the fundamental principles and advanced techniques of
            data analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
