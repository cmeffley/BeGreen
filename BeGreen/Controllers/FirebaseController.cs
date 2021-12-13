using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Controllers
{
    public class FirebaseController : ControllerBase
    {
        public string FirebaseUid => User.FindFirst(claim => claim.Type == "user_id").Value;
    }
}
