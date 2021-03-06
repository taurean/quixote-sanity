export default {
  title: "Developer Tips",
  name: "developerTip",
  type: "document",
  fields: [
    {
      title: 'Is this ready to be public?',
      name: 'published',
      type: 'boolean'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
      }
    },
  ]
}