import css from './Profile.module.css';
import UserDescription from './UserDescription/UserDescription';
import UserStats from './UserStats/UserStats';

const Profile = ({ user }) => {
    return (
        <div className={css.profile}>
            <UserDescription user={user} />

            <UserStats user={user} />
        </div>
    )
};

export default Profile;