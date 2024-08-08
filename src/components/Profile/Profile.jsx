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
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <ul className={styles.items}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.value}>{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.value}>{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.value}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
