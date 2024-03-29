import PropTypes from 'prop-types';
import style from './Profile.module.css';

export default function Profile(props) {
  const {
    username,
    userTagName,
    userLocation,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{userTagName}</p>
        <p className={style.location}>{userLocation}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statsItem}>
          <span className={style.label}>
            Followers
            <br />
          </span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>
            Views
            <br />
          </span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>
            Likes
            <br />
          </span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
