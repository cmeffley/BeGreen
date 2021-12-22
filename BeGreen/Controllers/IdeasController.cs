using BeGreen.DataAccess;
using BeGreen.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Controllers
{
    [Route("ideas")]
    [ApiController]
    public class IdeasController : ControllerBase
    {
        IdeasRepository _repo;

        public IdeasController(IdeasRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllIdeas()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetIdeasbyId(int id)
        {
            var idea = _repo.GetById(id);

            if (idea == null) return NotFound($"No Idea with the Id of {id} was found");

            return Ok(idea);
        }

        [HttpPost]
        public IActionResult AddAnIdea(Ideas idea)
        {
            _repo.AddIdea(idea);

            return Created($"ideas/{idea.Id}", idea);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateIdea(int id, Ideas idea)
        {
            var ideaToUpdate = _repo.GetById(id);
            if (ideaToUpdate == null) return NotFound($"Unable to find idea with the id {id} to update");

            var updateIdea = _repo.Update(id, idea);
            return Ok(updateIdea);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteIdea(int id)
        {
            _repo.Delete(id);
            return Ok("Your Idea has been permanently deleted");
        }
    }
}
