import { GoBack } from "../../components/GoBack/GoBack";
import { Users } from "../../components/Users/Users";
import { Container } from "./Tweets.styled";
import {Api} from '../../services/Api'

const Tweets = () => {
  const apiState = Api();
  return (
    <main>
      <Container>
      <GoBack to={"/"}>Go back</GoBack>
        <h1>Tweets page</h1>
        <Users users={apiState.users}/>
      </Container>
    </main>
  );
};
 export default Tweets;