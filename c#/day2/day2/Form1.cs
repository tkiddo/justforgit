using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace day2
{
    public partial class Form1 : Form
    {
        Dog john = new Dog()
        {
            Name = "john",
            Age = 5
        };
        Dog king = new Dog() { Name = "king", Age = 8 };
        DinnerParty party;
        Farmer myFarmer;
        public Form1()
        {
            InitializeComponent();
            party = new DinnerParty() { NumberOfPeople = 5 };
            party.calDecoration(isfancy.Checked);
            party.setHealthy(ishealthy.Checked);
            display();


            //cows
            myFarmer = new Farmer(15, 30);

        }

        private void button1_Click(object sender, EventArgs e)
        {
            decimal myDecimal = 10;
            int myValue = (int)myDecimal;
            MessageBox.Show("the value is " + myValue); 
        }

        private void button2_Click(object sender, EventArgs e)
        {
            
            Dog temp = john;
            john = king;
            king = temp;
            john.Sleep();
            king.Sleep();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            king.Say("hello", john);
        }

        private void display()
        {
            decimal cost = party.calAll(ishealthy.Checked);
            costText.Text = cost.ToString("c");
        }

        private void isfancy_CheckedChanged(object sender, EventArgs e)
        {
            party.calDecoration(isfancy.Checked);
            display();
        }

        private void ishealthy_CheckedChanged(object sender, EventArgs e)
        {
            party.setHealthy(ishealthy.Checked);
            display();
        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {
            party.NumberOfPeople = (int)numericUpDown1.Value;
            display();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            myFarmer.NumberOfCows = (int)cowsNum.Value;
            int Bags = myFarmer.BagsOfFeed;
            Console.WriteLine("how many bags ? " + Bags);
            myFarmer.Test();
            Console.WriteLine(myFarmer.FeedMultiplier);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Penguin oo = new Penguin();
            oo.Fly();
        }
    }
}
