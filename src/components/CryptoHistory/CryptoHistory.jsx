const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';
import { dataFormat } from '../../helpers/formatData';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map((item, id) => {
            return (
              <th key={id} className={style.th}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, idx) => {
          return (
            <tr key={id} className={style.tr}>
              <td className={style.td}>{idx + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{dataFormat(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
