import avatar_placeholder from "../../../assets/images/user_avatar_placeholder.png";

export default ({ path, elementStyle }) => <img className={elementStyle} src={path || avatar_placeholder} alt="Avatar" />;
