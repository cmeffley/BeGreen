using BeGreen.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Controllers
{
    [Route("quizResults")]
    [ApiController]
    public class QuizResultsController : ControllerBase
    {
        QuizResultsRepository _repo;

        public QuizResultsController(QuizResultsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllResults()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleResult(int id)
        {
            var singleResult = _repo.GetResultById(id);

            if (singleResult == null) return NotFound($"Result with id {id} was not found");

            return Ok(singleResult);
        }

    }
}
