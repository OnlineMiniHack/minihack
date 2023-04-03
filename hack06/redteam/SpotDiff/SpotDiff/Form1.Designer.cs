
namespace SpotDiff
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.pic = new System.Windows.Forms.PictureBox();
            this.PnlDiff1 = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.label14 = new System.Windows.Forms.Label();
            this.label15 = new System.Windows.Forms.Label();
            this.label16 = new System.Windows.Forms.Label();
            this.label17 = new System.Windows.Forms.Label();
            this.PnlDiff2 = new System.Windows.Forms.Panel();
            this.PnlDiff4 = new System.Windows.Forms.Panel();
            this.PnlDiff5 = new System.Windows.Forms.Panel();
            this.pnlHidden = new System.Windows.Forms.Panel();
            this.pnlRed = new System.Windows.Forms.Panel();
            this.pnlGreen = new System.Windows.Forms.Panel();
            this.pnlBlue = new System.Windows.Forms.Panel();
            ((System.ComponentModel.ISupportInitialize)(this.pic)).BeginInit();
            this.SuspendLayout();
            // 
            // pic
            // 
            this.pic.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pic.Image = ((System.Drawing.Image)(resources.GetObject("pic.Image")));
            this.pic.InitialImage = ((System.Drawing.Image)(resources.GetObject("pic.InitialImage")));
            this.pic.Location = new System.Drawing.Point(0, 0);
            this.pic.Name = "pic";
            this.pic.Size = new System.Drawing.Size(2519, 946);
            this.pic.TabIndex = 0;
            this.pic.TabStop = false;
            this.pic.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // PnlDiff1
            // 
            this.PnlDiff1.BackColor = System.Drawing.Color.Transparent;
            this.PnlDiff1.Location = new System.Drawing.Point(1737, 266);
            this.PnlDiff1.Name = "PnlDiff1";
            this.PnlDiff1.Size = new System.Drawing.Size(102, 89);
            this.PnlDiff1.TabIndex = 2;
            this.PnlDiff1.Click += new System.EventHandler(this.PnlDiff1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(-1, 74);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(47, 46);
            this.label1.TabIndex = 3;
            this.label1.Text = "A";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(-1, 141);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(47, 46);
            this.label2.TabIndex = 4;
            this.label2.Text = "B";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(-1, 222);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(49, 46);
            this.label3.TabIndex = 5;
            this.label3.Text = "C";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(-1, 531);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(44, 46);
            this.label4.TabIndex = 8;
            this.label4.Text = "F";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(-1, 406);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(47, 46);
            this.label5.TabIndex = 7;
            this.label5.Text = "E";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(-1, 309);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(49, 46);
            this.label6.TabIndex = 6;
            this.label6.Text = "D";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(128, 851);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(42, 46);
            this.label7.TabIndex = 11;
            this.label7.Text = "0";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label8.Location = new System.Drawing.Point(-6, 754);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(49, 46);
            this.label8.TabIndex = 10;
            this.label8.Text = "H";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label9.Location = new System.Drawing.Point(-6, 640);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(51, 46);
            this.label9.TabIndex = 9;
            this.label9.Text = "G";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label10.Location = new System.Drawing.Point(242, 851);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(42, 46);
            this.label10.TabIndex = 12;
            this.label10.Text = "1";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label11.Location = new System.Drawing.Point(369, 851);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(42, 46);
            this.label11.TabIndex = 13;
            this.label11.Text = "2";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label12.Location = new System.Drawing.Point(488, 851);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(42, 46);
            this.label12.TabIndex = 14;
            this.label12.Text = "3";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label13.Location = new System.Drawing.Point(642, 851);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(42, 46);
            this.label13.TabIndex = 15;
            this.label13.Text = "4";
            // 
            // label14
            // 
            this.label14.AutoSize = true;
            this.label14.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label14.Location = new System.Drawing.Point(780, 851);
            this.label14.Name = "label14";
            this.label14.Size = new System.Drawing.Size(42, 46);
            this.label14.TabIndex = 16;
            this.label14.Text = "5";
            // 
            // label15
            // 
            this.label15.AutoSize = true;
            this.label15.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label15.Location = new System.Drawing.Point(906, 851);
            this.label15.Name = "label15";
            this.label15.Size = new System.Drawing.Size(42, 46);
            this.label15.TabIndex = 17;
            this.label15.Text = "6";
            // 
            // label16
            // 
            this.label16.AutoSize = true;
            this.label16.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label16.Location = new System.Drawing.Point(1070, 851);
            this.label16.Name = "label16";
            this.label16.Size = new System.Drawing.Size(42, 46);
            this.label16.TabIndex = 18;
            this.label16.Text = "7";
            // 
            // label17
            // 
            this.label17.AutoSize = true;
            this.label17.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label17.Location = new System.Drawing.Point(1198, 851);
            this.label17.Name = "label17";
            this.label17.Size = new System.Drawing.Size(42, 46);
            this.label17.TabIndex = 19;
            this.label17.Text = "8";
            // 
            // PnlDiff2
            // 
            this.PnlDiff2.BackColor = System.Drawing.Color.Transparent;
            this.PnlDiff2.Location = new System.Drawing.Point(1466, 569);
            this.PnlDiff2.Name = "PnlDiff2";
            this.PnlDiff2.Size = new System.Drawing.Size(81, 64);
            this.PnlDiff2.TabIndex = 3;
            this.PnlDiff2.Click += new System.EventHandler(this.PnlDiff2_Click);
            // 
            // PnlDiff4
            // 
            this.PnlDiff4.BackColor = System.Drawing.Color.Transparent;
            this.PnlDiff4.Location = new System.Drawing.Point(1877, 620);
            this.PnlDiff4.Name = "PnlDiff4";
            this.PnlDiff4.Size = new System.Drawing.Size(136, 107);
            this.PnlDiff4.TabIndex = 22;
            this.PnlDiff4.Click += new System.EventHandler(this.PnlDiff4_Click);
            // 
            // PnlDiff5
            // 
            this.PnlDiff5.BackColor = System.Drawing.Color.Transparent;
            this.PnlDiff5.Location = new System.Drawing.Point(2353, 717);
            this.PnlDiff5.Name = "PnlDiff5";
            this.PnlDiff5.Size = new System.Drawing.Size(113, 83);
            this.PnlDiff5.TabIndex = 23;
            this.PnlDiff5.Click += new System.EventHandler(this.PnlDiff5_Click);
            // 
            // pnlHidden
            // 
            this.pnlHidden.BackColor = System.Drawing.Color.Transparent;
            this.pnlHidden.Location = new System.Drawing.Point(463, 738);
            this.pnlHidden.Name = "pnlHidden";
            this.pnlHidden.Size = new System.Drawing.Size(76, 62);
            this.pnlHidden.TabIndex = 24;
            this.pnlHidden.Click += new System.EventHandler(this.pnlHidden_Click);
            // 
            // pnlRed
            // 
            this.pnlRed.BackColor = System.Drawing.Color.Transparent;
            this.pnlRed.Location = new System.Drawing.Point(12, 455);
            this.pnlRed.Name = "pnlRed";
            this.pnlRed.Size = new System.Drawing.Size(65, 65);
            this.pnlRed.TabIndex = 25;
            this.pnlRed.Click += new System.EventHandler(this.pnlRed_Click);
            // 
            // pnlGreen
            // 
            this.pnlGreen.BackColor = System.Drawing.Color.Transparent;
            this.pnlGreen.Location = new System.Drawing.Point(779, 279);
            this.pnlGreen.Name = "pnlGreen";
            this.pnlGreen.Size = new System.Drawing.Size(65, 57);
            this.pnlGreen.TabIndex = 26;
            this.pnlGreen.Click += new System.EventHandler(this.pnlGreen_Click);
            // 
            // pnlBlue
            // 
            this.pnlBlue.BackColor = System.Drawing.Color.Transparent;
            this.pnlBlue.Location = new System.Drawing.Point(293, 620);
            this.pnlBlue.Name = "pnlBlue";
            this.pnlBlue.Size = new System.Drawing.Size(67, 66);
            this.pnlBlue.TabIndex = 27;
            this.pnlBlue.Click += new System.EventHandler(this.pnlBlue_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(2519, 946);
            this.Controls.Add(this.pnlBlue);
            this.Controls.Add(this.pnlGreen);
            this.Controls.Add(this.pnlRed);
            this.Controls.Add(this.pnlHidden);
            this.Controls.Add(this.PnlDiff5);
            this.Controls.Add(this.PnlDiff4);
            this.Controls.Add(this.PnlDiff2);
            this.Controls.Add(this.label17);
            this.Controls.Add(this.label16);
            this.Controls.Add(this.label15);
            this.Controls.Add(this.label14);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.PnlDiff1);
            this.Controls.Add(this.pic);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Text = "Egg Hunt - Spot 4 Differences";
            ((System.ComponentModel.ISupportInitialize)(this.pic)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pic;
        private System.Windows.Forms.Panel PnlDiff1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label label14;
        private System.Windows.Forms.Label label15;
        private System.Windows.Forms.Label label16;
        private System.Windows.Forms.Label label17;
        private System.Windows.Forms.Panel PnlDiff2;
        private System.Windows.Forms.Panel PnlDiff4;
        private System.Windows.Forms.Panel PnlDiff5;
        private System.Windows.Forms.Panel pnlHidden;
        private System.Windows.Forms.Panel pnlRed;
        private System.Windows.Forms.Panel pnlGreen;
        private System.Windows.Forms.Panel pnlBlue;
    }
}

