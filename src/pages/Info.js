export default function Info() {
  return (
    <main className="page-container fade-in">
      <section className="site-information">
        <h1 className="center">About This Site</h1>
        <hr />
        <h3>This site was built and hosted using:</h3>
        <ul>
          <li>Create-React-App</li>
          <li>Sass</li>
          <li>Github Pages</li>
        </ul>
      </section>
      <a
        className="link-button center"
        href="https://github.com/joshburer/joshuaburer.com"
      >
        view the git repository here
      </a>
      <p>
        This site was just something I built for fun to help me learn how to
        work on multi-page React apps and utilize Git for project management.
      </p>
    </main>
  );
}
