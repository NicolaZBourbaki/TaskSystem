namespace TaskSystem.API.DTOs;

public class AdminTaskDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool Status { get; set; }
    public DateTime DateCreated { get; set; }
    public DateTime DateModified { get; set; }
    public int Priority { get; set; }
    public string AssignedTo { get; set; }
}