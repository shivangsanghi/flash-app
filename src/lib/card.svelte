<script lang="ts">
	import type { Card } from "../enums/cards";


	export let cards: Card[];
</script>

<div class="cards-container">
{#each cards as card}
	<img src={card.image} alt={card.name}/>
{/each}
</div>

<style lang="scss">
	.cards-container{
		display: inline-flex;
		flex-direction: row;
		border: 1px dotted gray;
		border-radius: 5px;
		> img{
			width: 80px;
			height: 80px;
		}
	}
</style>