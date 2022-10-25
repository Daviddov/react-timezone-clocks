import React, { Component } from 'react';

import AllClocks from './components/AllClocks';

class App9 extends Component {

    constructor(props) {
        super(props);

        console.log('app constructor');
        
    }

    componentDidMount() {
        console.log('app Mounted');
        
    }

    render() { 
        console.log('app renderd');
        return ( 
            <div>
              <AllClocks />
            </div>
         );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
    componentWillUnmount() {
        console.log('app unmount');
    }
}
 
export default App9;