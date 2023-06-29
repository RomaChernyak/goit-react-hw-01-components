import clsx from "clsx";

import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
    return (
        <>
            {friends.map(({
                avatar,
                name,
                isOnline,
                id
            }) => {
                return (
                    <li className={css.item} key={id}>
                        <span className={clsx(
                            css.status,
                            {
                                [css.isOnline]: isOnline,
                            }
                        )}>{isOnline}</span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                );
            })}
        </>
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendListItem;