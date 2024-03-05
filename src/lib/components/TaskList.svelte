<script>
    import { onMount } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { TaskStore } from "../stores";
    import PriorityLabel from "./PriorityLabel.svelte";

    onMount(() => {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", JSON.stringify($TaskStore));
        }

        const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));

        TaskStore.set(localStorageTasks);
    });

    const handleDelete = (taskId) => {
        TaskStore.update((currentTasks) => {
            return currentTasks.filter((item) => item.id !== taskId);
        });

        localStorage.setItem("tasks", JSON.stringify($TaskStore));
    };
</script>

<div class="flex flex-col gap-y-6">
    {#if $TaskStore && $TaskStore.length > 0}
        {#each $TaskStore as t (t.id)}
            <div in:scale out:fade class="relative w-full">
                <div
                    class="px-3 py-1.5 flex flex-col gap-y-3 border border-neutral-300 rounded shadow-sm"
                >
                    <div>
                        <span class="font-semibold">{t.title}</span>

                        <p class="text-neutral-700 text-sm text-wrap">
                            {t.description}
                        </p>
                    </div>

                    <PriorityLabel priorityLevel={t.priority} />
                </div>
                <div class="absolute -top-4 -right-5">
                    <button
                        on:click={() => {
                            handleDelete(t.id);
                        }}
                        type="button"
                        class="duration-100 active:scale-95 w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full inline-flex justify-center items-center text-neutral-50"
                    >
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        {/each}
    {:else}
        <p class="text-center">No tasks to do. Yay!</p>
    {/if}
</div>
