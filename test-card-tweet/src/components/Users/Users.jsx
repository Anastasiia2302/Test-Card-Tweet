import { Button } from "../ButtonFollower/Button";
import { UsersItems, UsersList } from "./Users.styled";

export const Users = (props) => {
  const { users } = props;

  if (!users || Users.length === 0) return <p>Sorry you don`t have friends </p>;
  return (
    <UsersList>
     
      {users.map((user) => (
        <UsersItems key={user.id}>
          <div>
          <img src={require('../../images/logo.png')} />
          <img src={require('../../images/picture.png')} />
          </div>
        
          <li>
           <img  src={user.avatar} alt="avatar"/>
          </li>
          <li>{user.user}</li>
          <li>{user.tweets} Tweets</li>
          <li>{user.followers} Followers</li>
          <Button />
        </UsersItems>
        
      ))}
      
    </UsersList>
  );
};
