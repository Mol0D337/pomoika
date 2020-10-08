<template>

    <form class="lol" @submit.prevent="enterUser">
        <h1 class="h1">SIGN IN</h1>
        <Input value="" label="Email" placeholder="" type="text" v-model="user.email"/>
        <Input value="" label="Password" placeholder="" type="password" v-model="user.password"/>
        <div class="bbtn">
            <button class="btn" type="submit" name="action">SIGN IN</button>
        </div>
    </form>

</template>

<script>
import Input from "../components/Input";


    export default {
        name: "SignIn",
        components: { Input, },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            enterUser() {
                const lol = JSON.parse(localStorage.getItem('userr')) || [];
                lol.push(this.user);
                localStorage.setItem('userr', JSON.stringify(lol));
                this.$router.push({name: 'home'});
            }
        }
    }
</script>

<style scoped>
    .h1 {
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-size: 35px;
        line-height: 70px;
        color: #2F4F4F;
        text-decoration: none;
    }
    .lol {
        margin: 180px 250px 0;
    }
    .bbtn {
        display: flex;
        justify-content: center;

    }
    button {
        min-width: 150px;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        line-height: 35px;
        color: #FFE4E1;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        background: #FFA07A;
        list-style: none;
    }

</style>
