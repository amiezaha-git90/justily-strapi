import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroBannerHeroBanner extends Schema.Component {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    hero_text: Attribute.Text;
    hero_background: Attribute.Media;
    hero_logo: Attribute.Media;
    hero_title: Attribute.String;
  };
}

export interface PageCarouselPageCarousel extends Schema.Component {
  collectionName: 'components_page_carousel_page_carousels';
  info: {
    displayName: 'Page Carousel';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface PageDescriptionPageDescription extends Schema.Component {
  collectionName: 'components_page_description_page_descriptions';
  info: {
    displayName: 'Page description';
  };
  attributes: {
    block_title: Attribute.String;
    block_description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'page-carousel.page-carousel': PageCarouselPageCarousel;
      'page-description.page-description': PageDescriptionPageDescription;
    }
  }
}
