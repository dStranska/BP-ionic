<template>
    <ion-app id="app">

        <ion-router-outlet id="menuContent">
            <menu-component></menu-component>
        </ion-router-outlet>


        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>
                    My ZUPA test aplication
                    <ion-icon name="airplane-outline"></ion-icon>
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="content">
            <router-view />
        </ion-content>

    </ion-app>

</template>

<script>

    import MenuComponent from "./components/Menu";


    export default {
        name: 'App',
        mounted() {

        },
        components: {MenuComponent}
    }

</script>

<style>

</style>
