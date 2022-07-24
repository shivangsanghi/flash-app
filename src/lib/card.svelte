<script lang="ts">

</script>

<div class="card-container">
	<div class="image-container">
		<img src="">
		<img src="">
	</div>
	<div class="number-container">K</div>
	<div class="image-container">
		<img src="">
		<img src="">
	</div>
</div>

<style lang="scss">
	.card-container{
		--width: 200px;
		width: var(--width);
		height: calc(var(--width) * 1.5);
		background-color: white;
		border-radius: 1em;
		border: 2px solid gray;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.image-container{
			display: flex;
			justify-content: space-between;
		}
		.number-container{
			display: flex;
			justify-content: center;
		}
	}
</style>