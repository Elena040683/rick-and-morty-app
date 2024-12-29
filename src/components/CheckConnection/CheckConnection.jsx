import { Detector } from 'react-detect-offline';

export const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div className="position-absolute top-50 start-50 translate-middle text-center fw-bold fs-4">
              <p>Please check your internet connection and try again</p>
              <button
                type="button"
                className="btn btn-warning"
                onClick={()=> (<Detector/>)}
              >
                Try again
              </button>
            </div>
          )
        }
      />
    </>
  );
};

export default CheckConnection;
