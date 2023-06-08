import PropTypes from "prop-types";
import css from "./transactionHistory.module.css"


export const TransactionHistory =({items}) => {
    return (
<div className={css.tableCont}>
  <div className={css.tableDiv}>
    <table className={css.tableMain}>
        <thead className={css.tableHead}>
            <tr className={css.tableRows}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={css.tableBody}>
            {items.map((item) => (
            <tr key={item.id}
                className={css.tableRows}>
                <td className={css.tableItemType}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
            ))}
        </tbody>
    </table>
  </div>  
</div>    
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string
        })
    )

}
