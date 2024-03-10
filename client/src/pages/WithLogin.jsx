import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export function WithLogin() {

const purchases = [
    {
    id: 1,
    product: 'Camiseta',
    price: 20,
    quantity: 1,
    image: 'https://via.placeholder.com/150',
    },
    {
    id: 2,
    product: 'Zapatillas',
    price: 50,
    quantity: 2,
    image: 'https://via.placeholder.com/150',
    },
];
    const user = JSON.parse(localStorage.getItem('user'))
return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div
        className="account-details mt-10"
        style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        maxWidth: '800px', // Maintained from previous code
        }}
    >
        <header className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Detalles de la cuenta</h2>
        <NavLink to="/" className="text-gray-700 hover:text-blue-500">
            <BsArrowLeft size="24" /> Return
        </NavLink>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="user-info p-4 rounded-md shadow-md bg-white">
            <h3 className="text-lg font-bold mb-2">User information</h3>
            <dl>
            <dt className="text-gray-700 font-medium mb-1">Name:</dt>
            <dd className="text-gray-900">{user.name}</dd>
            <dt className="text-gray-700 font-medium mb-1">Email:</dt>
            <dd className="text-gray-900">{user.email}</dd>
              {/* Otros campos de detalles de la cuenta */}
            </dl>
        </section>

        <section className="user-avatar flex items-center justify-center py-4 rounded-md shadow-md bg-white">
            <img
              className="w-48 h-48 rounded-full object-cover" // Increased size from previous code
            src="https://via.placeholder.com/150"
            alt="Foto de perfil"
            />
        </section>
        </div>

        <CSSTransition // Wrap purchase history with CSSTransition
          in={true} // Always visible in this case
          timeout={300} // Animation duration (milliseconds)
          classNames="fade" // Name for animation classes
        >
        <section className="user-purchases flex flex-col mt-4 p-4 rounded-md shadow-md bg-white">
            <h3 className="text-lg font-bold mb-2">Historial de compras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {purchases.map((purchase) => (
                <div key={purchase.id} className="purchase-card p-4 rounded-md shadow-md bg-gray-100">
                <div className="flex items-center">
                    <img
                    className="w-24 h-24 rounded-full object-cover mr-4"
                    src={purchase.image}
                    alt={purchase.product}
                    />
                    <div>
                    <h4 className="text-lg font-medium mb-1">{purchase.product}</h4>
                    <p className="text-gray-700">Precio: ${purchase.price}</p>
                    <p className="text-gray-700">Cantidad: {purchase.quantity}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>
        </CSSTransition>
    </div>
    </div>
);
}

export default WithLogin;