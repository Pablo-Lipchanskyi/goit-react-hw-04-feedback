import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/Button/button.module.css'

export const Button = ({ type = 'button', children, actionHandler }) => {
  return (
    <button type={type} onClick={actionHandler} variant="primary" className={css.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired,
};