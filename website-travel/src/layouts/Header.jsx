import React from "react";

import Button from "components/Button/Button";
import IconText from "./IconText";

export default function Header(props) {
  const getNavLinksClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <IconText />

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinksClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinksClass("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinksClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinksClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
