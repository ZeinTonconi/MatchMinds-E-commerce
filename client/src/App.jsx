import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';
import imagen1 from './images/1.jpeg'
import imagen2 from './images/2.jpeg'
import imagen3 from './images/3.jpeg'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      image: imagen1,
      name: "Nombre del ítem 1",
      price: "Precio del ítem 1",
    },
    {
      image: imagen2,
      name: "Nombre del ítem 2",
      price: "Precio del ítem 2",
    },
    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },


    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },


    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },


    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

    {
      image: imagen3,
      name: "Nombre del ítem 3",
      price: "Precio del ítem 3",
    },

  ]);

  // Using useRef to avoid unnecessary re-renders in useEffect
  const scrollRef = useRef(null);

  // UseLayoutEffect for potential rendering issues
  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const isAtBottom = scrollTop + window.innerHeight >= documentHeight - 1000; // Added a margin of error

      if (isAtBottom) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    scrollRef.current = handleScroll; // Assign the function to the ref

    window.addEventListener("scroll", scrollRef.current);

    return () => {
      window.removeEventListener("scroll", scrollRef.current);
    };
  }, []);

  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="app-container">
      <header>
        {/* Replace with your NavBar component */}
        <NavBar />
      </header>
      <div className="container">
        <div className="main-content">
          {/* Combine the horizontal and vertical layout from the first code with the Card components */}
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {menuItems.map((item, index) => (
              <Card key={index} shadow="sm" isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg" // Ajusta para esquinas redondeadas
                  width="100%"
                  alt={item.name}
                  className="w-full object-cover h-[140px]"
                  src={item.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
            ))}
          </div>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;