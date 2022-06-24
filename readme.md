# Teste QA

## Tecnologias Usadas

### Core

- TypeScript

### Framework visual base

- WbdriverIO
- Appium
- Mocha
- Allure Report

### Testes

- E2E

### Linting / Formater

- ESLint

## Pré-requisitos

- Instalar nvm (node version manager)

- Instalar node v16.x.x

- Instalar Yarn

- Instalar o Java JDK 11 e Declarar JAVA_HOME

- Instalar XCode 

- Instalar Android Studio e SDK's do Android

## Instalando QA Testes

### Usando yarn

- Rode `yarn` e `yarn install` para instalar todas as dependencias 

### Usando npm

- Rode `npm install` para instalar todas as dependencias

## Rodando App Ecommerce

### Usando yarn

- Rode `yarn react-native start --reset-cache` para inicializar o servidor de desenvolvimento
- Rode em outro terminal `yarn react-native run-android` ou `yarn react-native run-ios` para instalar e inicializar o app no emulador.

### Usando npm

- Rode `npx react-native start --reset-cache` para inicializar o servidor de desenvolvimento
- Rode em outro terminal `npx react-native run-android` ou `npx react-native run-ios` para instalar e inicializar o app no emulador.

## Gerando APK e ABB

### Generate APK

- Abrir pasta Android
- Rode `./gradlew assembleRelease`
- O APK será criado e adicionado na pasta Android/app/build/outputs/apk/release

### Generate AAB

- Abrir pasta Android
- Rode `./gradlew bundleRelease`
- O APK será criado e adicionado na pasta Android/app/build/outputs/bundle/release

## Lincença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.