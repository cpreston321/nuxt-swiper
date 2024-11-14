// eslint.config.js
import antfu from '@antfu/eslint-config'

export default await antfu({
  ignores: ['dist', 'node_modules', './fixtures'],
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
})
