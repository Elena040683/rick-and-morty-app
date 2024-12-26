import { SpinerIcon } from '../../asserts/icons/spinner';
import watchIcon from '../../asserts/images/animated-icon.gif';
import s from './Loder.module.scss';

const Loader = () => {
  return (
    <div className={s.preloader}>
      <SpinerIcon className={s.circle} />
      {/* <img src={watchIcon} alt="loader icon" className={s.icon} /> */}
      <h2 className={s.preloaderTitle}>Loading...</h2>
    </div>
  )
}
export default Loader;