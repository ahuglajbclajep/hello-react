import React, { memo } from "react";

const Header: React.FC = memo(() => (
  <header className="home-header">
    <h1 className="project-name">react-sandbox</h1>
    <h2 className="project-desc">sandbox of React app</h2>
    <a
      className="github-button"
      href="https://github.com/ahuglajbclajep/react-sandbox"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </a>
  </header>
));

export { Header };
