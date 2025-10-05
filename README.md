# Description

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Getting Started
Before use [Loopback v4](https://loopback.io/doc/es/lb4/index.html) we must install a node v20+ in your host. First install the nvm [(Node Version Manager)](https://github.com/nvm-sh/nvm) and after this, install a node version compatible with Loopback v4.

For windows:

- Go to [NVM for Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades), download the last [release](https://github.com/coreybutler/nvm-windows/releases) and install in your host:

- Install a node version up or equals to 20 like this from Windows power shell:
```sh
nvm install 20.19.5
node --version
```

- Install the (Loopback v4 CLI)[https://loopback.io/doc/es/lb4/Getting-started.html]:
```
npm install -g @loopback/cli
```

## Create your project:
Create your Loopback v4 project using the CLI:
```
lb4 uniovi-robotics-workshop-backend
➜  Temp lb4 uniovi-robotics-workshop-backend
? Descripción de proyecto: uniovi-robotics-workshop-backend
? Directorio raíz de proyecto: (uniovi-robotics-workshop-backend) 
➜  Temp lb4 uniovi-robotics-workshop-backend
? Descripción de proyecto: Uniovi Robotics Workshop Backend
? Directorio raíz de proyecto: uniovi-robotics-workshop-backend
? Nombre de clase de aplicación: UnioviRoboticsWorkshopBackendApplication
? Seleccionar características para habilitarlas en el proyecto Enable eslint, Enable prettier, Enable mocha, Enable loopbackBuild, Enable editorconfig, Enable vscode, Enable docker, Enable repositories, Enable 
services
    force uniovi-robotics-workshop-backend/.yo-rc.json
   create uniovi-robotics-workshop-backend/.editorconfig
   create uniovi-robotics-workshop-backend/.eslintignore
   create uniovi-robotics-workshop-backend/.eslintrc.js
   create uniovi-robotics-workshop-backend/.mocharc.json
   create uniovi-robotics-workshop-backend/.prettierignore
   create uniovi-robotics-workshop-backend/.prettierrc
   create uniovi-robotics-workshop-backend/DEVELOPING.md
   create uniovi-robotics-workshop-backend/package.json
   create uniovi-robotics-workshop-backend/tsconfig.json
   create uniovi-robotics-workshop-backend/.vscode/launch.json
   create uniovi-robotics-workshop-backend/.vscode/settings.json
   create uniovi-robotics-workshop-backend/.vscode/tasks.json
   create uniovi-robotics-workshop-backend/.gitignore
   create uniovi-robotics-workshop-backend/.dockerignore
   create uniovi-robotics-workshop-backend/Dockerfile
   create uniovi-robotics-workshop-backend/README.md
   create uniovi-robotics-workshop-backend/public/index.html
   create uniovi-robotics-workshop-backend/src/application.ts
   create uniovi-robotics-workshop-backend/src/index.ts
   create uniovi-robotics-workshop-backend/src/migrate.ts
   create uniovi-robotics-workshop-backend/src/openapi-spec.ts
   create uniovi-robotics-workshop-backend/src/sequence.ts
   create uniovi-robotics-workshop-backend/src/__tests__/README.md
   create uniovi-robotics-workshop-backend/src/controllers/README.md
   create uniovi-robotics-workshop-backend/src/controllers/index.ts
   create uniovi-robotics-workshop-backend/src/controllers/ping.controller.ts
   create uniovi-robotics-workshop-backend/src/datasources/README.md
   create uniovi-robotics-workshop-backend/src/models/README.md
   create uniovi-robotics-workshop-backend/src/repositories/README.md
   create uniovi-robotics-workshop-backend/src/__tests__/acceptance/home-page.acceptance.ts
   create uniovi-robotics-workshop-backend/src/__tests__/acceptance/ping.controller.acceptance.ts
   create uniovi-robotics-workshop-backend/src/__tests__/acceptance/test-helper.ts

No change to package.json was detected. No package manager install will be executed.
npm warn config cache-min This option has been deprecated in favor of `--prefer-offline`.
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 634 packages, and audited 635 packages in 5s

114 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Dependencies
We must install some extra dependencies after create your Loopback project:

- **MongoDB connector** for Loopback v4: [MongoDB Loopback v4 connector](https://loopback.io/doc/ja/lb3/MongoDB-connector.html)
```
npm install loopback-connector-mongodb --save
```

- **Environment manager** for nodeJS: [dotenv](https://www.npmjs.com/package/dotenv)
```
npm install dotenv --save
```

## Code Project
- Create the **Measure Model**:
```
lb4 model measure
? Seleccione la clase base de modelo Entity (A persisted model with an ID)
? ¿Desea permitir propiedades (de formato libre) adicionales? No
Model Measure se creará en src/models/measure.model.ts

Vamos a añadir una propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: id
? Tipo de propiedad: string
? ¿Es id la propiedad de ID? Yes
? ¿id se genera automáticamente? Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: device
? Tipo de propiedad: string
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: sensor
? Tipo de propiedad: string
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: value
? Tipo de propiedad: number
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: datetime
? Tipo de propiedad: date
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Measure
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: 
   create src/models/measure.model.ts

No change to package.json was detected. No package manager install will be executed.
   update src/models/index.ts

Model Measure se ha/han creado en src/models
```

- Create the **Telemetry Model**:
```
lb4 model telemetry
? Seleccione la clase base de modelo Model (A business domain object)
? ¿Desea permitir propiedades (de formato libre) adicionales? No
Model Telemetry se creará en src/models/telemetry.model.ts

Vamos a añadir una propiedad a Telemetry
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: accX
? Tipo de propiedad: number
? ¿Es accX la propiedad de ID? Yes
? ¿accX se genera automáticamente? (Y/n) 
➜  uniovi-robotics-workshop-backend lb4 model telemetry
? Seleccione la clase base de modelo Model (A business domain object)
? ¿Desea permitir propiedades (de formato libre) adicionales? No
Model Telemetry se creará en src/models/telemetry.model.ts

Vamos a añadir una propiedad a Telemetry
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: accX
? Tipo de propiedad: number
? ¿Es accX la propiedad de ID? No
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Telemetry
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: accY
? Tipo de propiedad: number
? ¿Es accY la propiedad de ID? No
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Telemetry
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: accZ
? Tipo de propiedad: number
? ¿Es accZ la propiedad de ID? No
? ¿Es necesario?: Yes

Vamos a añadir otra propiedad a Telemetry
Especifique un nombre de propiedad vacío cuando haya terminado

? Especifique el nombre de propiedad: 
   create src/models/telemetry.model.ts

No change to package.json was detected. No package manager install will be executed.
   update src/models/index.ts

Model Telemetry se ha/han creado en src/models
```

- Create the **MongoDB Datasource**:
```
lb4 datasource
? Nombre de Datasource: iot
? Seleccione el conector para iot:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database): 
? host: localhost
? port: 27017
? user: iotuser
? password: [hidden]
? database: iotdb
? Feature supported by MongoDB v3.1.0 and above: Yes
   create src/datasources/iot.datasource.ts

No change to package.json was detected. No package manager install will be executed.
   update src/datasources/index.ts

Datasource Iot se ha/han creado en src/datasource
```

- Create **Measure Repository**:
```
lb4 repository
? Select the datasource IotDatasource
? Seleccione el modelo o modelos para los que desea generar un repositorio Measure
   create src/repositories/measure.repository.ts

No change to package.json was detected. No package manager install will be executed.
   update src/repositories/index.ts

Repository MeasureRepository se ha/han creado en src/repositories
```

- Create **Measure Controller**:
```
lb4 controller
? Nombre de clase Controller: Measure
Controller Measure se creará en src/controllers/measure.controller.ts

? ¿Qué especie de controlador desea generar? Controlador REST con funciones CRUD
? ¿Cuál es el nombre del modelo que se va a utilizar con este repositorio CRUD? Measure
? ¿Cuál es el nombre del repositorio CRUD? MeasureRepository
? ¿Cuál es el nombre de la propiedad de ID? id
? ¿Cuál es el tipo del ID? string
? ¿Se omite el ID cuando se crea una instancia nueva? Yes
? ¿Cuál es el nombre de la vía de acceso HTTP base de las operaciones CRUD? /measures
   create src/controllers/measure.controller.ts

No change to package.json was detected. No package manager install will be executed.
   update src/controllers/index.ts

Controller Measure se ha/han creado en src/controllers
```

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
ENV_FILE=.env.local npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
