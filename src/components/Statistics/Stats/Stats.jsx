import css from './Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ data }) => {
    return (
        <ul className={css.statList}>
            {data.map(({
                id,
                label,
                percentage
            }) => {
                return (
                    <li className="item" key={id} style={{
                        backgroundColor: getRandomHexColor(),
                    }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                );
            })}
        </ul>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

Stats.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default Stats;