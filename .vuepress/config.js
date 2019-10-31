module.exports = {
  title: 'blog',
  description: 'description',
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            pagination: {
              lengthPerPage: 2,
            },
          },
        ],
      },
    ],
  ],
}
