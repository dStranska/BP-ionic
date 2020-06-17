<template>
    <ion-content>
        <ion-input
                v-on:ionInput="user.login=$event.target.value"
                v-bind:value="user.login"
                placeholder="Login">
        </ion-input>
        <ion-input v-on:ionInput="user.password=$event.target.value"
                   v-bind:value="user.password" placeholder="Password">

        </ion-input>

        <ion-button v-on:click="login()">Login</ion-button>
    </ion-content>
</template>
<script>
    export default {
        name: 'Login',
        mounted() {
            console.log('v-model tu nefunguje :(');
        },
        methods: {
            login() {
                if (this.user.login === 'admin' && this.user.password === 'pass') {

                    this.$router.push('/list');
                } else {
                    console.log("bad");

                }
            }
        },
        data() {
            return {
                user: {
                    login: 'admin',
                    password: null
                }
            }
        }

    }
</script>
<style>

</style>
