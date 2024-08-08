import Profile from "./components/Profile/Profile";
import data from "/src/userData";
// import friends from "../friends.json";
// import FriendsList from "./FriendList/FriendList";
// import transactions from "../transactions.json";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile data={data} />
      {/* <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} /> */}
    </div>
  );
}
