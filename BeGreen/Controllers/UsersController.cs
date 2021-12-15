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
    [Route("users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UsersRepository _repo;

        public UsersController(UsersRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetUserByUserId(int id)
        {
            var user = _repo.GetUserById(id);

            if (user == null) return NotFound($"User with the id {id} was not found");

            return Ok(user);
        }

        [HttpGet("fb/{fbUserId}")]
        public IActionResult GetUserByFbUserId(string fbUserId)
        {
            var fbUser = _repo.GetUserByFbId(fbUserId);

            if (fbUser == null) return Ok(null);

            return Ok(fbUser);
        }

        [HttpPost]
        public IActionResult CreateNewUser(Users user)
        {
            _repo.AddNewUser(user);

            return Created($"users/{user.Id}", user);
        }
    }
}
