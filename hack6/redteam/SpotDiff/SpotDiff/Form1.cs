using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SpotDiff
{
    public partial class Form1 : Form
    {
        private int _counter = 0;
        private int _found = 0;

        private Found _foundEggs = Found.None;


        private enum Found
        {
            None,
            FoundRed,
            FoundGreen,
            FoudnBlue
        }

        public Form1()
        {
            InitializeComponent();

            //need for transparency to work
            PnlDiff1.Parent = pic;
            PnlDiff2.Parent = pic;
            PnlDiff4.Parent = pic;
            PnlDiff5.Parent = pic;
            pnlHidden.Parent = pic;
             
            pnlBlue.Parent = pic;
            pnlRed.Parent = pic;
            pnlGreen.Parent = pic;

        }

        private void button1_Click(object sender, EventArgs e)
        {
        }

        private void panel1_Click(object sender, EventArgs e)
        {
            PnlDiff1.BorderStyle = BorderStyle.Fixed3D;
            CheckWin();
        }


        private void CheckWin()
        {
            _found += 1;
            if(_found >= 4)
            {
                MessageBox.Show("You Found them All!!!!!");
            }
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            _counter += 1;

            if (_counter >= 10)
            {
                _counter = 0;
                MessageBox.Show("That hurts stop!");
            }
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
         
        private void PnlDiff2_Paint(object sender, EventArgs e)
        {
            PnlDiff2.BorderStyle = BorderStyle.Fixed3D;
            CheckWin();
        }

        private void PnlDiff1_Click(object sender, EventArgs e)
        {
            PnlDiff1.BorderStyle = BorderStyle.Fixed3D;
            CheckWin();
        }

        private void pnlHidden_Click(object sender, EventArgs e)
        {
            label1.BackColor = Color.Red;
            label2.BackColor = Color.Green;
            label3.BackColor = Color.Blue;
        }

        private void PnlDiff4_Click(object sender, EventArgs e)
        {
            PnlDiff4.BorderStyle = BorderStyle.Fixed3D;
            CheckWin();
        }

        private void PnlDiff5_Click(object sender, EventArgs e)
        {
            PnlDiff5.BorderStyle = BorderStyle.Fixed3D;
            CheckWin();
        }

        private void PnlDiff2_Click(object sender, EventArgs e)
        {
            PnlDiff2.BorderStyle = BorderStyle.Fixed3D;
            CheckWin();
        }

        private void pnlRed_Click(object sender, EventArgs e)
        {
            if(_foundEggs == Found.None)
            {
                _foundEggs = Found.FoundRed;
            }
            else
            {
                _foundEggs = Found.None;
            }
        }

        private void pnlGreen_Click(object sender, EventArgs e)
        {
            if (_foundEggs == Found.FoundRed)
            {
                _foundEggs = Found.FoundGreen;
            }
            else
            {
                _foundEggs = Found.None;
            }
        }

        private void pnlBlue_Click(object sender, EventArgs e)
        {
            if (_foundEggs == Found.FoundGreen)
            {
                var win = new Form2();
                win.ShowDialog(this);
            }
            else
            {
                _foundEggs = Found.None;
            }
        }

        private void PnlDiff3_Click(object sender, EventArgs e)
        { 
        }
    }
}
