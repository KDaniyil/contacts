<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong> {{ phoneNumber }}</li>
            <li><strong>email: </strong> {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFiend">Delete</button>
    </li>
</template>

<script>
export default {
    props:["isFavorite", 'name', 'phoneNumber', 'emailAddress','id'],
    // props:{
    //     isFavorite:{
    //         type: String,
    //         required: false,
    //         default: 'false', 
    //     }
    // },
    emits:['toggle-favorite', 'delete-friend'],
    // emits:{
    //     'toggle-favorite': function(id){
    //         if(id){
    //             return true
    //         } else{
    //             console.warn('Id is missing')
    //             return false
    //         }
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
            this.$emit('toggle-favorite', this.id);
        },
        deleteFiend(){
            this.$emit('delete-friend', this.id)
        }
    }
}
</script>