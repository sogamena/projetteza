import React from 'react';

const products = [
    {
        id: 1,
        name: "Smartphone Ultra",
        price: "899 €",
        image: "/images/formation/html.jpg",
        description: "Un smartphone puissant avec un écran AMOLED de 6,5 pouces, un appareil photo quadruple de 108MP et une batterie longue durée."
    },
    {
        id: 2,
        name: "Ordinateur Portable Pro",
        price: "1299 €",
        image: "/images/formation/html.png", // Chemin relatif au dossier public
        description: "Un ordinateur portable performant avec un processeur i7 de dernière génération, 16 Go de RAM et un SSD de 1 To pour une productivité maximale."
    },
    {
        id: 3,
        name: "Casque Audio Sans Fil",
        price: "249 €",
        image: "h/images/formation/html.jpg",
        description: "Un casque audio sans fil avec une qualité sonore exceptionnelle, une réduction de bruit active et une autonomie de 30 heures."
    },
    {
        id: 4,
        name: "Montre Connectée Sport",
        price: "199 €",
        image: "/images/formation/html.jpg",
        description: "Une montre connectée élégante avec suivi d'activité, GPS intégré, mesure de la fréquence cardiaque et résistance à l'eau."
    }
];

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <p>{product.description}</p>
    </div>
);

const Texte1 = () => {
    return (
        <div className="container">
            <h1>Nos Produits</h1>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Texte1;
