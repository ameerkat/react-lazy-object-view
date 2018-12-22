# react-lazy-object-view
react-lazy-object-view is a react component wrapper for [lazy-object-view](https://github.com/ameerkat/lazy-object-view).

## Example Usage
```
import React, { Component } from 'react';
import ReactLazyObjectView from 'react-lazy-object-view';

class App extends Component {
  render() {
    const toRender = { "test": "object", "nested": { "yup": 1337.0 } };

    return (
        <ReactLazyObjectView data={toRender} options={{ showLoadingIndicator: true }} />
    );
  }
}

export default App;
```

All options are listed in the lazy-object-view documentation and are on the Typescipt interface RenderOptions.