export default class Task {
    Id?: string;
    Title: string;
    Description: string;
    Status: string;
    Priority: string;

    constructor(id: string, title: string, description: string, status: string, priority: string) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Status = status;
        this.Priority = priority;
    } 
}