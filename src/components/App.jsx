import user from './backend/user.json';
import data from './backend/data.json';
import friends from './backend/friends.json';
import transactions from './backend/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';


export const App = () => {
  return (
    <>
      {/* Task 1 */}
      <Profile
        user={user}
      />
      {/* Task 2 */}
      <Statistics
        data={data}
        title="Upload stats"
      />
      {/* Task 3 */}
      <FriendList
        friends={friends}
      />
      {/* Task 4 */}
      <TransactionHistory
        items={transactions}
      />
    </>
  );
};