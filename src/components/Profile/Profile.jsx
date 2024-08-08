import styles from "./Profile.module.css";

export default function Profile({
  data: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profileInfo}>
          <img src={avatar} alt="User avatar" className={styles.picture} />
          <p
            style={{
              fontWeight: "bold",
              fontSize: "27px",
              marginBottom: "20px",
            }}
          >
            {username}
          </p>
          <p style={{ color: "rgba(128, 128, 128, 0.8)", marginBottom: "0" }}>
            @{tag}
          </p>
          <p style={{ color: "rgba(128, 128, 128, 0.8)", marginBottom: "0" }}>
            {location}
          </p>
        </div>
        <ul className={styles.items}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.value}>{followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.value}>{views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.value}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
