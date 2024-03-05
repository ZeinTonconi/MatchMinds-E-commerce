import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import MenuItem from './components/MenuItem.jsx'
import './App.css'; // Importa el archivo CSS donde tienes los estilos generales de la aplicación

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        {/* Coloca tus componentes MenuItem aquí */}
        <MenuItem 
          image="url_de_la_imagen"
          name="Nombre del ítem"
          price="Precio del ítem"
        />
        <MenuItem 
          image="url_de_la_imagen"
          name="Nombre del ítem"
          price="Precio del ítem"
        />
        <MenuItem 
          image="url_de_la_imagen"
          name="Nombre del ítem"
          price="Precio del ítem"
        />         {/* Agrega más elementos MenuItem según sea necesario */}
      </div>
      <Footer />
    </div>
  );
}

export default App;