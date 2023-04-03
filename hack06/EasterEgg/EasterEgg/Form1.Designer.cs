
namespace EasterEgg
{
    partial class EasterEggForm
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(EasterEggForm));
            this.easterEgg = new System.Windows.Forms.PictureBox();
            this.button1 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.easterMessageText = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.easterEgg)).BeginInit();
            this.SuspendLayout();
            // 
            // easterEgg
            // 
            this.easterEgg.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.easterEgg.Cursor = System.Windows.Forms.Cursors.Hand;
            this.easterEgg.Image = ((System.Drawing.Image)(resources.GetObject("easterEgg.Image")));
            this.easterEgg.Location = new System.Drawing.Point(91, 38);
            this.easterEgg.Name = "easterEgg";
            this.easterEgg.Size = new System.Drawing.Size(171, 232);
            this.easterEgg.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.easterEgg.TabIndex = 0;
            this.easterEgg.TabStop = false;
            this.easterEgg.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // button1
            // 
            this.button1.Cursor = System.Windows.Forms.Cursors.Hand;
            this.button1.Location = new System.Drawing.Point(319, 38);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(164, 57);
            this.button1.TabIndex = 1;
            this.button1.Text = "Wanna try again?";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(-154, 189);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(38, 15);
            this.label1.TabIndex = 2;
            this.label1.Text = "label1";
            // 
            // easterMessageText
            // 
            this.easterMessageText.Font = new System.Drawing.Font("Segoe UI Semibold", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.easterMessageText.Location = new System.Drawing.Point(91, 305);
            this.easterMessageText.Name = "easterMessageText";
            this.easterMessageText.Size = new System.Drawing.Size(404, 91);
            this.easterMessageText.TabIndex = 3;
            // 
            // EasterEggForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(544, 419);
            this.Controls.Add(this.easterMessageText);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.easterEgg);
            this.MaximizeBox = false;
            this.Name = "EasterEggForm";
            this.Text = "Hack 6 - Team Blue";
            ((System.ComponentModel.ISupportInitialize)(this.easterEgg)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox easterEgg;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label easterMessageText;
    }
}

