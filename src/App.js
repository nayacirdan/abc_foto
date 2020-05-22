import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Footer from "./components/Footer/Footer";
import CardItem from "./components/Card/Card";
import Grid from '@material-ui/core/Grid'

const simpleProduct={
    mainPhotoUrl: "images/gallery_items/canon_1/image_1.jpg",
    title: "Canon PowerShot G9X II Silver",
    isAvailable: false,
    fullPrice: 21473,
    salePrice: null,
    isHit: false,
    isExpected: true,
    description:'Матрица 22.3 x 14.9 мм, 24.2 Мп поддержка карт памяти SD/SDHC/SDXCСенсорный ЖК-дисплей с переменным углом наклона Clear View II TFT 3" / FullHD-видео / питание от литий-ионного аккумулятора / 131 x 76.2 x 99.9 мм, 532 г'
}

const fullProduct={
    mainPhotoUrl: "images/gallery_items/sony_1/image_1.jpg",
    title: "Sony A6400 body (ILCE6500B.CEC)",
    isAvailable: true,
    fullPrice: 29999,
    salePrice: 25999,
    isHit: true,
    isExpected: false,
    description:'Матрица 22.3 x 14.9 мм, 24.2 Мп поддержка карт памяти SD/SDHC/SDXCСенсорный ЖК-дисплей с переменным углом наклона Clear View II TFT 3" / FullHD-видео / питание от литий-ионного аккумулятора / 131 x 76.2 x 99.9 мм, 532 г'
}


const App = (props) => {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <p>
         Fantastic Five Project Started!!!!
        </p>
        The main stucture of any page would be:
        <ul>
          <li>Main nav</li>
          <li>Header</li>
          <li>Products nav</li>
          <li>Main Container</li>
          <li>Footer</li>
        </ul>
      </header> */}
        <Grid className='card-list' justify='space-evenly'>
            <CardItem product={simpleProduct}/>
            <CardItem product={fullProduct}/>
        </Grid>
        <Footer />
    </div>
  );
}

export default App;
