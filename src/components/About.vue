<template>
    <ion-content>
        <ion-button v-on:click="log('ABOUT-TEST')">Jsem tu a tohle je moje APP</ion-button><br />
        <router-link to="/">Home</router-link>
    </ion-content>
</template>
<script>
    export default {
        name: 'About',
        mounted() {


        },
        methods:{
            log(text){
                alert(text)
            }
        }

    }
</script>
