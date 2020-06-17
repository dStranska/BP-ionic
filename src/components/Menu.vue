<template>
    <ion-menu side="start"  menu-id="main" content-id="content">
        <ion-header>
            <ion-toolbar translucent>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>

                <ion-item v-on:click="myRedirect('login')">
                    <ion-icon name="mail" slot="start"></ion-icon>
                    <ion-label>Login</ion-label>
                </ion-item>
                <ion-item v-on:click="myRedirect('login')">
                    <ion-icon name="warning" slot="start"></ion-icon>
                    <ion-label>List</ion-label>
                </ion-item>
                <ion-item v-on:click="myRedirect('login')">
                    <ion-icon name="mail" slot="start"></ion-icon>
                    <ion-label>About</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>

</template>

<script>
    export default {
        name: "Menu",
        methods:{
            myRedirect(str){
                console.log(str)
                //this.$router.push({path: `/${str}`})

            }
        }
    }
</script>

<style scoped>

</style>
