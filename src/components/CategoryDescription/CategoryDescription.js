import React from 'react';
import './CategoryDescription.scss'
import {ShowMoreDescription} from "../ExpansionPanel/ShowMoreDescription";
import ExpansionPanel from "../ExpansionPanel/ExpansionPanel";

const CategoryDescription = () => {
    return (
        <div className='category-description'>
            <div className='container'>
                <h2>Фотоаппарат - яркие кадры жизни</h2>
                <p>Вас интересуют цифровые фотоаппараты? Вы не знаете, как выбрать цифровой фотоаппарат? Вы ищете в своем городе цифровые фотоаппараты (в Одессе, Харькове, вся Украина.)? Если «да», то вы попали в самое подходящее место. Компания «АВС Фото» поможет вам выбрать и купить цифровой фотоаппарат в Киеве, Одессе и других городах Украины.</p>
                <p>Следует заметить, что далеко не все знают, как выбрать цифровой фотоаппарат. А между тем цифровые фотокамеры предлагаются широким спектром. Вы можете выбрать недорогие цифровые фотоапараты, либо же дорогостоящие «зеркалки». Однако не следует отталкиваться от параметра цены, и рассуждать, что чем дороже, тем лучше. Выбор цифрового фотоаппарата – процесс индивидуальный, и почти что «интимный».</p>
                <ExpansionPanel title='Читать полностью'
                                main={<ShowMoreDescription />}
                                classExpIcon='showMoreExpansion'
                                readMoreClass='readMore'
                />
            </div>

        </div>
    );
};

export default CategoryDescription;
