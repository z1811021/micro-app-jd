<script setup lang="ts"></script>
<script>
import ReactBlue from "./ReactBlue.vue";
export default {
	components: {
		ReactBlue,
	},
};
</script>

<template>
	<div><h1>Vue Green</h1></div>
	<ReactBlue />
</template>

<style scoped>
div {
	background-color: #42b833;
	width: 100vw;
	height: 100vh;
}
h1 {
	color: #fff;
	margin: 0;
}
</style>
