import { Container } from "../GlobalStyle.styled";
import { Header, Link } from "./Navigation.styled";


export const Navigation = () => {
  return (
    
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      
      </Header>
      </Container>
    
  );
};
