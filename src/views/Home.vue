<template>
    <div>
        <div class="post" v-for="post in posts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                posts: [],

            };
        },
        async mounted() {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=5'
            );
            const posts = await res.json();
            this.posts = posts;
        }

    }
</script>

<style scoped>
    .post {
        margin: 25px 450px;
        border: 2px solid #ccc;
        border-radius: 5px;
        text-align: center;
        padding: 20px;
    }
</style>
