using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace contacts
{
    public partial class Form1 : Form
    {
        Guy joe;
        Guy bob;
        int bank = 100;
        public Form1()
        {
            InitializeComponent();
            joe = new Guy() { Name = "joe", Cash = 200 };

            bob = new Guy() { Name = "bob", Cash = 50 };

            UpdateForm();
        }
        //初始化
        public void UpdateForm()
        {
            joeLbl.Text = joe.Name + "has $" + joe.Cash;
            bobLbl.Text = bob.Name + "has $" + bob.Cash;
            bankLbl.Text = "the bank has $" + bank;
        }
        private void pictureBox1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("contact me", "about");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            int number = 13;
            number += 10;
            number = 24 * 3;
            int count = 0;
            count++;
            count--;
            string result = "hello";
            result += "again" + result;
            MessageBox.Show(result);
            result = "the value" + count;
            bool yesNo = false;
            bool anotherBool = true;
            yesNo = !anotherBool;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int x = 10;
            while (x > 5)
            {
                x = x - 3;
            }
            for (int i = 0; i < 8; i+=2)
            {
                MessageBox.Show("pop up 4 times");
            }
            
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (checkBox1.Checked == false)
            {
                MessageBox.Show("enable first");
            }else
            {
                label1.BackColor = Color.Red;
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            int len = talker.Blah(textBox1.Text, (int)numericUpDown1.Value);
            MessageBox.Show("this message length is " + len);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            navigator oneNavi = new navigator();
            oneNavi.Name = textBox2.Text;
            oneNavi.Height = textBox3.Text;
            oneNavi.Talk();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            int amount = joe.GiveCash(500);
            MessageBox.Show("the amount is " + amount);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            int amount = bob.ReceiveCash(20);
            MessageBox.Show("the amount is " + amount);
        }

        private void button8_Click(object sender, EventArgs e)
        {
            bob.ReceiveCash(joe.GiveCash(500));
        }

        private void button9_Click(object sender, EventArgs e)
        {
            joe.ReceiveCash(bob.GiveCash(10));
        }
    }
}
