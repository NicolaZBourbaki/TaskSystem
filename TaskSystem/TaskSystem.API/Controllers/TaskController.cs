﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TaskSystem.API.DTOs;
using TaskSystem.API.Interfaces;

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
}