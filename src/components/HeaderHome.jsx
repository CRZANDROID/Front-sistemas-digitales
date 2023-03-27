
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchWithCalendar from './calendar';


function Header() {
  const handleSearch = (searchTerm, selectedDate) => {
    // Aquí puedes realizar la búsqueda de eventos utilizando los valores del término de búsqueda y la fecha seleccionada
  };
  return (
    <header>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sistema de monitoreo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{paddingLeft : "53rem"}}>
            <ul className="navbar-nav">
             
              
              <li className="nav-item">
                <a className="nav-link" href="#">Introduce fecha para buscar el promedio: </a>
              </li>
            </ul>
            <form className="form-inline ml-auto" >
           <SearchWithCalendar></SearchWithCalendar>
          </form>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onSubmit={handleSearch}>Buscar</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;