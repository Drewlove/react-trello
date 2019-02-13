import React, { Component } from 'react';
import List from './composition/List'
import './App.css';

class App extends Component {
  state = {
    lists: this.props.store.lists,
    allCards: this.props.store.allCards,
  }

  onDeleteItem = itemKey => { 
    this.setState({
      lists: this.updateLists(itemKey) 
    }) 
    this.setState({
      allCards: this.omit(this.state.allCards, itemKey)  
    })
  }

omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  updateLists(itemKey){
    let {lists} = this.state
    return lists.map(list => {
      list.cardIds = list.cardIds.filter(item => item !== itemKey);
      return list    
    })  
  }

  onAddCard = listIndex => {
    let newCard = this.newRandomCard();

    const newLists = this.state.lists.map(list => {
      if (list.id === listIndex) {
        list.cardIds.push(newCard.id)
      }
      return list
    })
    this.setState({
        lists: newLists,
        allCards: {
          ...this.state.allCards,
          [newCard.id]: newCard
        }
    })
  }
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteItem = {this.onDeleteItem}
              onAddCard = {()=>this.onAddCard(list.id)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;