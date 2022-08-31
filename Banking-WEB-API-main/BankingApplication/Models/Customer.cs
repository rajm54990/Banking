using System;
using System.Collections.Generic;

#nullable disable

namespace BankingApplication
{
    public partial class Customer
    {
        public Customer()
        {
            Accounts = new HashSet<Account>();
            InternetBankings = new HashSet<InternetBanking>();
            Registers = new HashSet<Register>();
        }

        public int CustomerId { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string FatherName { get; set; }
        public string MobileNumber { get; set; }
        public string EmailId { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string Landmark { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string AadharNumber { get; set; }
        public string OccupationType { get; set; }
        public string SourceOfIncome { get; set; }
        public string GrossAnnualIncome { get; set; }

        public virtual ICollection<Account> Accounts { get; set; }
        public virtual ICollection<InternetBanking> InternetBankings { get; set; }
        public virtual ICollection<Register> Registers { get; set; }
    }
}
