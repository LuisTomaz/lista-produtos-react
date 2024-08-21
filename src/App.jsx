import { useState } from 'react'
import styled from 'styled-components';


//Array de produtos
const products = [
  {
    id: 1,
    name: 'Camiseta Estampada',
    price: 'R$ 50,00',
    description: 'Camiseta de algodão com estampa divertida.',
    image: 'https://images.pexels.com/photos/20885684/pexels-photo-20885684/free-photo-of-homem-oculos-escuros-oculos-de-sol-tatuagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Tênis Esportivo',
    price: 'R$ 150,00',
    description: 'Tênis confortável para atividades físicas.',
    image: 'https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Relógio Digital',
    price: 'R$ 200,00',
    description: 'Relógio digital com diversas funções.',
    image: 'https://images.pexels.com/photos/2397363/pexels-photo-2397363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Mochila Casual',
    price: 'R$ 120,00',
    description: 'Mochila espaçosa e resistente.',
    image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Fone de Ouvido',
    price: 'R$ 80,00',
    description: 'Fone de ouvido com isolamento de ruído.',
    image: 'https://images.pexels.com/photos/8000624/pexels-photo-8000624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Smartphone',
    price: 'R$ 1.200,00',
    description: 'Smartphone de última geração com excelente câmera.',
    image: 'https://images.pexels.com/photos/4565769/pexels-photo-4565769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Livro',
    price: 'R$ 60,00',
    description: 'Livro insano para aprender.',
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Teclado Mecânico',
    price: 'R$ 250,00',
    description: 'Teclado mecânico para gamers e programadores.',
    image: 'https://images.pexels.com/photos/7047207/pexels-photo-7047207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 9,
    name: 'Garrafa Térmica',
    price: 'R$ 90,00',
    description: 'Garrafa térmica que mantém a temperatura por horas.',
    image: 'https://images.pexels.com/photos/14022313/pexels-photo-14022313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];


// Estilização

const Title = styled.h1`
  text-align: center;
  padding-top: 32px;
  font-weight: 600;
  font-size: 36px;
`;

const ProductListContainer = styled.div`
  display: grid;
  flex-direction: column;
  gap: 50px;
  padding: 7% 10% 10% 10%;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`;

const ProductCard = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ProductImage = styled.img`
  width: 250PX;
  height: 230PX;
  max-width: 300px;  // Ajuste o tamanho conforme necessário
  margin-bottom: 15px;
  border-radius: 8px;
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #00aaff;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 20px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: black;
    color: white;
`;


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Title>Lista de Produtos</Title>
      <ProductListContainer>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <Button>Comprar</Button>
          </ProductCard>
        ))}
      </ProductListContainer>
    </>
  );
}

export default App
