<template>

    <form class="lol" @submit.prevent="registerUser">
        <h1 class="h1">SIGN UP</h1>
        <Input value="" label="Email" placeholder="" type="text" v-model="user.email"/>
        <Input value="" label="Password" placeholder="" type="password" v-model="user.password"/>
        <Input value="" label="Repeat Password" placeholder="" type="password" v-model="user.confirmPassword"/>
        <div class="wrapper" v-if="error">
            <div class="alert">ERROR</div>
        </div>
        <div class="bbtn">
            <button class="btn" type="submit" name="action">SIGN UP</button>
        </div>
    </form>

</template>

<script>
    import Input from "../components/Input";


    export default {
        name: "SignUp",
        components: {Input, },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    confirmPassword: '',
                },
                error: false,
            }
        },
        methods: {
            registerUser() {
                if(this.user.password !== this.user.confirmPassword || this.user.email === '') {
                    this.error = true;
                } else {
                    localStorage.setItem('SignUP', JSON.stringify(this.user))
                    alert('lol')
                }
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
    }

    .wrapper {
        display: flex;
        justify-content: center;

    }

    .alert {
        text-align: center;
        min-width: 350px;
        margin-bottom: 25px;
        background: peru;
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        line-height: 35px;
        color: #FFE4E1;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        padding: 5px 20px;
    }
</style>
