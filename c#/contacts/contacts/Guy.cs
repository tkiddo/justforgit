using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace contacts
{
    class Guy
    {
        public string Name;
        public int Cash;
        
        public int GiveCash(int amount)
        {
            if(amount <= Cash && amount > 0)
            {
                Cash -= amount;
                return amount;
            }else
            {
                MessageBox.Show("i don't have enough cash to give you " + amount, Name + "says...");
                return 0;
            }
        }

        public int ReceiveCash(int amount)
        {
            if (amount > 0)
            {
                Cash += amount;
                return amount;
            }
            else
            {
                MessageBox.Show("i can't take " + amount, Name + "says...");
                return 0;
            }
        }

    }
}
