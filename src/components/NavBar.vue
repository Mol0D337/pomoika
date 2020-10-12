<template>
    <nav class="lol">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">НЮХАЙ БЕБРУ</router-link>
            <div class="right" v-if="email.ength">
                {{email}}
            </div>
            <ul v-else id="nav-mobile" class="right">
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
        data() {
            return {
                email: ''
            }
        },

        created() {
            if (localStorage.getItem('user')) {
                this.email = JSON.parse(localStorage.getItem('user')).email;
            }
        },
    }

</script>

<style scoped>
.lol {
    padding: 0 50px;
    background-color: #FFA07A;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-logo {
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    line-height: 70px;
    color: #FFE4E1;
    text-decoration: none;
}

.right {
    display: flex;
}

li{
    margin-right: 50px;
    text-align: left;
    text-transform: uppercase;
    list-style: none;
}

li a {
    list-style: none;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    line-height: 30px;
    color: #FFE4E1;
    text-decoration: none;
}

    .right{
        list-style: none;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        line-height: 30px;
        color: #FFE4E1;
        text-decoration: none;
    }

</style>
