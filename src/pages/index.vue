<script setup>
import { useAPI } from "../composables/useAPI";

const {chuck, getJokes} = useAPI();
</script>

<template>
<div class="pb-5 text-center">
<button @click="getJokes" class="px-4 py-6 mt-8 text-center bg-green-400 rounded-lg">Click to Get Joke</button>
</div>
<p class="pb-2 text-4xl text-center bg-orange-400 rounded-lg"> {{chuck}} </p>
<img src="../components/images/chuck.gif">
</template>