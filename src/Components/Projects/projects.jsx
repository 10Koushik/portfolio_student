import React from "react";
import ProjectCard from "./ProjectCard";
import Blogimage from "../../assets/Blogging.jpeg"
import youtubeimage from "../../assets/youtube.jpeg"
import Netfliximage from "../../assets/netflix.png"


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-18 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 pb-6 px-10 flex flex-wrap gap-5">
        <ProjectCard
          bannerImg={Blogimage}
          title="Blogging Website"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          bannerImg={youtubeimage}
          title="Youtue Clone"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          bannerImg={Netfliximage}
          title="Netflix Clone"
          main="this is a blogging website created in next js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;