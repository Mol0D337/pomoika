<template>

    <div class="lol">
        <h1 class="h1">SIGN UP</h1>

        <InputEmail/>
        <PasswordInput/>

        <button class="btn waves-effect deep-purple darken-4" type="submit" name="action">SIGN UP
            <i class="material-icons right">send</i>
        </button>
    </div>

</template>

<script>
    import InputEmail from "../components/InputEmail";
    import PasswordInput from "../components/PasswordInput";

    export default {
        name: "SignUp",
        components: {InputEmail, PasswordInput}
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
