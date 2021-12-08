using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.Models
{
    public class QuizResults
    {
        public int Id { get; set; }
        public int LowerPointRange { get; set; }
        public int UpperPointRange { get; set; }
        public string Result { get; set; }
    }
}
