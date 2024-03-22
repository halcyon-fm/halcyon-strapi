import type { Schema, Attribute } from '@strapi/strapi';

export interface AllSocialMediaLinks extends Schema.Component {
  collectionName: 'components_all_social_media_links';
  info: {
    displayName: 'Social Media Links';
    icon: 'thumbUp';
  };
  attributes: {
    Platform: Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'spotify']
    >;
    URL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'all.social-media-links': AllSocialMediaLinks;
    }
  }
}
