using BeGreen.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Controllers
{
    [Route("tree")]
    [ApiController]
    public class TreeController : ControllerBase
    {
        TreeRepository _repo;

        public TreeController(TreeRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetWholeTree()
        {
            return Ok(_repo.GetAllTree());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleTreeImage(int id)
        {
            var singleTree = _repo.GetSingleTreeImage(id);

            if (singleTree == null) return NotFound($"No Tree image with the id of {id} was found");

            return Ok(singleTree);
        }

    }
}
