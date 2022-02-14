using TaskSystem.API.Interfaces;
using Task = TaskSystem.API.Entities.Task;

namespace TaskSystem.API.Data;

public class TaskRepository : ITaskRepository
{
    readonly List<Task> _tasks;

    public TaskRepository()
    {
        _tasks = GetMockData();
    }

    public IEnumerable<Task> GetAll()
    {
        return _tasks;
    }

    private static List<Task> GetMockData()
    {
        return new List<Task>
        {
            new() {Id = 1, Title = "title1", Description = "description1", Status = true, Priority = 1, AssignedTo ="Marek" },
            new() {Id = 2, Title = "title2", Description = "description2", Status = true, Priority = 2, AssignedTo ="Mark" },
            new() {Id = 3, Title = "title3", Description = "description3", Status = true, Priority = 3, AssignedTo ="Bohdan" },
            new() {Id = 4, Title = "title4", Description = "description4", Status = false, Priority = 4, AssignedTo ="Iurii" },
            new() {Id = 5, Title = "title5", Description = "description5", Status = false, Priority = 5, AssignedTo ="Artem" },
            new() {Id = 6, Title = "title6", Description = "description6", Status = false, Priority = 6, AssignedTo ="Marek" },
        };
    }
}