<template>
    <div class="modal-overlay">
        <div class="modal">
            <h6 v-text="$store.state.modal.title"></h6>
            <p>Your Details have been saved Successfully</p>
            <button class="btn btn-red" @click="$store.commit('closeModal');$store.commit('unlockBody');">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
}
</script>