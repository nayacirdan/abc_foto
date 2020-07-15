import React from 'react';

const Characteristics = (props) => {
  const { currentProduct } = props;
  const {
    cameraMatrix, weight, color, exposureMode, classPro, guarantee, photosensitivity,
    specialFeatures, videoRecording, lens, interfaceProp, pictureSize, focusing, ISOsensitivity,
    maxResolution, megapixels, video, lightExposureCorrection, fps, flash, battery, display,
    displayResolution
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
        {video && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Видео</div>
          <div className='characteristics_item-description'>{video}</div>
        </div>}
        {lightExposureCorrection && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Экспокоррекция, EV</div>
          <div className='characteristics_item-description'>{lightExposureCorrection}</div>
        </div>}
        {fps && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Макс. размер кадра; кадров/сек. (fps)</div>
          <div className='characteristics_item-description'>{fps}</div>
        </div>}
        {pictureSize && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Размер фотокарточки</div>
          <div className='characteristics_item-description'>{pictureSize}</div>
        </div>}
        {ISOsensitivity && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Фокусировка</div>
          <div className='characteristics_item-description'>{arrayMap(ISOsensitivity)}</div>
        </div>}
        {focusing && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Фокусировка</div>
          <div className='characteristics_item-description'>{arrayMap(focusing)}</div>
        </div>}
        {battery && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Зарядное устройство</div>
          <div className='characteristics_item-description'>{battery}</div>
        </div>}
        {flash && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Гнездо для внешней вспышки</div>
          <div className='characteristics_item-description'>{flash}</div>
        </div>}
        {display && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Дисплей</div>
          <div className='characteristics_item-description'>{display}</div>
        </div>}
        {displayResolution && <div className='characteristics_item'>
          <div className='characteristics_item-name'>LCD-экран (диагональ в дюймах; кол-во пикселов)</div>
          <div className='characteristics_item-description'>{displayResolution}</div>
        </div>}
        {maxResolution && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Максимальный размер кадра</div>
          <div className='characteristics_item-description'>{maxResolution}</div>
        </div>}
        {megapixels && <div className='characteristics_item'>
          <div className='characteristics_item-name'>Количество мегапикселей</div>
          <div className='characteristics_item-description'>{megapixels}</div>
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
