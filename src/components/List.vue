<template>
    <ion-content>
        <ion-list>
            <ion-item v-for="i in items" :key="i.subject">
                <ion-label>
                    <h2>{{i.subject}}</h2>
                    <h3>Moje znamka: {{i.score}}</h3>
                </ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                items: [
                    {subject: 'MAT', score: 4},
                    {subject: 'PSA', score: 4},
                    {subject: 'WT1', score: 1},
                    {subject: 'PS1', score: 6},
                    {subject: 'MAT1', score: 4},
                    {subject: 'DSA', score: 2},
                    {subject: 'ZEL', score: 5},
                    {subject: 'MAT2', score: 5},
                    {subject: 'IOS', score: 5},
                    {subject: 'SWI', score: 5},
                    {subject: 'IS', score: 5},
                    {subject: 'PTPa', score: 5}
                ]
            }
        }
    }
</script>
