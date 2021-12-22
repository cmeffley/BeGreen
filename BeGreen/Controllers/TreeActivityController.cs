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
    [Route("treeActivity")]
    [ApiController]
    public class TreeActivityController : ControllerBase
    {
        TreeActivityRepository _repo;

        public TreeActivityController(TreeActivityRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllTreeActivities()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleTreeActvity(int id)
        {
            var singleActivity = _repo.GetSingleActivityById(id);

            if (singleActivity == null) return NotFound($"No Tree Activity with the id {id} was found");

            return Ok(singleActivity);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetTreeActivityByUserId(int userId)
        {
            var userActivities = _repo.GetAllUserIdActivities(userId);

            if (userActivities == null) return NotFound($"No User with the id {userId} was found");

            return Ok(userActivities);
        }

        [HttpPost]
        public IActionResult CreateNewActivity(TreeActivity activity)
        {
            _repo.AddNewActivity(activity);

            _repo.Update(activity.Id, activity);

            return Created($"treeActivity/{activity.Id}", activity);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateActivity(int id, TreeActivity activity)
        {
            var activityToUpdate = _repo.GetSingleActivityById(id);

            if (activityToUpdate == null) return NotFound($"Unable to find idea with the id {id} to update");

            var updateActivity = _repo.Update(id, activity);

            return Ok(updateActivity);
        }

        [HttpGet("totalTreePoints")]
        public IActionResult GetTotalTreePoints(int userId)
        {
            var userActivities = _repo.GetAllUserIdActivities(userId);

            if (userActivities == null) return NotFound($"No User with the id {userId} was found");

            var userTotalPoints = _repo.GetTotalPoints(userId);

            return Ok(userTotalPoints);
        }

    }
}
