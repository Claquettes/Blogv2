import Nav from "react-bootstrap/Nav";

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
        <Nav.Link href="/home">{Author}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">{Date}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">{Language}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TopBarArticleCreate;
