import welcomeImage from '../../asserts/images/welcome.jpg';

const ErrorView = ({ message }) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <img src={welcomeImage} width="240" alt="errorImage" />
      <p className="text-center fs-6 mb-3">{message}</p>
    </div>
  );
};
export default ErrorView;
