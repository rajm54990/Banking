using System;
using System.Collections.Generic;

#nullable disable

namespace BankingApplication
{
    public partial class Beneficiary
    {
        public string BeneficiaryName { get; set; }
        public int BeneficiaryAccountNo { get; set; }
        public string NickName { get; set; }
        public int AccountNumber { get; set; }

        public virtual Account AccountNumberNavigation { get; set; }
        public virtual Account BeneficiaryAccountNoNavigation { get; set; }
    }
}
