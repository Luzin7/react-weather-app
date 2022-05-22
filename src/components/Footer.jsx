import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <footer>
          <span>&copy; {year} Luan Victor</span>
      </footer>
    );
  }
}
