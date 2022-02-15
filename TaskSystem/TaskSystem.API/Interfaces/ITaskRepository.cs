using Task = TaskSystem.API.Entities.Task;

namespace TaskSystem.API.Interfaces;

public interface ITaskRepository
{
    IEnumerable<Task> GetAll();
    void Add(Task task);
}