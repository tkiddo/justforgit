using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace day2
{
    class Farmer
    {
        private int numberOfCows;
        private int feedMultiplier;
        public int FeedMultiplier { get { return feedMultiplier; } }
        public int BagsOfFeed { get; private set; }
        
        public int NumberOfCows
        {
            get
            {
                return numberOfCows;
            }
            set
            {
                numberOfCows = value;
                BagsOfFeed = numberOfCows * FeedMultiplier;
            }
        }

        public void Test()
        {
            BagsOfFeed = 50;
            Console.WriteLine("test bags : "+BagsOfFeed);
        }

        public Farmer(int numberOfCows,int feedMultiplier)
        {
            this.feedMultiplier = feedMultiplier;
            NumberOfCows = numberOfCows;
        }
    }
}
