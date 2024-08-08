import styles from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.box}>
      <img src={avatar} alt={name} width="240px" />
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
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
