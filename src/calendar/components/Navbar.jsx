export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 py-2">
      <span className="navbar-brand text-white">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; Julio Ucharima
      </span>

      <button className="btn btn-outline-danger">
        <i className="fa-solid fa-right-from-bracket"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
