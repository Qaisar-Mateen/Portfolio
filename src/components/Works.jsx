import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "../genStyle.css";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectDetail from "./ProjectDetail"; // new import

const ProjectCard = React.memo(({ name, description, tags, image, source_code_link, showDetail }) => {
  return (
    <div className="card">
      <div className="card2">
        <img className="card__image" src={Array.isArray(image) ? image[0] : image} alt="project_image" />
        <div className="card__content">
        <h3 className="title text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`card__tag ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="card__btns">
          <button className="cssbuttons-io" onClick={showDetail}><span>View Detail</span></button>
          {source_code_link != 'none' && <button className="cssbuttons-io"  onClick={() => window.open(source_code_link, "_blank")}>
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>Code
            </span>
          </button>}
        </div>
      </div>
    </div> 
  );
});

const Works = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null); // new state
  const loadMoreRef = useRef(null);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 4, projects.length));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [loadMore]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            {...project} 
            showDetail={() => setSelectedProject(project)} // new prop
          />
        ))}
      </div>
      
      <div ref={loadMoreRef} style={{ height: "1px" }} />
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject}
          onClose={() => setSelectedProject(null)} // callback to close the modal
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
