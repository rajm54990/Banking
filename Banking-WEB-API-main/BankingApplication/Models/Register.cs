using System;
using System.Collections.Generic;

#nullable disable

namespace BankingApplication
{
    public partial class Register
    {
        public int RegisterId { get; set; }
        public int? CustomerId { get; set; }
        public string Password { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
