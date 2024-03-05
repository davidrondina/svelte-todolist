<script>
    export let priorityLevel = 1;
</script>

{#if priorityLevel === 4}
    <div
        class="inline-flex justify-center w-32 px-3 py-1.5 text-center font-semibold text-sm bg-red-200 text-red-900 rounded-full border border-red-900"
    >
        Urgent
    </div>
{:else if priorityLevel === 3}
    <div
        class="inline-flex justify-center w-32 px-3 py-1.5 text-center font-semibold text-sm bg-yellow-200 text-yellow-900 rounded-full border border-yellow-900"
    >
        Important
    </div>
{:else if priorityLevel === 2}
    <div
        class="inline-flex justify-center w-32 px-3 py-1.5 text-center font-semibold text-sm bg-blue-200 text-blue-900 rounded-full border border-blue-900"
    >
        Unimportant
    </div>
{:else if priorityLevel === 1}
    <div
        class="inline-flex justify-center w-32 px-3 py-1.5 text-center font-semibold text-sm bg-neutral-200 text-neutral-700 rounded-full border border-neutral-400"
    >
        No Priority
    </div>
{/if}
