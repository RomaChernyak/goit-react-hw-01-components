import css from './Statistics.module.css';
import Title from './Title/Title';
import Stats from './Stats/Stats';

const Statistics = ({ data, title }) => {
    return (
        <section className={css.statistics}>
            {title && <Title text={title} />}

            <Stats data={data} />
        </section>
    );
};

export default Statistics;