using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TaskSystem.API.DTOs;
using TaskSystem.API.Interfaces;
using Task = TaskSystem.API.Entities.Task;

namespace TaskSystem.API.Controllers;

public class TaskController : BaseApiController
{
    private readonly ITaskRepository _taskRepository;
    private readonly IMapper _mapper;

    public TaskController(ITaskRepository taskRepository, IMapper mapper)
    {
        _taskRepository = taskRepository;
        _mapper = mapper;
    }

    [HttpGet("admins")]
    public ActionResult<IEnumerable<AdminTaskDto>> GetTasks()
    {
        var tasks = _taskRepository.GetAll();
        var adminTasks = _mapper.Map<IEnumerable<AdminTaskDto>>(tasks);
        return Ok(adminTasks);
    }

    [HttpGet]
    public ActionResult<IEnumerable<UserTaskDto>> GetUserTasks(int userId)
    {
        var tasks = _taskRepository.GetAll().Where(t => t.AssignedTo == "Marek");
        var userTasks = _mapper.Map<IEnumerable<UserTaskDto>>(tasks);
        return Ok(userTasks);
    }

    [HttpPost("admins")]
    public ActionResult CreateAdminTask(AdminTaskDto taskDto)
    {
        var task = _mapper.Map<Task>(taskDto);
        _taskRepository.Add(task);
        return Ok();
    }

    [HttpPost]
    public ActionResult CreateUserTask(UserTaskDto taskDto)
    {
        var task = _mapper.Map<Task>(taskDto);
        _taskRepository.Add(task);
        return Ok();
    }
}