
import { useEffect, useState } from 'react';

import { getFriends } from 'functions/api';

import FadeLoader from 'react-spinners/FadeLoader';
import FriendsListItem from './FriendsListItem';



const FriendsList = (props) => {

  const [ friends, setFriends ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {

    setIsLoading(true);

    getFriends()
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <FadeLoader loading={true}/>;
  }

  return (
    <div>
      {friends?.map(friend => <FriendsListItem friend={friend} key={friend.id} />)}
    </div>
  );
}

export default FriendsList;