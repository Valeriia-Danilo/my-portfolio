import css from './About.module.css';

const About = () => {
  return (
    <section className={css.about}>
      <div className={css.container}>
        <div className={css.text}>
          <h2 className={css.title}>
            About <span>Me</span>
          </h2>

          <p>
            I am a passionate Fullstack Developer focused on building modern,
            scalable and visually engaging web applications. I enjoy creating
            clean UI, smooth UX and bringing ideas to life.
          </p>

          <p>
            I love learning new technologies and constantly improving my skills.
            Every project is an opportunity to grow and build something
            meaningful.
          </p>

          <h3 className={css.skillsTitle}>Skills & Technologies</h3>

          <div className={css.skills}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Next.js</p>
            <p>Node.js</p>
            <p>React</p>
            <p>MongoDB</p>
          </div>
        </div>

        <div className={css.codeBlock}>
          <pre>
            {`const developer = {
  name: "Valeriia Danylo",
  role: "Fullstack Developer",
  passion: "Creating beautiful Websites",
  stack: ["React", "Next.js", "TypeScript", "Node.js"]
};`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
