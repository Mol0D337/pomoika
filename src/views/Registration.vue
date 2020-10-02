<template>
    <div class="lol">
        <h1 class="h1">SIGN UP</h1>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" placeholder="lol">
                        <my-input type="email" placeholder="Email" v-model="email">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
                <button class="btn waves-effect purple darken-3" type="submit" name="action">Sign up
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",

        data() {
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    .h1 {
        text-align: center;
    }
    .lol {
        margin: 180px 250px 0;
    }
</style>
