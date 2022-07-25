<script lang="ts">
	import Card from "$lib/card.svelte";
	import { getShulledCards } from "../enums/cards";
	const shuffledCards = getShulledCards();
	$: console.log(shuffledCards)
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each shuffledCards as cards}
	<Card cards={cards}/>
	
{/each}