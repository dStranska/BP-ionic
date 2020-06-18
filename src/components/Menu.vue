<template>
    <ion-menu side="start"  menu-id="main" content-id="content" ref="mainMenu">
        <ion-header>
            <ion-toolbar translucent>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>

                <ion-item v-on:click="myRedirect('login')">
                    <MailIcon slot="start" />
                    <ion-label>Login</ion-label>
                </ion-item>
                <ion-item v-on:click="myRedirect('list')">
                    <WarningIcon slot="start" />
                    <ion-label>List</ion-label>
                </ion-item>
                <ion-item v-on:click="myRedirect('about')">
                    <MailIcon slot="start" />
                    <ion-label>About</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>

</template>

<script>
    import MailIcon from 'vue-ionicons/dist/ios-mail'
    import WarningIcon from 'vue-ionicons/dist/ios-warning'

    export default {
        name: "Menu",
        components: { MailIcon, WarningIcon },
        methods:{
            myRedirect(str){
                this.$router.push({name: str})
                this.$refs.mainMenu.close("main")
            }
        }
    }
</script>

<style scoped>

</style>
