//we import the list of co-authors
import coAuthors from "../IndexOfCoAuthors";
import "./styles/CardProfile.scss";

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
  // we get the links for the github and the website
  const { GithubLink } = coAuthor;
  const { SecondndLink } = coAuthor;

  return (
    //we redo the card without bootstrap
    <div className="card">
      <div className="card-header">
        <h1>{Name}</h1>
        <img src={Image} alt={Name} />
      </div>
      <div className="card-body">
        <p>{coAuthor.Text}</p>
        <a href={GithubLink}>Github</a>
        <a href={SecondndLink}>Website</a>
      </div>
    </div>
  );
}

export default CardProfile;
