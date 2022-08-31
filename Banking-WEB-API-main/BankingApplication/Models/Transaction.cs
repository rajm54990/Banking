using System;
using System.Collections.Generic;

#nullable disable

namespace BankingApplication
{
    public partial class Transaction
    {
        public int TransactionId { get; set; }
        public int? FromAccountNo { get; set; }
        public int? ToAccountNo { get; set; }
        public int Amount { get; set; }
        public string Mode { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }

        public virtual Account FromAccountNoNavigation { get; set; }
        public virtual Account ToAccountNoNavigation { get; set; }
    }
}
