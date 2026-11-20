import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHighlight extends Struct.ComponentSchema {
  collectionName: 'components_home_highlights';
  info: {
    displayName: 'highlight';
    icon: 'house';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'home.highlight': HomeHighlight;
    }
  }
}
