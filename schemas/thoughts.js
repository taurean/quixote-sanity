export default {
  title: "Thought Entries",
  name: "thoughts",
  type: "document",
  fields: [
    {
      title: 'Is this ready to be public?',
      name: 'published',
      validation: Rule => Rule.required(),
      type: 'boolean'
    },
    {
      type: 'string',
      title: 'Title',
      name: 'ThoughtTitle',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Journal Entry Content', 
      name: 'content',
      validation: Rule => Rule.required(),
      type: 'array', 
      of: [
        {type: 'block'},
        {type: 'code'},
        {type: 'image'}
      ]
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
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