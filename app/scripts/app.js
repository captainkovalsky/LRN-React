import React from 'react';
import PhoneList from './components/phone/list.react';

var mountNode = document.getElementById("content");

React.render(<PhoneList></PhoneList>, mountNode);
