using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Models
{
    public class TreeActivity
    {
        public int Id { get; set; }
        public string GreenActivity { get; set; }
        public int TreePoints { get; set; }
        public int TotalTreePoints { get; set; }
        public int UserId { get; set; }
    }
}
