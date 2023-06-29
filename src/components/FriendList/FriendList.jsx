import css from './FriendList.module.css';
import FriendListItem from "components/FriendList/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            <FriendListItem friends={friends} />
        </ul>
    );
};

export default FriendList;