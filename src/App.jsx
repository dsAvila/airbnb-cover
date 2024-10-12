// Importar Bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

// Importar MDI
import '@mdi/font/css/materialdesignicons.css';

// Importar CSS geral
import './App.css';

// Importar componentes
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ModalFilter from './components/ModalFilter';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Skeleton from './components/Skeleton';

function App() {
  // Estados da nossa aplicação
  const [isLoading, setIsLoading] = useState(true);
  const [catID, setCatID] = useState(1);
  const [allHouses, setAllHouses] = useState([]);
  const [filterHouses, setFilterHouses] = useState([]);

  // Primeira vez que a aplicação rodou
  useEffect(() => {
    fetch('https://json-airbnb-cover.vercel.app/accommodations')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Algo deu errado!');
      }).then((responseJSON) => {
        setAllHouses(responseJSON);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    // console.log(allHouses);
    filterByID(catID);
  }, [allHouses])

  useEffect(() => {
    // console.log(filterHouses);
  }, [filterHouses])

  useEffect(() => {
    console.log('A categoria atual é: ' + catID);
  }, [catID])

  const changeCat = (id) => {
    setCatID(id);
    filterByID(id);
  }

  // Filtrar por ID da categoria
  const filterByID = (id) => {
    const newList = allHouses.filter((item) => {
      return item.category === id;
    })
    setFilterHouses(newList);
  }

  // Filtrar por preço
  const filterByPrice = (catID, min, max) => {
    const newList = allHouses.filter((item) => {
      return item.category === catID
        && item.price >= min
        && item.price <= max
    })
    setFilterHouses(newList);
  }

  const resetFilter = (id) => {
    filterByID(id);
  }

  return (
    <div>
      <Navbar />
      <Categories changeCat={changeCat} />
      {
        isLoading ?
          <div className='mt-4 container-airbnb row' style={{ paddingTop: '180px' }}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          :
          <Card data={filterHouses} />
      }
      <ModalFilter resetFilter={resetFilter} catID={catID} filterByPrice={filterByPrice} items={filterHouses} />
    </div>
  )
}

export default App
