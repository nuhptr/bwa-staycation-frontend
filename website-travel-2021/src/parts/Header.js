import React from "react";

import Button from "components/Button/Button";
import IconText from "parts/IconText";

export default function Header(props) {
  // TODO: check link active
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <IconText />
        </nav>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <Button className="nav-link" type="link" href="">
                Home
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
              <Button className="nav-link" type="link" href="/browse-by">
                Browse By
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/stories")}`}>
              <Button className="nav-link" type="link" href="/stories">
                Stories
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/agents")}`}>
              <Button className="nav-link" type="link" href="/agents">
                Agents
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
