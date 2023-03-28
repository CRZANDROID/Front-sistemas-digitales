
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
        </div>
      </nav>
    </header>
  );
}
export default Header;