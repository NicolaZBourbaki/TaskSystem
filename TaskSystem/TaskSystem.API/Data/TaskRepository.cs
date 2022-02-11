using TaskSystem.API.Helpers;
using TaskSystem.API.Interfaces;

namespace TaskSystem.API.Data
{
    public class TaskRepository : ITaskRepository
    {
        public List<TaskUserDTO> GetUserTaskList()
        {
            Random random = new Random();
            int i = 0;
            List<TaskUserDTO> userTasksList = new();
            while (i != 10)
            {
                i++;
                userTasksList.Add(new TaskUserDTO(i, RandomData.GetRandomChars(15), RandomData.GetRandomChars(25), RandomData.GetRandomBool(), RandomData.GetRandomName()));
            }
            return userTasksList;
        }
    }
}