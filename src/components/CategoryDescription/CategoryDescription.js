import React from 'react';
import './CategoryDescription.scss';
import {ShowMoreDescription} from '../ExpansionPanel/ShowMoreDescription';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import {useSelector} from 'react-redux';

const CategoryDescription = () => {
  const currentCategory = useSelector(state => state.categories.currentCategory);

  return (
    <div className='category-description'>
      <div className='container'>
        <h2>{currentCategory.description_title}</h2>
        <p className='desc-from-mongo'>{currentCategory.description}</p>
        <p>Вас интересуют цифровые фотоаппараты? Вы не знаете, как выбрать цифровой фотоаппарат? Вы ищете в своем городе цифровые фотоаппараты (в Одессе, Харькове, вся Украина.)? Если «да», то вы попали в самое подходящее место. Компания «АВС Фото» поможет вам выбрать и купить цифровой фотоаппарат в Киеве, Одессе и других городах Украины.</p>
        <p>Следует заметить, что далеко не все знают, как выбрать цифровой фотоаппарат. А между тем цифровые фотокамеры предлагаются широким спектром. Вы можете выбрать недорогие цифровые фотоапараты, либо же дорогостоящие «зеркалки». Однако не следует отталкиваться от параметра цены, и рассуждать, что чем дороже, тем лучше. Выбор цифрового фотоаппарата – процесс индивидуальный, и почти что «интимный».</p>
        <ExpansionPanel title='Читать полностью'
          main={<p>Только у нас вы сможете купить лучшие фотоаппараты по выгодной цене. Если у вас возникли любые вопросы, наши косультанты с радостью помогут вам с выбором. Кроме того, вы вссегда можете посетить наш магазин лично и удостовериться в качестве предоставляемой нами продукции. Не забывайте проверить почту - мы часто присылаем обзор новинок и информацию о текущих акциях</p>}
          classExpIcon='showMoreExpansion'
          readMoreClass='readMore'
        />
      </div>

    </div>
  );
};

export default CategoryDescription;
