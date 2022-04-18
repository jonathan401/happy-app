import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Jokes from './components/Jokes';

class App extends Component {
  state = {
    categories: [
      { category: 'Any' },
      { category: 'Programming' },
      { category: 'Misc' },
      { category: 'Dark' },
      { category: 'Pun' },
      { category: 'Spooky' },
      { category: 'Christmas' }
    ],
    types: [{ type: 'Single' }, { type: 'Twopart' }]
  };
  render() {
    const { categories, types } = this.state;
    return (
      <main>
        <Routes>
          <Route
            path="/"
            element={<Category categories={categories} types={types} />}
          />
          <Route path="/category/:category" element={<Jokes />} />
          <Route path="/type/:type" element={<Jokes />} />
        </Routes>
      </main>
    );
  }
}

export default App;
