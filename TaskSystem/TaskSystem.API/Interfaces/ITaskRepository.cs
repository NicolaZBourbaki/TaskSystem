namespace TaskSystem.API.Interfaces
{
    public interface ITaskRepository
    {
        List<TaskUserDTO> GetUserTaskList();
    }
}
