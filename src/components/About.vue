<template>
    <ion-content>
        <ion-button v-on:click="log('ABOUT-TEST')">Jsem tu a tohle je moje APP</ion-button>
        <router-link to="/">Home</router-link>
    </ion-content>
</template>
<script>
    export default {
        name: 'About',
        mounted() {
            console.log('here');
            alert('s')
        },
        methods:{
            log(text){
                alert(text)
            }
        }

    }
</script>
