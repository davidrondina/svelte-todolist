<script>
    import { createEventDispatcher } from "svelte";

    export let inputId = "textfield";
    export let label = "Label name";
    export let placeholder = "Create something...";

    const dispatch = createEventDispatcher();

    let text = "";

    const handleInput = () => {
        // console.log(text);
        dispatch("text-enter", text);
    };
</script>

<label for={inputId} class="flex flex-col gap-y-2">
    <span class="inline-flex text-sm uppercase font-semibold">{label}</span>

    <input
        on:input={handleInput}
        type="text"
        bind:value={text}
        id={inputId}
        class="bg-inherit w-full px-3 py-1.5 border border-neutral-300 rounded shadow-sm"
        {placeholder}
    />
</label>
