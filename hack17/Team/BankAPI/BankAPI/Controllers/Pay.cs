using Microsoft.AspNetCore.Mvc;

namespace BankAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class Pay : ControllerBase
{
    public Pay()
    {
    }

    [HttpGet("{id}/{id2}")]
    public async Task<ActionResult> Get(int id, int id2)
    {
        Console.WriteLine($"Moved £1 from account number {id} to account number {id2}");
        return new AcceptedResult();
    }
}
