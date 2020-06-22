import React from 'react';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import { ShowMoreDescription } from '../ExpansionPanel/ShowMoreDescription';
import './Tabs.scss';

export const Description = () => {
    return (
        <div>
            <div className="description">
                <div className="description_block">
                    <div className="description_block-left">
                        <h3>
                            Качество, которого заслуживают ваши фотографии
                                </h3>
                        <p>
                            24,2-мегапиксельный датчик изображения формата APS-C нового поколения обеспечивает потрясающую детализацию даже в сложных условиях съемки.
                                </p>
                        <p>
                            Камера EOS 800D мгновенно срабатывает, оснащена ярким оптическим видоискателем и позволяет вести непрерывную съемку со скоростью 6 кадров в секунду. При построении кадра на экране с переменным углом наклона, самая быстрая в мире система АФ в режиме Live View выполняет точную фокусировку всего лишь за 0,03 с.
                                </p>
                    </div>
                    <div className="description_block-right">
                        <img alt="desc-1" src='https://res.cloudinary.com/miratsiupiak/image/upload/v1592832902/description-productPage/description-1_lpdoud.png' />
                    </div>
                </div>
                <ExpansionPanel title='Читать полностью' 
                                main={<ShowMoreDescription />}
                                classExpIcon='showMoreExpansion'
                                readMoreClass='readMore'
                />
            </div>
        </div>
    )
};
