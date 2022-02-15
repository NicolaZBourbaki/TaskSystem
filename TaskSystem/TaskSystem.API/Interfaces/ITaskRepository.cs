using Task = TaskSystem.API.Entities.Task;

namespace TaskSystem.API.Interfaces;

public interface ITaskRepository
{
    IEnumerable<Task> GetAll();
    Task? FindById(int taskId);
    void Add(Task task);
}