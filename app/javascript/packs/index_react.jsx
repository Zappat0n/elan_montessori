// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import { hot } from 'react-hot-loader/root';
import React from 'react'
import ReactDOM from 'react-dom'
import BottomNavigationBar from '../components/BottomNavigationBar'
import '../stylesheets/application.scss';

const Index = () => (
  <div>
    <BottomNavigationBar />
    <p>Hi</p>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.querySelector('.index_main'),
  )
})

export default hot(module)(Index);