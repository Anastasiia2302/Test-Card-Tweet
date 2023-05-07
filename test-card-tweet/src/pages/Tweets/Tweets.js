import { GoBack } from "../../components/GoBack/GoBack";
import { Users } from "../../components/Users/Users";
import { Container } from "./Tweets.styled";
import {Api} from '../../services/Api'


const Tweets = () => {
  
  const [users, setPage] = Api();
 
 const handleClick = () => {
  setPage(prev => prev + 1 )
 }
  return (
    <main>
      <Container>
      <GoBack to={"/"}>Go back</GoBack>
        <h1>Tweets page</h1>

        <Users users={users}/>
<button type='button' onClick={handleClick}> Load More</button>
      </Container>
    </main>
  );
};
 export default Tweets;