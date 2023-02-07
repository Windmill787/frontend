<template>
    <div class="container">
        <button class="btn btn-default" @click="count++">Default button {{ count }}</button>
        <button class="btn btn-blue">Blue button</button>
        <button class="btn btn-black">Black button</button>
        <button class="btn btn-red">Red button</button>
        <button class="btn btn-green">Green button</button>

        <button class="btn btn-default-border">Default border</button>
        <button class="btn btn-blue-border">Blue border</button>
        <button class="btn btn-black-border">Black border</button>
        <button class="btn btn-red-border">Red border</button>
        <button class="btn btn-green-border">Green border</button>
        <button class="btn btn-small">Small button</button>
        <button class="btn btn-small btn-green">Small green button</button>
        <button class="btn btn-small btn-green-border">Small green border</button>

        <button class="btn">Button</button>
    </div>
</template>

<script>
export default {
    name: 'Buttons',
    data() {
        return {
            count: 1
        }
    }
}
</script>