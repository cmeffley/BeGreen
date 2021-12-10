using BeGreen.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Controllers
{
    [Route("quizQuestions")]
    [ApiController]
    public class QuizQuestionsController : ControllerBase
    {
        QuizQuestionsRepository _repo;

        public QuizQuestionsController(QuizQuestionsRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public IActionResult GetAllQuestions()
        {
            return Ok(_repo.GetAll());
        }

    }
}
