import Python from './Python'
import Java from './Java'
import Web from './Web'
import C from './C'
import Julia from './Julia'

function Skills() {
  return (
    <section id="skills">
      <h2>Programming skill</h2>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>HTML / CSS / Javascript(React)</li>
        <li>C</li>
        <li>Julia</li>
      </ul>
      <Python />
      <Java />
      <Web />
      <C />
      <Julia />
    </section>
  );
}

export default Skills;
