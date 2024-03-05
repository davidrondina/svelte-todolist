<script>
    import { v4 as uuidv4 } from "uuid";
    import { TaskStore } from "../stores";
    import Textfield from "./Textfield.svelte";
    import Textarea from "./Textarea.svelte";
    import PriorityBtnList from "./PriorityBtnList.svelte";
    import PrimaryBtn from "./PrimaryBtn.svelte";

    let title = "";
    let description = "";
    let priorityNo = 1;

    let minLength = 3;
    let message;
    let btnDisabled = false;

    const handleTextfield = (e) => {
        if (title.trim().length <= minLength) {
            message = `Title must be at least ${minLength} characters.`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }

        console.log(e.detail);
        title = e.detail;
    };

    const handleTextarea = (e) => {
        console.log(e.detail);
        description = e.detail;
    };

    const handleBtnSelect = (e) => {
        priorityNo = e.detail;
        console.log(priorityNo);
    };

    const handleSubmit = (e) => {
        if (title.trim().length > minLength) {
            const newTask = {
                id: uuidv4(),
                title,
                description,
                priority: +priorityNo,
            };

            console.table(newTask);

            TaskStore.update((currentTasks) => {
                return [newTask, ...currentTasks];
            });

            localStorage.setItem("tasks", JSON.stringify($TaskStore));

            title = "";
            description = "";

            console.log($TaskStore);
        }
    };
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-y-4">
    <Textfield
        on:text-enter={handleTextfield}
        label="Title"
        inputId={"title"}
        placeholder={"Create a name for your task"}
    />

    {#if message}
        <div class="text-sm text-red-600">
            {message}
        </div>
    {/if}

    <Textarea
        on:text-enter={handleTextarea}
        label="Description (optional)"
        inputId={"description"}
        placeholder="Describe the task that needs to be done"
    />

    <PriorityBtnList on:priority-select={handleBtnSelect} />

    <PrimaryBtn {btnDisabled} />
</form>
