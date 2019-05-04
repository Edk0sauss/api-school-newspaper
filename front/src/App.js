import React from 'react';
import {Segment} from 'semantic-ui-react';
import ToucanTable from './ToucanTable';
import FormToucan from './FormToucan'
import './App.css';

function App() {
  return (
    <div>
    <Segment padded style={{margin:"3%"}}>
      <FormToucan />
    </Segment>
    <Segment textAlign="center" padded style={{margin:"3%"}}>
      <ToucanTable/>
    </Segment>
    </div>
  );
}

export default App;
