import PropTypes from "prop-types";
import css from "./statistisc.module.css"

export const Statistics = ({title, stats}) => {
    return (
          <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.list}>
             {stats.map(stat => (
               <li className={css.item} key={stat.id}>
                 <span className={css.label}>{stat.label}</span>
                 <span className={css.procentage}> {stat.percentage}%</span>
               </li>
                ))}
            </ul>
          </section>
    )}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.number
}




        //   <ul class="stat-list">
        //     <li class="item">
        //       <span class="label">.docx</span>
        //       <span class="percentage">4%</span>
        //     </li>
        //     <li class="item">
        //       <span class="label">.mp3</span>
        //       <span class="percentage">14%</span>
        //     </li>
        //     <li class="item">
        //       <span class="label">.pdf</span>
        //       <span class="percentage">41%</span>
        //     </li>
        //     <li class="item">
        //       <span class="label">.mp4</span>
        //       <span class="percentage">12%</span>
        //     </li>
        //   </ul>
        // </section>
//     )
// }
