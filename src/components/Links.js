function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github} target="_blank">
        {github}
      </a>
      <a href={linkedin} target="_blank">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
