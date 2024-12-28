import { ImSpinner } from 'react-icons/im';
import PandingImg from '../../asserts/images/pending.jpg';
import s from './Loder.module.scss';

const Loader = () => {
  return (
    <div  className="position-absolute top-50 start-50 translate-middle">
      <div className="d-flex flex-column align-items-center">
        <img src={PandingImg} alt="question" className={s.img} />
        <ImSpinner size="32" className="icon-spin" />
        <p className="fw-bold fs-3">Loading...</p>
      </div>
    </div>
  );
}
export default Loader;