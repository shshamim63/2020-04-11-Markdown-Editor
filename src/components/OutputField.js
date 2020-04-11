import React from 'react';

let marked = require('marked');

const OutputField = ({value}) => {
  return(
    <div dangerouslySetInnerHTML ={{__html: marked(value)}}></div>
  );
};

export default OutputField;