import styles from "./FriendList.module.css";
export default function FriendsList({ friends }) {
  return (
    <div className={styles.container}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <div key={id} className={styles.box}>
          <img src={avatar} alt={name} width="240px" />
          <p>Name: {name}</p>
          <p>isOnline: {isOnline ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}
