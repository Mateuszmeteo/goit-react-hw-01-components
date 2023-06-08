import PropTypes from "prop-types";
import css from './friendList.module.css';



const FriendListItem = ({avatar, name, isOnline}) => {
    const statusClasName = isOnline ? css.online : css.offline;
    return (
    <li className={css.item}>
        <span className={`${css.status} ${statusClasName}`}>{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </li>
    )
}



export const FriendList = ({friends}) => {
    return(
    <ul class="friend-list">
        {friends.map((friend) => (
            <FriendListItem
                key = {friend.id}
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline} />
        ))}
    </ul>
    )

}

//friendListItem było zmieniłem na friendList i jest ten sam efekt//
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
        })
    )
}