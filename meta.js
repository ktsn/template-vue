module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    repository: {
      type: 'string',
      required: false,
      message: 'Github repository'
    },
    template: {
      type: 'list',
      message: 'Template preprocessor',
      choices: ['HTML', 'Pug']
    },
    style: {
      type: 'list',
      message: 'Style preprocessor',
      choices: ['CSS', 'SCSS']
    },
    flow: {
      type: 'confirm',
      message: 'Use Flow for static type checking?'
    }
  },
  helpers: {
    lang(str) {
      if (str === 'HTML' || str === 'CSS') return ''
      return ` lang="${str.toLowerCase()}"`
    }
  },
  filters: {
    '.flowconfig': 'flow'
  }
}
