import slugFormatter from '../transforms/slugFormatter';

export default {
  title: "Darkroom Photos",
  name: "darkroomphoto",
  type: "document",
  fields: [
    {
      title: 'Internal Document Name',
      name: 'internalDocumentName',
      validation: Rule => Rule.required(),
      type: 'string'
    },
    {
      title: 'Is this ready to be public?',
      name: 'published',
      type: 'boolean'
    },
    {
      title: 'Slug',
      name: 'slug',
      validation: Rule => Rule.required(),
      type: 'slug',
      options: {
        source: 'internalDocumentName',
        slugify: slugFormatter
      }
    },
    {
      title: 'Photograph',
      name: 'photo',
      validation: Rule => Rule.required(),
      type: 'image',
      options: {
        metadata: ['exif', 'location', 'palette'],
        storeOriginalFilename: false,
        hotspot: true // <-- Defaults to false
      },
    },
    {
      title: 'What is the focal length?',
      name: 'focalLength',
      validation: Rule => Rule.required(),
      type: 'number'
    },
    {
      title: 'What is the aperture?',
      name: 'aperture',
      validation: Rule => Rule.required(),
      type: 'number'
    },
    {
      title: 'What is the sensor sensitivity?',
      name: 'iso',
      validation: Rule => Rule.required(),
      type: 'number'
    },
    {
      title: 'What is the sensor size?',
      name: 'sensorSize',
      validation: Rule => Rule.required(),
      type: 'string',
      options: {
        list: [ 'Full Frame', 'APS-C', 'Micro 4/3', 'Mobile'],
        layout: 'dropdown',
      }
    }
  ]
}