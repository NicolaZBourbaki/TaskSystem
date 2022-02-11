public record TaskUserDTO
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool Status { get; set; }
    public string AssignedTo { get; set; }

    public TaskUserDTO(int id, string title, string description, bool status, string assignedTo)
    {
        Id = id;
        Title = title;
        Description = description;
        Status = status;
        AssignedTo = assignedTo;
    }
}