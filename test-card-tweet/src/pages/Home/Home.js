import { Container } from "../../components/GlobalStyle.styled";
import "animate.css";
import { Text, Title } from "./Home.styled";

const Home = () => {
  return (
    <main>
      <Container>
        <Title>I am your tweet</Title>
        <Text>Let's have some fun</Text>
        <img
          src={require("../../images/social.png")}
          alt="like"
          width="600px"
          height='400px'
          
          className="animate__animated animate__pulse animate__delay-2s animate__infinite"
        />
      </Container>
    </main>
  );
};
export default Home;
