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
import axios from 'axios';
import Input from "../components/Input";
import { required, minLength, between } from 'vuelidate/lib/validators';

    export default {
        name: "SignIn",
        components: { Input, required, minLength, between,axios },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
                error: false,
                users: [],
            }
        },

        async created () {
            await fetch('http://localhost:3000/users')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    this.users = data;
                })
                .catch(e => {
                    console.log(e, 'error');
                })
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
                    const lol = JSON.stringify(this.user);
                    const user = this.users.find(user => {
                        localStorage.setItem('user', this.user.email);
                        console.log(user, 'user');
                        return user.email === this.user.email
                    } );
                    if (user) {
                        this.$router.push({name: 'home'});
                    } else {
                        alert('pepe')
                    }

                    // axios.post('http://localhost:3000/user', this.user )
                    //     .then((response) => {
                    //         this.$router.push({name: 'home'});
                    //         console.log(response);
                    //     })
                    //     .catch((error) => {
                    //         alert('pepe')
                    //         console.log(error);
                    //     });
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
