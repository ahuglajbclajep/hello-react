import React, { memo } from "react";

const Header: React.FC = memo(() => (
  <header>
    <h1 className="project-name">react-sandbox</h1>
    <h2 className="project-desc">sandbox of React app</h2>
  </header>
));

export { Header };
