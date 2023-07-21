import Card from "react-bootstrap/Card";

//we import the list of co-authors
import coAuthors from "../IndexOfCoAuthors";

interface CardProfileProps {
  Name: string;
}

function CardProfile(props: CardProfileProps) {
  const { Name } = props;

  //we search the co-author in the list of co-authors, and we get the data of the co-author
  const coAuthor = coAuthors.find((coAuthor) => coAuthor.Name === Name);
  if (!coAuthor) {
    return null;
  }
  const { Image } = coAuthor;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Img variant="top" src={Image} />
        <Card.Text>{coAuthor.Text}</Card.Text>
        <Card.Link href="{GithubLink}">Github</Card.Link>
        <Card.Link href="{SecondndLink}">Website</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardProfile;
