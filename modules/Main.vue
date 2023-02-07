<template>
    <main class="main">
        <Buttons></Buttons>
        <div class="menu">
            <div class="menu__item">
                <div class="menu_link"></div>
            </div>
            <div class="menu__item">
                <div class="menu_link"></div>
            </div>
        </div>
    </main>
</template>

<script>
import Buttons from "./Buttons";

export default {
    name: "Main",
    components: {Buttons},
}
</script>