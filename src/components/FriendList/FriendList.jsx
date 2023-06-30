import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from "components/FriendList/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            <FriendListItem friends={friends} />
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendList;