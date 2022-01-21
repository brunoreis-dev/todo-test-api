# Todo Tests API

## 📄 Scripts

Abaixo os comandos que são usados no projeto:

| Comando | Description |

| ----------------------- | --------------------------------------------------------------------------------------------- |

`| yarn |` Instala as dependências do projeto |

`| docker-compose up |` Configura o ambiente no Docker |

`| docker start todotest |` Executa o projeto em modo de desenvolvimento na porta `3333` |

`| docker start database_todo |` Executa o banco de dados em modo de desenvolvimento na porta `5432` |

`| yarn typeorm migrate:run |` Gera e aplica migrações |

## 🚀 Padrões de código/desenvolvimento

- Para nomenclatura de branches, utilizamos o padrão do Gitflow

  - `feature/${nomeDaFeature}` - Para features novas
  - `hotfix/${nomeDoHotfix}` - Para hotfixes

## 📦 Bibliotecas mais usadas

- [express](https://github.com/expressjs/express)
- [typescript](https://github.com/microsoft/TypeScript)
- [typeorm](https://github.com/typeorm/typeorm)
- [uuid](https://github.com/uuidjs/uuid)
- [eslint](https://github.com/eslint/eslint)

## 🛠 Extensões VSCode

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese)

## 🗂 Estrutura do projeto

```

todo-test-api
  ├── scripts // comandos para git hook
  └── src
      ├── modules // todos os módulos
      │   └── moduleName // módulo especifico
      │       ├── infra // infra de comunicação com o DB ( ORM )
      │       │   └── typeorm
      │       │       ├── entities
      │       │       └── repositories // funções de comunicação com o DB
      │       └── useCases // controllers e regras de negócio
      └──  shared // Utilizáveis globais
           ├── http // métodos https e configs servidor globais
           |    └── routes // criação de rotas
           └── typeorm
                └── migrations
```

## ❗️ Imports absolutos

Evitar importes relativos que vêm do diretório `src/`.

```typescript
�?import MyUseCase from '../../../moduleName/useCases';

✔️ import MyComponent from '@modules/moduleName/useCases/...';
```

Configure seu editor para resolver esses imports

**VSCode**

Coloque o arquivo `tsconfg.json` na raiz do projeto:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@modules/*": ["modules/*"],
      "@shared/*": ["shared/*"]
    }
  }
}
```
