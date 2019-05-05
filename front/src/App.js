import React from 'react';
import {Segment, SegmentGroup} from 'semantic-ui-react';
import ToucanTable from './ToucanTable';
import FormToucan from './FormToucan'
import './App.css';

function App() {
  return (
    <Segment.Group  >
      <Segment padded style={{margin:"3%"}}>
      <h2 style={{textAlign:"center"}}>Rajout de Toucan</h2>
        <FormToucan />
      </Segment>
      <Segment textAlign="center" padded style={{margin:"3%"}} >
      <h2>Les Toucans</h2>
        <ToucanTable style={{margin:"50px"}}/>
      </Segment>
    </Segment.Group>
  );
}

export default App;
