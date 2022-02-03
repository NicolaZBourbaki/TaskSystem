export default class Task {
    Id?: string;
    Title: string;
    Description: string;
    Status: string;
    Priority: string;

    constructor(id: string, title: string, status: string, priority: string) {
        this.Id = id;
        this.Title = title;
        this.Description = '';
        this.Status = status;
        this.Priority = priority;
    } 
}