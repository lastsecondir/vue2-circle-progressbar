# Vue2 Circle Progressbar

 highly customizable circle progressbar for vue 2

 if you want to use the same component in vue 3 project, go to [vue3-circle-progressbar](https://www.npmjs.com/package/@lastsecond/vue3-circle-progressbar).

## Installation
npm: `npm install @lastsecond/vue2-circle-progressbar`.

yarn: `yarn add @lastsecond/vue2-circle-progressbar`.

## How to use
The component can be registered as both global and local.

### Global registration

add the component and its style to vue instance in `main.js`.

```js
import Vue from 'vue';
import CircleProgressbar from '@lastsecond/vue2-circle-progressbar';
import '@lastsecond/vue2-circle-progressbar/style.css';

...

Vue.use(CircleProgressbar);

...
```

now circle progressbar can be used as a component in the vue template.

```vue
<template>
  <div>
    my circle progressbar: <CircleProgressbar :value="progressValue" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        progressValue: 35,
      }
    },
  }
</script>
```

### Local registration

import the component and its style to the vue component you want to use

```vue
<template>
  <div>
    my circle progressbar: <CircleProgressbar :value="progressValue" />
  </div>
</template>

<script>
  import { CircleProgressbar } from '@lastsecond/vue2-circle-progressbar';
  import '@lastsecond/vue2-circle-progressbar/style.css';

  export default {
    components: {
      CircleProgressbar,
    },
    data() {
      return {
        progressValue: 35,
      }
    },
  }
</script>
```

## Props

| prop              | type      | default       | description                                   |
| ----------------- | --------- | ------------- | --------------------------------------------- |
| value             | `Number`  | `0`           | value should be a number between 0 to 100     |
| stroke-color      | `String`  | `'lightgrey'` | color of empty progressbar                    |
| progress-color    | `String`  | `'#FE7A67'`   | color of progressbar                          |
| background-color  | `String`  | `'white'`     | circle background color                       |
| stroke-width      | `Number`  | `20`          | progressbar width                             |
| container-width   | `Number`  | `200`         | svg viewbox size                              |
| show-default-text | `Boolean` | `false`       | show `{value}%` in center of default template |

## Slots

| slot    | description                                 |
| ------- | ------------------------------------------- |
| default | place of this slot is inside of progressbar |

## Example

```vue
<template>
  <CircleProgressbar 
    :value="30"
    stroke-color="#f00"
    progress-color="yellow"
    background-color="#000"
    :stroke-width="10"
    :container-width="100"
  >
    <div class="custom-class">this text is inside of svg</div>
  </CircleProgressbar>
</template>
```
