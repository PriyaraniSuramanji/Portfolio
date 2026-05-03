import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "./components/Particles.jsx";
import Cursor from "./components/Cursor";
import MagneticButton from "./components/MagneticButton";

/* 🔥 ALL PROJECTS */
const projects = [
  {
    name: "Exam Scheduler",
    description: "A dashboard for students and faculty to manage exams, timetables, and notifications.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    link: "https://github.com/PriyaraniSuramanji",
  },
  {
    name: "Weather App",
    description: "Live weather forecast UI with city search, hourly updates, and animated conditions.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    link: "https://github.com/PriyaraniSuramanji",
  },
  {
    name: "AI Resume Screening",
    description: "An AI-powered resume analyzer that ranks candidates and highlights skill matches.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "https://github.com/PriyaraniSuramanji",
  },
  {
    name: "Disease Prediction",
    description: "ML model predicting diseases from symptoms.",
    image: "/dd.jpg",
    link: "https://github.com/PriyaraniSuramanji",
  },
  {
    name: "Petshop Management",
    description: "Inventory and sales management platform for pet stores with customer tracking.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    link: "https://github.com/PriyaraniSuramanji",
  },
  {
    name: "Online Banking System",
    description: "Secure banking UI with account overview, transfers, and transaction history.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    link: "https://github.com/PriyaraniSuramanji",
  },
  {
    name: "Checkmate Project",
    description: "Smart system project with logic and implementation.",
    image: "/cc.jpg",
    link: "https://github.com/PriyaraniSuramanji",
  },
];

export default function App() {
  return (
    <div className="relative text-white scroll-smooth">

      {/* 🌌 Background */}
      <Particles />

      {/* ✨ Cursor */}
      <Cursor />

      {/* CONTENT */}
      <div className="relative z-10"></div>

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-center bg-black/30 backdrop-blur-md z-50 py-4">
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#education" className="hover:text-purple-400">Education</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      {/* 🏠 HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Priyarani
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Developer 💻",
            1000,
            "AI Enthusiast 🤖",
            1000,
            "Problem Solver 🚀",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-purple-400 text-xl mt-4"
        />

        <div className="mt-6">
          <MagneticButton href="/PriyaraniResume.pdf" download>
            My Resume
          </MagneticButton>
        </div>
      </section>

      {/* 👨‍💻 ABOUT */}
      <section id="about" className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-3xl mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I am a passionate developer focused on building modern web applications,
          AI systems, and solving real-world problems using technology.
        </p>
      </section>

      {/* SKILLS (INNOVATIVE UI) */}
<section id="skills" className="px-6 md:px-20 py-20">
  <h2 className="text-3xl mb-12 text-center">Skills</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

    {[
      {
        name: "Python & Django",
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        desc: "Web apps, APIs, backend development",
      },
      {
        name: "Web Development",
        image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        desc: "HTML, CSS, JavaScript, React basics",
      },
      {
        name: "Databases",
        image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        desc: "MySQL, SQLite, data modeling",
      },
      {
        name: "Cloud (AWS)",
        image: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
        desc: "VPC, Routing, Load Balancing",
      },
      {
        name: "Git & GitHub",
        image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
        desc: "Version control & collaboration",
      },
      {
        name: "Machine Learning",
        image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
        desc: "KNN, Naive Bayes models",
      },
      {
        name: "Data Visualization",
        image: "https://cdn-icons-png.flaticon.com/512/2721/2721276.png",
        desc: "Matplotlib, charts & insights",
      },
      {
        name: "Problem Solving",
        image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
        desc: "Debugging & optimized logic",
      },
    ].map((skill, i) => (
      <div
        key={i}
        className="relative group bg-white/10 p-6 rounded-xl backdrop-blur-lg cursor-pointer overflow-hidden"
      >
        {/* ICON */}
        <img
          src={skill.image}
          className="h-16 mx-auto mb-4 transition group-hover:scale-110"
        />

        {/* NAME */}
        <h3 className="text-lg text-center">{skill.name}</h3>

        {/* HOVER INFO */}
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-center px-4">
          <p className="text-sm text-gray-300">{skill.desc}</p>
        </div>
      </div>
    ))}

  </div>
</section>

      {/* 🎓 EDUCATION */}
      <section id="education" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl mb-10 text-center">Education</h2>

        <div className="flex justify-center">
          <div className="relative w-full md:w-2/3 rounded-xl overflow-hidden group cursor-pointer">

            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
              className="w-full h-72 object-cover"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center px-6">
              <h3 className="text-2xl font-semibold mb-2">
                Dr, AIT
              </h3>
              <p className="text-gray-300 text-sm">
                MCA student focusing on AI, web development, and real-world projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🌍 LANGUAGES */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl mb-10 text-center">Languages</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "C", image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
            { name: "Java", image: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
            { name: "Python", image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
          ].map((lang, i) => (
            <div key={i} className="relative group bg-white/10 p-6 rounded-xl flex justify-center">
              <img src={lang.image} className="h-24 group-hover:scale-110 transition" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                {lang.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📂 PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl mb-10 text-center">Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(p.link)}
              className="relative cursor-pointer rounded-xl overflow-hidden group shadow-2xl shadow-black/20"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>

              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-6 text-center">
                <p className="text-sm text-gray-200">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="text-center py-20">
  <h2 className="text-3xl mb-4">Contact Me</h2>

  <p className="text-gray-400 mb-6">
    priyaraniss29@gmail.com
  </p>

  {/* SOCIAL LINKS */}
  <div className="flex justify-center gap-6">

    {/* GitHub */}
    <a
      href="https://github.com/PriyaraniSuramanji"
      target="_blank"
      className="group"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
        className="h-10 transition group-hover:scale-110"
      />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/priyaranisuramanji/"
      target="_blank"
      className="group"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        className="h-10 transition group-hover:scale-110"
      />
    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com/YOUR_USERNAME"
      target="_blank"
      className="group"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
        className="h-10 transition group-hover:scale-110"
      />
    </a>

  </div>
</section>

    </div>
  );
}