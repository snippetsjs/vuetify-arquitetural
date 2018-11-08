import Home from './components/Home'
import Contacts from './components/Contacts'
import Chats from './components/Chats'

export const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats
  }
]
