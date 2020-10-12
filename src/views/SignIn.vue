<template>

    <form class="lol" @submit.prevent="enterUser">

        <h1 class="h1">SIGN IN</h1>

        <div class="div" :class="{ 'form-group--error': $v.user.email.$error }">
            <Input value="" label="Email" placeholder="" type="email" v-model="$v.user.email.$model"/>
        </div>
        <div class="error" v-if="!$v.user.email.required">Email is required</div>
        <div class="error" v-if="!$v.user.email.minLength">Email must have at least {{$v.user.email.$params.minLength.min}} letters.</div>

        <div class="div" :class="{ 'form-group--error': $v.user.password.$error }">
            <Input value="" label="Password" placeholder="" type="password" v-model="$v.user.password.$model"/>
        </div>
        <div class="error" v-if="!$v.user.password.required">Password is required</div>
        <div class="error" v-if="!$v.user.password.minLength">Password must have at least {{$v.user.password.$params.minLength.min}} letters.</div>

        <div class="wrapper" v-if="error">
            <div class="alert">ERROR</div>
        </div>

        <div class="bbtn">
            <button class="btn" type="submit" name="action" v-if="!$v.user.password.$invalid && !$v.user.email.$invalid">SIGN IN</button>
        </div>
    </form>

</template>

<script>
import Input from "../components/Input";
import { required, minLength, between } from 'vuelidate/lib/validators';

    export default {
        name: "SignIn",
        components: { Input, required, minLength, between },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
                error: false,
            }
        },
        validations: {
            user: {
                email: {
                    required,
                    minLength: minLength(4)
                },
                password: {
                    required,
                    minLength: minLength(6)
                }
            },
        },
        methods: {
            enterUser() {
                if (this.user.email === '' || this.user.password === '') {
                    this.error = true;
                } else {
                    const lol = JSON.parse(localStorage.getItem('users'));
                    const user = lol.find(user => user.email === this.user.email);
                    localStorage.setItem('user', JSON.stringify(user));
                    this.$router.push({name: 'home'});
                }
            },
        },
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
.error {
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 30px;
    color: #2F4F4F;
    text-decoration: none;
}
</style>
