import { Button } from "../Button/Button";
import { Avatar, BgFoto, ImageBox, Logo, UsersCard, UsersItems, UsersList } from "./Users.styled";

export const Users = (props) => {
  const { users } = props;

  if (!users || users.length === 0) return <p>Sorry, you don`t have friends </p>;
  return (
    <UsersList>
     
      {users.map((user) => (
        <UsersCard key={user.id}>
          <ImageBox>
          <Logo src={require('../../images/logo.png')} alt='logo'/>
          </ImageBox>
          <BgFoto src={require('../../images/picture.png')} alt='logo' />
          
          
        
          <UsersItems>
           <Avatar  src={user.avatar} alt="avatar" width={62} height={62}/>
           
          </UsersItems>
          <UsersItems>{user.user}</UsersItems>
          <UsersItems>{user.tweets} Tweets</UsersItems>
          <UsersItems>{user.followers} Followers</UsersItems>
          <Button type='button'/>
        </UsersCard>
        
      ))}
      
    </UsersList>
  );
};
