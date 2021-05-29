export default {
  title: "Darkroom Photos",
  name: "darkroomphoto",
  type: "document",
  fields: [
    {
      type: 'string',
      title: 'Internal Document Name',
      name: 'internalDocumentName',
      validation: Rule => Rule.required(),
    },
    {
      type: 'image',
      title: 'Photograph',
      name: 'photo',
      validation: Rule => Rule.required(),
      options: {
        metadata: ['palette'],
        storeOriginalFilename: false,
        hotspot: true // <-- Defaults to false
      },
    },
    {
      type: 'string',
      title: 'Describe the image',
      name: 'imageAlt',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      title: 'Caption the image',
      name: 'imageCaption',
    },
    {
      type: 'geopoint',
      title: 'Where was this taken?',
      name: 'geoLocation'
    },
    {
      type: 'number',
      title: 'What is the focal length?',
      name: 'focalLength',
      validation: Rule => Rule.required(),
    },
    {
      type: 'number',
      title: 'What is the aperture?',
      name: 'aperture',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      title: 'What is the shutter speed?',
      name: 'shutterSpeed',
      validation: Rule => Rule.required(),
    },
    {
      type: 'number',
      title: 'What is the sensor sensitivity?',
      name: 'iso',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      title: 'What is the sensor size?',
      name: 'sensorSize',
      validation: Rule => Rule.required(),
      options: {
        list: [ 'Full Frame', 'APS-C', 'Micro 4/3', 'Mobile'],
        layout: 'dropdown',
      }
    },
    {
      type: 'string',
      title: 'What is the Camera Brand?',
      name: 'cameraBrand',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      title: 'What is the Camera Model?',
      name: 'cameraModel',
      validation: Rule => Rule.required(),
    },
    {
      type: 'slug',
      title: 'Slug',
      name: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'internalDocumentName'
      }
    },
    {
      type: 'boolean',
      title: 'Is this ready to be public?',
      name: 'published',
    }
  ]
}