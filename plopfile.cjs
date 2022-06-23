/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator('Block', {
    description: 'Create new block',
    prompts: [
      {
        type: 'input',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/ui/{{pascalCase name}}',
        base: 'infra/generators/new-block',
        templateFiles: ['infra/generators/new-block/**/*.hbs'],
      },
    ],
  })
}
