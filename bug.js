This error occurs when you try to access a component's state or props before it has mounted.  This commonly happens inside the constructor or other lifecycle methods that run before the component's state is fully initialized.

```javascript
// Incorrect: Trying to access props before mount
constructor(props) {
super(props);
console.log(this.props.user.name); // Error: Cannot read properties of undefined
}

// Incorrect: Trying to access state before mount
componentDidMount(){
  console.log(this.state.count) //Error: Cannot read properties of undefined
}
```