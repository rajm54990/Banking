using System;
using System.Collections.Generic;

#nullable disable

namespace BankingApplication
{
    public partial class InternetBanking
    {
        public int InternetBankingId { get; set; }
        public int? CustomerId { get; set; }
        public string TransactionPassword { get; set; }
        public int? AccountNumber { get; set; }

        public virtual Account AccountNumberNavigation { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
