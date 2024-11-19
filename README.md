# @abhisek_goldy/react-address-picker 🚀

[![npm version](https://img.shields.io/npm/v/@abhisek_goldy/react-address-picker.svg)](https://www.npmjs.com/package/@abhisek_goldy/react-address-picker)
[![downloads](https://img.shields.io/npm/dm/@abhisek_goldy/react-address-picker.svg)](https://www.npmjs.com/package/@abhisek_goldy/react-address-picker)
[![license](https://img.shields.io/npm/l/@abhisek_goldy/react-address-picker.svg)](https://www.npmjs.com/package/@abhisek_goldy/react-address-picker)

React Library for Country, State, City and Phone code

## Installation 📦

To install this package, run:

```
npm install @abhisek_goldy/react-address-picker
```
or with yarn:

```
yarn add @abhisek_goldy/react-address-picker
```

## Usage 💡

Here's how you can use this package:

### Example Country

```
import AddressPicker from "react-address-picker";

<AddressPicker
    type="country" //required
    placeholder="Search for a Country..." //optional
    value="India" //optional
    onChange={(obj) => console.log(obj?.id)} //optional
/>
```

### Example State

```
<AddressPicker
    type="state" //required
    placeholder="Search for a State..." //optional
    onChange={(obj)=> console.log(obj?.id)} //optional
/>
```

### Example City

```
<AddressPicker
    type="city"
    placeholder="Search for a State..." //optional
    onChange={(obj)=> console.log(obj?.id)} //optional
/>
```

### Example Phone code
```
<AddressPicker
    type="code"
    placeholder="Search for a Phone code..." //optional
    onChange={(obj) => console.log(obj)}
/>
```


## Props 🛠️

Below are the props supported by this component:

| **Name**              | **Type**   | **Default Value** | **Required?** |
|-----------------------|------------|-------------------|---------------|
| `type`                | `string`   | `null`            | Yes           |
| `value`               | `string`   | `null`            | No            |
| `placeholder`         | `string`   | `"Search for a.."`| No            |
| `emptyString`         | `string`   | `No Record Found` | No            |



## Function 🛠️

Below are the props function supported by this component:

onChange

    onChange={(val)=>console.log(val)}


## Style 🛠️

| **Name**                       | **Type**   | **Default Value** | **Required?** |
|--------------------------------|------------|-------------------|---------------|
| `containerStyle`               | `object`   | `null`            | No            |
| `inputStyle`                   | `object`   | `null`            | No            |
| `itemStyle`                    | `object`   | `null`            | No            |
| `containerClassName`           | `string`   | ``                | No            |
| `dropdownContainerClassName`   | `string`   | ``                | No            |
| `inputClassName`               | `string`   | ``                | No            |
| `itemClassName`                | `string`   | ``                | No            |


License 📝

This project is licensed under the MIT License.

Authors ✍️

Abhisek Goldy - Creator and Maintainer.

Support ❤️
If you like this project, please consider giving it a ⭐ on GitHub!