import React from 'react'; 
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer'
import Card from './Card'; 

describe('card test', ()=> {
    it('renders without crashing', ()=> {
        const div = document.createElement('div'); 
    
        ReactDOM.render(<Card />, div); 
        ReactDOM.unmountComponentAtNode(div); 
    })
    
    it('renders UI as expected', ()=> {
        const tree = renderer
        .create(<Card title='new title' content='new content'/>)
        .toJSON(); 
        expect(tree).toMatchSnapshot(); 
    })
})
