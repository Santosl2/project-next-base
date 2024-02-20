export default function (plop) {
  plop.setGenerator('componente', {
    description: 'Criar um novo componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente',
      },
      {
        type: 'confirm',
        name: 'haveStyles',
        message: 'O componente terá estilos?',
      },
      {
        type: 'confirm',
        name: 'haveTypes',
        message: 'O componente terá tipagem?',
      },
      {
        type: 'confirm',
        name: 'haveStories',
        message: 'O componente terá documentação?',
      },
      {
        type: 'confirm',
        name: 'haveTests',
        message: 'O componente terá testes unitários?',
      },
    ],
    actions: ({
      haveTypes = false,
      haveStyles = true,
      haveTests = false,
      haveStories = false,
    }) => {
      const data = [
        {
          type: 'add',
          path: 'src/shared/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component.hbs',
        },
        {
          type: 'add',
          path: 'src/shared/components/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/component.index.hbs',
        },
      ]

      if (haveStories) {
        data.push({
          type: 'add',
          path: 'src/shared/components/{{pascalCase name}}/{{pascalCase name}}.stories.ts',
          templateFile: 'plop-templates/component.stories.hbs',
        })
      }

      if (haveTests) {
        data.push({
          type: 'add',
          path: 'src/shared/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
          templateFile: 'plop-templates/component.spec.hbs',
        })
      }

      if (haveTypes) {
        data.push({
          type: 'add',
          path: 'src/shared/components/{{pascalCase name}}/{{pascalCase name}}.types.tsx',
          templateFile: 'plop-templates/component.types.hbs',
        })
      }

      if (haveStyles) {
        data.push({
          type: 'add',
          path: 'src/shared/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'plop-templates/component.styles.hbs',
        })
      }

      return data
    },
  })
}
