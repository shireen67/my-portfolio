import "./index.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "PHP",
    "Laravel",
    "MySQL",
    "Express.js"
  ];

  const projects = [
    {
      title: "Urban City Service Booking",
      quote: "Book trusted city services with a smooth and modern experience.",
      image: "/project1.png",
      tech: ["React", "Node.js", "CSS", "LocalStorage"],
      live: "https://quickserve-frontend.onrender.com",
    },
    {
      title: "E-Commerce Website",
      quote: "A clean and stylish shopping platform for modern users.",
      image: "/project2.png",
      tech: ["React", "JavaScript", "Tailwind CSS", "API"],
      live: "https://outfitly-012n.onrender.com",
    },
    {
      title: "Personal Portfolio",
      quote: "A professional space to showcase skills, projects and creativity.",
      image: "/project3.png",
      tech: ["React", "Tailwind CSS", "Vite"],
      live: "https://shireen-portfolio-hl89.onrender.com",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 text-gray-800">
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow z-50 px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Shireen sultana khan</h1>

        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#skills" className="hover:text-pink-500">Skills</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-10 pt-28 gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-pink-500 font-bold mb-3">HELLO, I AM</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Shireen sultana <span className="text-blue-500">Khan</span>
          </h1>

          <h2 className="text-3xl text-pink-500 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            I build modern, responsive and user-friendly websites using React,
            JavaScript, Node.js, PHP, Laravel and MySQL.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-blue">
              View Projects
            </a>

            <a href="/resume.pdf" download className="btn-pink">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="flex gap-4 mt-7">
            <a
              href="https://github.com/shireen67"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shireen-sultana-khan-66989b346?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:thediya6295@gmail.com" className="social-btn">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 80 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="profile-float bg-white p-4 rounded-full shadow-2xl"
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-pink-200"
          />
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="px-10 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="glass-card">
          <p className="text-gray-600 text-lg leading-8">
            I am shireen sultana khan a motivated B.Tech fresher and web developer. I love building
            clean, responsive and professional web applications. My goal is to
            work as a developer and grow with real industry projects.
          </p>
        </div>
      </motion.section>

      <section id="skills" className="px-10 py-24">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-10 py-24">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 70, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -18, scale: 1.04 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-500 mb-3">
                  {project.title}
                </h3>

                <p className="text-pink-500 italic mb-5">
                  “{project.quote}”
                </p>

                <h4 className="font-bold mb-3">Technologies Used:</h4>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue inline-block"
                >
                  Open Live Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        id="contact"
        className="px-10 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">Contact</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="mailto:thediya6295@gmail.com" className="contact-card">
            <FaEnvelope className="text-3xl text-pink-500 mb-3" />
            <h3>Email</h3>
            <p>thediya6295@gmail.com</p>
          </a>

          <a
            href="https://github.com/shireen67"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="text-3xl text-pink-500 mb-3" />
            <h3>GitHub</h3>
            <p>github.com/yourusername</p>
          </a>

          <a
            href="https://www.linkedin.com/in/shireen-sultana-khan-66989b346?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="text-3xl text-pink-500 mb-3" />
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/yourprofile</p>
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default App;