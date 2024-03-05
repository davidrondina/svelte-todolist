<script>
    import Card from "../lib/components/Card.svelte";
    import TaskForm from "../lib/components/TaskForm.svelte";
    import TaskList from "../lib/components/TaskList.svelte";
</script>

<main
    class="min-h-screen bg-slate-100 flex flex-col mx-auto px-4 py-8 sm:px-20 md:px-32 lg:px-48"
>
    <h1 class="mb-8 text-4xl font-bold text-center">
        Svelte <span class="text-blue-700">To-Do</span>
    </h1>

    <div class="w-full flex gap-x-4">
        <Card isSticky="true">
            <h2 class="font-bold text-2xl text-center mb-6">Add a task</h2>
            <TaskForm />
        </Card>

        <Card>
            <h2 class="font-bold text-2xl text-center mb-6">To-Dos</h2>
            <TaskList />
        </Card>
    </div>
</main>
