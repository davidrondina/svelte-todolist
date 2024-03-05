<script>
    export let priority = {};

    let selected = 0;

    const onChange = (e) => {
        selected = e.currentTarget.value;
        console.log(e.currentTarget.value);
    };
</script>

<li class="flex-1 relative p-3">
    <input
        on:change={onChange}
        type="radio"
        name="priorityBtn"
        value={priority.id}
        id={priority.id}
        class="peer opacity-0"
        checked={selected === priority.id}
    />

    <label
        for={priority.id}
        class={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 cursor-pointer opacity-70 hover:opacity-100 w-full text-center font-semibold text-sm peer-checked:bg-green-200 peer-checked:text-green-900 peer-checked:opacity-100 rounded-full border border-neutral-400`}
        >{priority.name}</label
    >
</li>
