import { writable } from "svelte/store";

export const TaskStore = writable([
    {
        id: 1,
        title: 'Sample task 1',
        description: 'Lorem ipsum dolor',
        priority: 1,
    },
    {
        id: 2,
        title: 'Sample task 2',
        description: 'Lorem ipsum dolor',
        priority: 1,
    }
]);

