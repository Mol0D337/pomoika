<template>

    <div class="lol">
        <h1 class="h1">SIGN UP</h1>

        <Input
                value=""
                label="Email"
                placeholder=""
                type="text"
        />

        <Input
                value=""
                label="Password"
                placeholder=""
                type="password"
        />


        <button class="btn waves-effect deep-purple darken-4" type="submit" name="action">SIGN UP
            <i class="material-icons right">send</i>
        </button>
    </div>

</template>

<script>
    import Input from "../components/Input";

    export default {
        name: "SignUp",
        components: {Input, }
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
