import css from './UserDescription.module.css';
import PropTypes from 'prop-types';

const UserDescription = (
    { user:
        { username, tag, location, avatar }
    }
) => {
    return (
        <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    )
};

UserDescription.propTypes = {
    user: PropTypes.shape(
        {
            avatar: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
        }
    ),
};

export default UserDescription;