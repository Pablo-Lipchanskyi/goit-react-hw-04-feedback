import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/Button/Button';

export const FeedbackOptions = ({ options = {}, onLeaveFeedback = {} }) => {
  return (
    <>
      {options.map(option => {
          return (
            <Button key={option} actionHandler={() => onLeaveFeedback(option)} variant="primary">
            {option[0].toUpperCase() + option.slice(1)}
            </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};