import { GoBack } from "../../components/GoBack/GoBack";
import { Container } from "./Tweets.styled";


const Tweets = () => {
  return (
    <main>
      <Container>
      <GoBack to={"/"}>Go back</GoBack>
        <h1>Tweets page</h1>
      </Container>
    </main>
  );
};
 export default Tweets;