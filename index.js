import Vue from "vue";
import App from "./App";
import './scss/main.scss';
import global from "./store/global";

new Vue({
	el: "#app",
	store: global,
	render: p => p(App),
})