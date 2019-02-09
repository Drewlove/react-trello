import React from 'react'; 
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer'
import List from './List'; 
import STORE from '../store'; 

describe('List tests', () => {
    it('List component: renders without crashing', ()=> {
        const div = document.createElement('div'); 
        let cards=STORE.lists[0].cardIds.map(id => STORE.allCards[id])
    
        ReactDOM.render(<List key='1' header='2' cards={cards}/>, div); 
        ReactDOM.unmountComponentAtNode(div)
    })
    
    it('List component: renders UI correctly', ()=> {
        let cards=STORE.lists[0].cardIds.map(id => STORE.allCards[id])
        const tree = renderer
        .create(<List key='1' header='2' cards={cards}/>)
        .toJSON(); 
        expect(tree).toMatchSnapshot()
    })
})

