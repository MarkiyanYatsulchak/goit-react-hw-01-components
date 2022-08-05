import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        userTagName={user.tag}
        userLocation={user.location}
        avatar={user.avatar}
        followersStats={user.stats.followers}
        viewsStats={user.stats.views}
        likesStats={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
