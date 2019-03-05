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
	impressionId='M_f68878c3-688f-4897-bc37-1b0e9b005637_1.FFCP6EYRO2V6'
	containerStyle={{
		width: '100%',
		height: 280
	}}
	initialBlur={true}
	alt='02-03-2019-Slot-7'
    scale={true}
    placeholder='placeholder.jpg'
/>
```

**Options**

sample option 1

```JavaScript

const options = [
  'one', 'two', 'three'
];
```

sample option 2

```JavaScript

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
   type: 'group', name: 'group1', items: [
     { value: 'three', label: 'Three', className: 'myOptionClassName' },
     { value: 'four', label: 'Four' }
   ]
  },
  {
   type: 'group', name: 'group2', items: [
     { value: 'five', label: 'Five' },
     { value: 'six', label: 'Six' }
   ]
  }
];
```

### TODO

-   [x] Production Level
-   [ ] CSS Polishing and Transitions
-   [ ] Documentation
-   [ ] etc..

**Run example**

```
$ npm start
```

### License

MIT
