export class Todo {
    nextId = 1

    constructor(
        public task: string,
        public category: string,
        public isComplete: boolean = false,
        public id: number = 0
    ) {
        this.id = id ? id : this.nextId++
    }
}