import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";

const InputField = ({value, onchangeText }) => {
  return (
    <div>
      < AceEditor 
        mode="markdown"
        theme="github"
        value = {value}
        onChange = {onchangeText}/>
    </div>
  );
}

export default InputField;