<template>
    <nav class="lol">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">НЮХАЙ БЕБРУ</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link
                        tag="li"
                        to="/signin"
                        exact=""
                        active-class="active"
                >
                    <a href="#">Login</a>
                </router-link>

                <router-link
                        tag="li"
                        to="/registration"
                        active-class="active"
                >
                    <a href="#">Registration</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",


    }

</script>

<style scoped>
.lol {
    padding: 0 50px;

}
</style>
