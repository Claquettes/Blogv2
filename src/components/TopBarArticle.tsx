import Nav from "react-bootstrap/Nav";

import "./styles/TopBarArticle.css";

interface TopBarProps {
  //visibles to the outside
  Author: string;
  Date: string;
  Language: string;
}

function TopBarArticleCreate(props: TopBarProps) {
  const { Author, Date, Language } = props;

  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link className="nav-item">{Author}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-item">{Date}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-item">{Language}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TopBarArticleCreate;
