﻿using BeGreen.DataAccess;
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

    }
}