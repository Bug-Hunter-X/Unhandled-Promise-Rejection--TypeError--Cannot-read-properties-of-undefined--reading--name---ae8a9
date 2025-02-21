# React Native: Accessing state or props before component mount

This repository demonstrates a common error in React Native development: attempting to access component state or props before the component has fully mounted.  This often leads to `TypeError: Cannot read properties of undefined` errors.

The `bug.js` file showcases the erroneous code, while `bugSolution.js` provides the corrected implementation.

## How to reproduce:

1. Clone this repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run the app on an emulator or device.
4. Observe the error in the console.

## Solution:

The solution is to ensure that you access `this.props` and `this.state` only after the component has mounted.  This typically means doing so within the `componentDidMount` lifecycle method, or using optional chaining and nullish coalescing to handle cases where props or state might not be initialized yet.