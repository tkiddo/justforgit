using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace day2
{
    class DinnerParty
    {
        public int NumberOfPeople;
        public bool IsHealthy;
        public decimal Beverage;
        public decimal Decoration = 0;
        public const int Food = 25;

       public void setHealthy(bool ishealthy)
        {
            if (ishealthy)
            {
                Beverage = 5.00M;
            }else
            {
                Beverage = 20.0M;
            }
        }

        public void calDecoration(bool isfancy)
        {
            if (isfancy)
            {
                Decoration = (NumberOfPeople * 15.00M) + 50M;
            }else
            {
                Decoration = (NumberOfPeople * 7.5M) + 30M;
            }
        }

        public decimal calAll(bool ishealthy)
        {
            decimal total = Decoration + ((Beverage + Food) * NumberOfPeople);
            if (ishealthy)
            {
                return total * .95M;
            }else
            {
                return total;
            }
        }
    }
}
