import { Messages } from './Message.styled';
import PropTypes from 'prop-types';
export const Message = ({ msg }) => {
  return <Messages>{msg}</Messages>;
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};