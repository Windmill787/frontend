<template>
	<div class="wrapper">
		<Header></Header>
		<Main></Main>
		<Footer></Footer>
		<Modal v-if="$store.state.modal.show"></Modal>
	</div>
</template>

<script>
import Header from "./modules/Header";
import Main from "./modules/Main";
import Footer from "./modules/Footer";
import Modal from "./components/Modal";

export default {
	name: 'App',
	components: {Footer, Main, Header, Modal}
}
</script>