function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: 'lightcyan', color: 'white' }}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a> | <a href="#projects">Projects</a> | <a href="#skills">Skills</a> | <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
