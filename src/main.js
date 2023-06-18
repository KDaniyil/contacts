import App from './App.vue'
import { createApp } from 'vue'
import FriendContact from './components/FriendContact.vue'

const app = createApp(App)
app.component('friend-contact', FriendContact)
app.mount('#app')
