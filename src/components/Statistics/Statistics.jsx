import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const iconsList = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <GiTreeDoor />,
    <MdOutlineProductionQuantityLimits />,
  ];
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map(({ id, title, total }, idx) => {
          return (
            <StatisticsItem
              key={id}
              title={title}
              total={total}
              icon={iconsList[idx]}
            />
          );
        })}
      </ul>
    </>
  );
};
