using Microsoft.AspNetCore.Mvc;
using TaskSystem.API.Data;
using TaskSystem.API.Helpers;
using TaskSystem.API.Interfaces;

namespace API.Controllers
{
    public class TaskController : BaseApiController
    {
        public readonly ITaskRepository TaskRepository;
        public TaskController(ITaskRepository _taskRepository)
        {
            TaskRepository = _taskRepository;   
        }

        [HttpGet]
        public List<TaskUserDTO> GetUserTasksList()
        {
            var tasksList = TaskRepository.GetUserTaskList();
            return tasksList;
        }
    }
}