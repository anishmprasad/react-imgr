# react-imgr

A Progressive Image component for React.

### Installation

```

// with npm with react-extensions
$ npm install react-extensions

// with npm with react-compounds
$ npm install @react-compounds/image  --save

// with yarn with react-compounds
$ yarn add @react-compounds/image

// with npm
$ npm install react-imgr  --save

// with yarn
$ yarn add react-imgr
```

### Usage

This is the basic usage of react-dropdown

```Javascript
import Image from 'react-imgr';
import 'react-imgr/dist/styles.min.css'

<Image
    src='image.jpg'
    preloadSrc='preloadimage.jpg'
    containerStyle={{
	width: '100%',
	height: '280px'
    }}
    initialBlur
    alt='alt tag added here'
    scale
    placeholder='placeholder.jpg'
/>
```

### Props

| Name           | Type      | Required | Description                      |
| -------------- | --------- | -------- | -------------------------------- |
| src            | `string`  | `true`   | the src of image                 |
| preloadSrc     | `string`  | `false`  | the src image preload src        |
| containerStyle | `object`  | `false`  | container css styles             |
| initialBlur    | `boolean` | `true`   | the src initial state            |
| alt            | `string`  | `true`   | the src alt tag                  |
| scale          | `boolean` | `false`  | scale the src image              |
| placeholder    | `string`  | `true`   | the src of the placeholder image |

### Demo

[codesandbox.io](https://codesandbox.io/embed/xj5p7lzlnp)

[anishmprasad.com](https://anishmprasad.com/opensource/react-imgr)

[anishmprasad.github.io](https://anishmprasad.github.io/opensource/react-imgr)

### TODO

-   [x] Optimization
-   [x] CSS Polishing and Transitions
-   [x] Documentation
-   [x] Production Ready
-   [ ] Code Cleanup

### License

Apache 2.0
