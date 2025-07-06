<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardFooter } from '$lib/components/ui/card';
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Video } from '$lib/data/types';

	const { item }: { item: Video } = $props();
</script>

<Dialog>
	<DialogTrigger>
		<Card class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat"
			
		>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm">
				{item.label}
			</CardFooter>
		</Card>
	</DialogTrigger>

	<DialogContent class="flex min-h-[95%] min-w-[90%] flex-col">
		<DialogTitle>{item.label}</DialogTitle>
		
		<!-- svelte-ignore a11y_media_has_caption -->
		<video>
			src={item.src}
			controls
			class="flex-1 w-full h-full rounded-md"
			style="object-fit: contain;"
            track kind="kind:captions;
		</video>
		<DialogFooter>
			<DialogClose>
				<Button>Close</Button>
			</DialogClose>
		</DialogFooter>
	</DialogContent>
</Dialog>
