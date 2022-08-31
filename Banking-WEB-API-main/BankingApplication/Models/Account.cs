using System;
using System.Collections.Generic;

#nullable disable

namespace BankingApplication
{
    public partial class Account
    {
        public Account()
        {
            BeneficiaryAccountNumberNavigations = new HashSet<Beneficiary>();
            BeneficiaryBeneficiaryAccountNoNavigations = new HashSet<Beneficiary>();
            InternetBankings = new HashSet<InternetBanking>();
            TransactionFromAccountNoNavigations = new HashSet<Transaction>();
            TransactionToAccountNoNavigations = new HashSet<Transaction>();
        }

        public int AccountNumber { get; set; }
        public int? Balance { get; set; }
        public string AccountType { get; set; }
        public int? CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<Beneficiary> BeneficiaryAccountNumberNavigations { get; set; }
        public virtual ICollection<Beneficiary> BeneficiaryBeneficiaryAccountNoNavigations { get; set; }
        public virtual ICollection<InternetBanking> InternetBankings { get; set; }
        public virtual ICollection<Transaction> TransactionFromAccountNoNavigations { get; set; }
        public virtual ICollection<Transaction> TransactionToAccountNoNavigations { get; set; }
    }
}
