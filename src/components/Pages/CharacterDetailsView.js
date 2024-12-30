export const CharacterDetailsView = ({ data, handleClick }) => {
  const { name, status, species, type, gender, origin, location, image } = data;
  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-2">
        <header>
          <button
            type="button"
            className="btn btn-primary my-2"
            onClick={handleClick}
          >
            back
          </button>
          <h2 className="text-center fs-3">Character's name: {name}</h2>
        </header>
        <main className="d-flex justify-content-center flex-column w-50">
          <img src={image} alt="character" />
          <div className="fs-6">
            <p className="text-center fs-6">Status: {status}</p>
            <p className="text-center fs-6">
              Type:
              {type === '' ? ' Unknown' : type}
            </p>
            <p className="text-center fs-6">Species: {species}</p>
            <p className="text-center fs-6">Gender: {gender}</p>
            <p className="text-center fs-6">Origin: {origin?.name}</p>
            <p className="text-center fs-6">Location: {location?.name}</p>
          </div>
        </main>
      </div>
    </div>
  );
};
