import React from 'react';
import {QuestionStore} from './stores/question-store.js';

import ProductList from './components/phone-list.react';


var mountNode = document.getElementById("app");

React.render(<ProductList></ProductList>, mountNode);
