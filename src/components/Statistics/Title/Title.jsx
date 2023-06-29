import css from './Title.module.css';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
    return <h2 className={css.title}>{text}</h2>;
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;