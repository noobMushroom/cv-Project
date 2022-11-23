import React from 'react';
import { Component } from 'react';
import Form from './components/Form';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header/>
        <Form />
        <Footer/>
      </main>
    );
  }
}

export default App;
