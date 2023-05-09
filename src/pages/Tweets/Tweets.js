import { GoBack } from "../../components/GoBack/GoBack";
import { Users } from "../../components/Users/Users";
import { Container, LoadMore } from "./Tweets.styled";
import { Api } from "../../services/Api";

const Tweets = () => {
  const [users, setPage, page] = Api();

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <main>
      <Container>
        <GoBack to={"/"}>Go back</GoBack>
        <Users users={users} />

  <LoadMore type="button" onClick={handleClick}>
          Load More
        </LoadMore>
      </Container>
    </main>
  );
};
export default Tweets;
