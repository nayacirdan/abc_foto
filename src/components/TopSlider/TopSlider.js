import React, { useEffect } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

import './styles.scss';

const TopSlider = () => {
  const [container, setContainer] = React.useState(null);
  const handleRef = React.useCallback(instance => setContainer(instance), [setContainer]);

  useEffect(() => {
    document.body.style.overflow = '';
  }, [container]);

  return (
    <div ref={handleRef} className="top-slider">
      <AutoRotatingCarousel
        classes={{
          content: 'carousel',
          arrowRight: 'arrow-right',
          arrowLeft: 'arrow-left',
          arrowIcon: 'arrow-icon',
          carouselWrapper: 'carousel-wrapper',
          footer: 'footer'
        }}
        open={true}
        ModalProps={{
          container,
          hideBackdrop: true,
          style: {
            position: 'relative'
          },
          disableAutoFocus: true,
          disableBackdropClick: true,
          disableEnforceFocus: true,
          disablePortal: true
        }}
      >
        <Slide
          classes={{
            mediaBackground: 'media-background',
            root: 'media-root',
            text: 'media-text',
            title: 'media-title'
          }}
          media={<img alt='slider_1' src='images/slider/slider_1_1920x1080.jpg' />}
          title='BEST OFFER'
          subtitle={<img alt='slider_3' src='images/slider/sony_logo.png' />}
        />
        <Slide
          classes={{
            mediaBackground: 'media-background',
            root: 'media-root',
            text: 'media-text',
            title: 'media-title'
          }}
          media={<img alt='slider_2' src='images/slider/slider_2_1920x1080.jpg' />}
          title='SPECIAL PRICE'
          subtitle={<img alt='slider_3' src='images/slider/canon_logo.png' />}
        />
        <Slide
          classes={{
            mediaBackground: 'media-background',
            root: 'media-root',
            text: 'media-text',
            title: 'media-title'
          }}
          media={<img alt='slider_3' src='images/slider/slider_3_1920x1080.jpg' />}
          title='SALE'
          subtitle={<img alt='slider_3' src='images/slider/canon_logo.png' />}
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default TopSlider;