import PropTypes from "prop-types";
import style from "./Profile.module.css";

export default function Profile(props) {
  const {
    username,
    userTagName,
    userLocation,
    avatar,
    followersStats,
    viewsStats,
    likesStats,
  } = props;
  return (
    <div className={style.profile}>
      <div
        className={style.description}
      >
        <img
          src={avatar}
          alt={username}
          className={style.avatar}
        />
        <p className={style.name}>
          {username}
        </p>
        <p className={style.tag}>
          @{userTagName}
        </p>
        <p className={style.location}>
          {userLocation}
        </p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>
            Followers
            <br />
          </span>
          <span
            className={style.quantity}
          >
            {followersStats}
          </span>
        </li>
        <li>
          <span className={style.label}>
            Views
            <br />
          </span>
          <span
            className={style.quantity}
          >
            {viewsStats}
          </span>
        </li>
        <li>
          <span className={style.label}>
            Likes
            <br />
          </span>
          <span
            className={style.quantity}
          >
            {likesStats}
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  userTagName: PropTypes.string,
  userLocation: PropTypes.string,
  followersStats: PropTypes.number,
  viewsStats: PropTypes.number,
  likesStats: PropTypes.number,
};
