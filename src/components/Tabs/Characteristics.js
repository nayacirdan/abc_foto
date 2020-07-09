import React from 'react';

const Characteristics = (props) => {
  const { currentProduct } = props;
  const {
    cameraMatrix, weight, color, exposureMode, classPro, guarantee, photosensitivity,
    specialFeatures, videoRecording, lens, interfaceProp, pictureSize
  } = currentProduct;

  const arrayMap = (array) => array.map((item, i) => (
    <div key={i}>{item}</div>
  ));
  return (
    <div>
      <div className='characteristics'>
        {cameraMatrix &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Матрица фотоаппарата</div>
                      <div className='characteristics_item-description'>{arrayMap(cameraMatrix)}</div>
                    </div>}
        {videoRecording &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Запись видео</div>
                      <div className='characteristics_item-description'>{videoRecording}</div>
                    </div>}
        {classPro &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Класс</div>
                      <div className='characteristics_item-description'>{classPro}</div>
                    </div>}
        {photosensitivity &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Светочувствительность</div>
                      <div className='characteristics_item-description'>{arrayMap(photosensitivity)}</div>
                    </div>}
        {lens &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Объектив</div>
                      <div className='characteristics_item-description'>{arrayMap(lens)}</div>
                    </div>}
        {exposureMode &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Режимы отработки экспозиции</div>
                      <div className='characteristics_item-description'>{arrayMap(exposureMode)}</div>
                    </div>}
        {specialFeatures &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Специальные функции</div>
                      <div className='characteristics_item-description'>{arrayMap(specialFeatures)}</div>
                    </div>}
        {interfaceProp &&
                    <div className='characteristics_item'>
                      <div className='characteristics_item-name'>Специальные функции</div>
                      <div className='characteristics_item-description'>{arrayMap(interfaceProp)}</div>
                    </div>}
        {guarantee && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Гарантия</div>
          <div className='characteristics_item-description'>{guarantee}</div>
        </div>}
        {weight && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Вес (грамм)</div>
          <div className='characteristics_item-description'>{weight}</div>
        </div>}
        {pictureSize && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Размер фотокарточки</div>
          <div className='characteristics_item-description'>{pictureSize}</div>
        </div>}
        {color && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Цвет</div>
          <div className='characteristics_item-description'>{color}</div>
        </div>}

      </div>
    </div>
  );
};

export default Characteristics;
