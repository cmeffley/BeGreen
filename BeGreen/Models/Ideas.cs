using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Models
{
    public class Ideas
    {
        public int Id { get; set; }
        public string SharedIdea { get; set; }
        public string Image { get; set; }
        public string UserFirstName { get; set; }
        public string UserName { get; set; }
        public DateTime DatePosted { get; set; }
        public int UserId { get; set; }
    }
}
