<script>
    export let isSticky = false;
</script>

<div class="flex-1">
    <div
        class="{isSticky
            ? 'sticky top-5 left-0'
            : ''} bg-neutral-50 w-full px-6 py-8 border border-neutral-200 rounded-md shadow-md"
    >
        <slot />
    </div>
</div>
