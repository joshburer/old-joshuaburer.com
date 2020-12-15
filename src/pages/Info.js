export default function Info() {
  return (
    <div className="page-container">
      <div className="site-information">
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
          <NpmLink name="create-react-app"/>
          <NpmLink name="node-sass"/>
          <NpmLink name="gh-pages"/>
          <NpmLink name="react-router"/>
          <NpmLink name="react-router-dom"/>
        </ul>
      </div>
      <a
        className="link-button"
        href="https://github.com/joshburer/joshuaburer.com"
      >
        view the git repository here
      </a>
    </div>
  );
}

function NpmLink(props) {
  return (
    <li>
      <a href={"https://www.npmjs.com/package/" + props.name}>
      {props.name}
      </a>
    </li>
  );
}
