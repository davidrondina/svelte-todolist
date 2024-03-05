<script>
    export let btnLabel = "Add";
    export let btnDisabled = false;
</script>

<button
    disabled={btnDisabled}
    class="bg-blue-700 p-3 text-neutral-50 font-semibold rounded-full active:scale-95 duration-100"
    >{btnLabel}</button
>
