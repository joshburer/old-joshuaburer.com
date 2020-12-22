export default function Info() {
  return (
    <main className="page-container fade-in">
      <section className="site-information">
        <h1 className="center">About This Site</h1>
        <hr />
        <h3>This site was built and hosted using:</h3>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Github Pages</li>
        </ul>
        <h3>NPM packages used:</h3>
        <ul>
          <NpmLink name="create-react-app" />
          <NpmLink name="node-sass" />
          <NpmLink name="gh-pages" />
          <NpmLink name="react-router" />
          <NpmLink name="react-router-dom" />
        </ul>
      </section>
      <a
        className="link-button center"
        href="https://github.com/joshburer/joshuaburer.com"
      >
        view the git repository here
      </a>
      <p>
        Building this personal site helped me to learn how to work on
        larger-multi page React apps and utilize Git for project management.
      </p>
      <p>
        This site is <em>still a work in progress</em>, but the groundwork has
        been laid for a wider extent of content to showcase my skills.
      </p>
    </main>
  );
}

function NpmLink(props) {
  return (
    <li>
      <a href={"https://www.npmjs.com/package/" + props.name}>{props.name}</a>
    </li>
  );
}
