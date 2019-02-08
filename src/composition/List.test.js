import React from 'react'; 
import ReactDOM from 'react-dom'; 
import List from './List'; 
import STORE from '../store'; 

it('renders correctly', ()=> {
    const div = document.createElement('div'); 
     

    ReactDOM.render(<List cards = {cards} />, div); 
    ReactDOM.unmountComponentAtNode(div)
})