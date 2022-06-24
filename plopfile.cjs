const notEmptyString = (input) => (!input.trim() ? 'Empty string is not allowed' : true)

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
        validate: notEmptyString,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/ui/{{pascalCase name}}',
        base: 'infra/generators/new-block',
        templateFiles: ['infra/generators/new-block/**/*.hbs'],
        abortOnFail: true,
      },
    ],
  })

  plop.setGenerator('Modifier', {
    description: 'Create new modifier for block',
    prompts: [
      {
        type: 'input',
        name: 'blockName',
        message: 'Block name',
        validate: notEmptyString,
      },
      {
        type: 'input',
        name: 'modName',
        message: 'Modifier name',
        validate: notEmptyString,
      },
      {
        type: 'input',
        name: 'modValue',
        message: 'Modifier value',
        validate: notEmptyString,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/ui/{{pascalCase blockName}}',
        base: 'infra/generators/new-mod',
        templateFiles: ['infra/generators/new-mod/**/*.hbs'],
        abortOnFail: true,
      },
    ],
  })
}
