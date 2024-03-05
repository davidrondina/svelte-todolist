<script>
    import { createEventDispatcher } from "svelte";
    import PriorityBtn from "./PriorityBtn.svelte";

    let priorities = [
        {
            id: 1,
            name: "No Priority",
        },
        {
            id: 2,
            name: "Unimportant",
        },
        {
            id: 3,
            name: "Regular",
        },
        {
            id: 4,
            name: "Urgent",
        },
    ];

    const dispatch = createEventDispatcher();

    let selected = 0;

    const onChange = (e) => {
        selected = e.currentTarget.value;
        // console.log(e.currentTarget.value);
        dispatch("priority-select", selected);
    };
</script>

<fieldset class="flex flex-col gap-y-2 border-0">
    <legend class="font-semibold text-sm uppercase">Priority</legend>

    <ul class="flex flex-wrap gap-2">
        <!-- {#each priorities as p (p.id)}
            <PriorityBtn priority={p} />
            
        {/each} -->
        <li class="relative">
            <input
                on:change={onChange}
                type="radio"
                name="priorityBtn"
                value="1"
                id="1"
                class="peer sr-only"
                checked
            />

            <label
                for="1"
                class={`duration-100 active:scale-95 inline-flex justify-center w-32 px-3 py-1.5 cursor-pointer text-neutral-700 text-center font-semibold text-sm peer-checked:bg-neutral-200 rounded-full border border-neutral-400`}
                >No Priority</label
            >
        </li>

        <li class="relative">
            <input
                on:change={onChange}
                type="radio"
                name="priorityBtn"
                value="2"
                id="2"
                class="peer sr-only"
            />

            <label
                for="2"
                class={`duration-100 active:scale-95 inline-flex justify-center w-32 px-3 py-1.5 cursor-pointer text-center font-semibold text-sm peer-checked:bg-blue-200 text-blue-900 rounded-full border border-blue-900`}
                >Unimportant</label
            >
        </li>

        <li class="relative">
            <input
                on:change={onChange}
                type="radio"
                name="priorityBtn"
                value="3"
                id="3"
                class="peer sr-only"
            />

            <label
                for="3"
                class={`duration-100 active:scale-95 inline-flex justify-center w-32 px-3 py-1.5 cursor-pointer text-center font-semibold text-sm peer-checked:bg-yellow-200 text-yellow-900 rounded-full border border-yellow-900`}
                >Important</label
            >
        </li>

        <li class="relative">
            <input
                on:change={onChange}
                type="radio"
                name="priorityBtn"
                value="4"
                id="4"
                class="peer sr-only"
            />

            <label
                for="4"
                class={`duration-100 active:scale-95 inline-flex justify-center w-32 px-3 py-1.5 cursor-pointer text-center font-semibold text-sm peer-checked:bg-red-200 text-red-900 rounded-full border border-red-900`}
                >Urgent</label
            >
        </li>
    </ul>
</fieldset>
