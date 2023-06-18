<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{ phoneNumber }}</li>
            <li><strong>email: </strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props:["isFavorite", 'name', 'phoneNumber', 'emailAddress'],
    // props:{
    //     isFavorite:{
    //         type: String,
    //         required: false,
    //         default: 'false', 
    //     }
    // },
    data() {
        return {
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite(){
            this.friendIsFavorite = !this.friendIsFavorite
        }
    }
}
</script>