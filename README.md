# react-imgr

Progressive Image component for React.

### Installation

```
// with npm with react-compounds
$ npm install @react-compounds/dropdown  --save

// with yarn with react-compounds
$ yarn add @react-compounds/dropdown

// with npm
$ npm install react-imgr  --save

// with yarn
$ yarn add react-imgr
```

### Usage

This is the basic usage of react-dropdown

```Javascript
import Image from 'react-imgr';

<Image
    src='image.jpg'
    preloadSrc='preloadimage.jpg'
	containerStyle={{
		width: '100%',
		height: 280
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

### TODO

-   [x] Production Level
-   [ ] CSS Polishing and Transitions
-   [ ] Documentation

### License

Apache 2.0
