import FriendListItem from "./FriendListIten";
import styles from "./FriendList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.container}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
