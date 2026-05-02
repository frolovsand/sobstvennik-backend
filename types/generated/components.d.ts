import type { Schema, Struct } from '@strapi/strapi';

export interface PropertyParameter extends Struct.ComponentSchema {
  collectionName: 'components_property_parameters';
  info: {
    displayName: 'Parameter';
  };
  attributes: {
    label: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface PropertySectionType1 extends Struct.ComponentSchema {
  collectionName: 'components_property_section_type1s';
  info: {
    displayName: 'SectionType';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    eyebrow: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['table', 'list']>;
    parameters: Schema.Attribute.Component<'property.parameter', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'property.parameter': PropertyParameter;
      'property.section-type1': PropertySectionType1;
    }
  }
}
