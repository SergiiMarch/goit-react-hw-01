import styles from "./FriendList.module.css";
export default function FriendsList({ friends }) {
  return (
    <div className={styles.container}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <div key={id} className={styles.box}>
          <img src={avatar} alt={name} width="320px" />
          <p
            style={{
              fontWeight: "bold",
              fontSize: "27px",
              marginBottom: "20px",
            }}
          >
            Name: {name}
          </p>
          <p className={isOnline ? styles.isActive : styles.isRetired}>
            isOnline: {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      ))}
    </div>
  );
}
