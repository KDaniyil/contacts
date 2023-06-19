import App from './App.vue'
import { createApp } from 'vue'
import FriendContact from './components/FriendContact.vue'
import NewFriendVue from './components/NewFriend.vue'

const app = createApp(App)
app.component('friend-contact', FriendContact)
app.component('new-friend', NewFriendVue)
app.mount('#app')
