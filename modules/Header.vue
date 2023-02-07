<template>
    <header class="header">
        <div class="header__container container">
            <a class="header__logo" href="#">Market</a>
            <div class="header__burger" :class="{active: burger.active}" @click="toggleBurger()"><span></span></div>
            <nav class="header__menu menu" :class="{active: burger.active}">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a href="#" @click="$store.commit('openModal');$store.commit('lockBody');" class="menu__link">Login</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__profile"
                           :style="{backgroundImage: 'url('+profileImage+')', backgroundColor: 'white'}"></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            profileImage: 'assets/img/loading2.gif',
            arr: new Array(20).fill('Home'),
            burger: {
                active: false
            }
        }
    },
    methods: {
        toggleBurger() {
            this.burger.active = !this.burger.active;

            if (this.burger.active || this.$store.state.modal.show) {
                this.$store.commit('lockBody');
            } else {
                this.$store.commit('unlockBody');
            }
        }
    },
    mounted() {
        this.$store.commit('setModalTitle', 'Login');
        setTimeout(() => this.profileImage = 'assets/img/im.png', 2000);

    },
}
</script>