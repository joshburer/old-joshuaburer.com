export default function Info() {
  return (
    <div className="page-container">
      <div className="site-information">
        <h1>About this site</h1>
        <hr />
        <h3>This site was built and hosted using:</h3>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Github Pages</li>
        </ul>
        <h3>NPM packages used:</h3>
        <ul>
          <li><a href="https://www.npmjs.com/package/create-react-app">create-react-app</a></li>
          <li><a href="https://www.npmjs.com/package/node-sass">node-sass</a></li>
          <li><a href="https://www.npmjs.com/package/gh-pages">gh-pages</a></li>
          <li><a href="https://www.npmjs.com/package/react-router">react-router</a></li>
          <li><a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a></li>
        </ul>
      </div>
    </div>
  );
}
