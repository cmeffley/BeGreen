using BeGreen.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Controllers
{
    [Route("resources")]
    [ApiController]
    public class ResourcesController : ControllerBase
    {
        ResourcesRepository _repo;

        public ResourcesController(ResourcesRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllResources()
        {
            return Ok(_repo.GetAll());
        }

    }
}
