# vue-serial-input

[![codecov](https://codecov.io/gh/potato4d/vue-serial-input/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/vue-serial-input)

Simple serialcode input form for Vue.js.

[![Image from Gyazo](https://i.gyazo.com/a6499864213fc4b0811ed00ac6d3c667.gif)](https://gyazo.com/a6499864213fc4b0811ed00ac6d3c667)

## Installation

```bash
$ yarn add vue-serial-input # or npm install -S
```

## Usage

```html
<template>
  <vue-serial-input v-model="val" />
</template>

<script>
import VueSerialInput from 'vue-serial-input'
export default {
  components: {
    VueSerialInput
  }
}
</script>
```

## Contributing

```bash
$ yarn # Install deps
$ yarn serve # Launch development server
$ yarn test:unit # Run unit test with jest
```

## Demo

[https://potato4d.github.io/vue-serial-input/](https://potato4d.github.io/vue-serial-input/)

## LICENSE

MIT
