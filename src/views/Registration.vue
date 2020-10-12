<template>

    <form class="lol" @submit.prevent="registerUser">
        <h1 class="h1">SIGN UP</h1>

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

        <div class="div" :class="{ 'form-group--error': $v.user.confirmPassword.$error }">
            <Input value="" label="Repeat Password" placeholder="" type="password" v-model="$v.user.confirmPassword.$model"/>
        </div>
        <div class="error" v-if="!$v.user.confirmPassword.required">Password is required</div>
        <div class="error" v-if="!$v.user.confirmPassword.minLength">Password must have at least {{$v.user.confirmPassword.$params.minLength.min}} letters.</div>

        <div class="wrapper" v-if="error">
            <div class="alert">ERROR</div>
        </div>

        <div class="bbtn">
            <button class="btn" type="submit" name="action" v-if="!$v.user.password.$invalid && !$v.user.email.$invalid && !$v.user.confirmPassword.$invalid">SIGN IN</button>
        </div>
    </form>

</template>

<script>
    import Input from "../components/Input";
    import { required, minLength, between, sameAs } from '../../node_modules/vuelidate/lib/validators';

    export default {
        name: "SignUp",
        components: {Input, required, minLength, between, sameAs },
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
        validations: {
            user: {
                email: {
                    required,
                    minLength: minLength(4)
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                confirmPassword: {
                    required,
                    minLength: minLength(6)
                }
            }
        },
        methods: {
            registerUser() {
                if(this.user.password !== this.user.confirmPassword || this.user.email === '') {
                    this.error = true;
                } else {
                    const lol = JSON.parse(localStorage.getItem('users')) || [];
                    lol.push(this.user);
                    localStorage.setItem('users', JSON.stringify(lol));
                    this.$router.push({name: 'SignIn'});
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
    .error {
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        line-height: 30px;
        color: #2F4F4F;
        text-decoration: none;
    }
</style>
