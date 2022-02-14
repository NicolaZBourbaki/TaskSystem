using AutoMapper;
using TaskSystem.API.DTOs;
using Task = TaskSystem.API.Entities.Task;

namespace TaskSystem.API.Mappers
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Task, AdminTaskDto>();
            CreateMap<Task, UserTaskDto>();
        }
    }
}
