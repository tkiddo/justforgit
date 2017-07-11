namespace day2
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.numericUpDown1 = new System.Windows.Forms.NumericUpDown();
            this.isfancy = new System.Windows.Forms.CheckBox();
            this.ishealthy = new System.Windows.Forms.CheckBox();
            this.label2 = new System.Windows.Forms.Label();
            this.costText = new System.Windows.Forms.TextBox();
            this.button4 = new System.Windows.Forms.Button();
            this.cowsNum = new System.Windows.Forms.NumericUpDown();
            this.button5 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.cowsNum)).BeginInit();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(0, 0);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 0;
            this.button1.Text = "var";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(81, 0);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 1;
            this.button2.Text = "obj";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(162, 0);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(75, 23);
            this.button3.TabIndex = 2;
            this.button3.Text = "says";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 55);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(101, 12);
            this.label1.TabIndex = 3;
            this.label1.Text = "number of people";
            // 
            // numericUpDown1
            // 
            this.numericUpDown1.Location = new System.Drawing.Point(12, 79);
            this.numericUpDown1.Name = "numericUpDown1";
            this.numericUpDown1.Size = new System.Drawing.Size(120, 21);
            this.numericUpDown1.TabIndex = 4;
            this.numericUpDown1.Value = new decimal(new int[] {
            5,
            0,
            0,
            0});
            this.numericUpDown1.ValueChanged += new System.EventHandler(this.numericUpDown1_ValueChanged);
            // 
            // isfancy
            // 
            this.isfancy.AutoSize = true;
            this.isfancy.Location = new System.Drawing.Point(12, 106);
            this.isfancy.Name = "isfancy";
            this.isfancy.Size = new System.Drawing.Size(120, 16);
            this.isfancy.TabIndex = 5;
            this.isfancy.Text = "fancy decoration";
            this.isfancy.UseVisualStyleBackColor = true;
            this.isfancy.CheckedChanged += new System.EventHandler(this.isfancy_CheckedChanged);
            // 
            // ishealthy
            // 
            this.ishealthy.AutoSize = true;
            this.ishealthy.Location = new System.Drawing.Point(12, 128);
            this.ishealthy.Name = "ishealthy";
            this.ishealthy.Size = new System.Drawing.Size(66, 16);
            this.ishealthy.TabIndex = 6;
            this.ishealthy.Text = "Heathy ";
            this.ishealthy.UseVisualStyleBackColor = true;
            this.ishealthy.CheckedChanged += new System.EventHandler(this.ishealthy_CheckedChanged);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(12, 157);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(29, 12);
            this.label2.TabIndex = 7;
            this.label2.Text = "cost";
            // 
            // costText
            // 
            this.costText.Location = new System.Drawing.Point(47, 154);
            this.costText.Name = "costText";
            this.costText.Size = new System.Drawing.Size(85, 21);
            this.costText.TabIndex = 8;
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(376, 0);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(75, 23);
            this.button4.TabIndex = 9;
            this.button4.Text = "cows";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // cowsNum
            // 
            this.cowsNum.Location = new System.Drawing.Point(283, 3);
            this.cowsNum.Name = "cowsNum";
            this.cowsNum.Size = new System.Drawing.Size(87, 21);
            this.cowsNum.TabIndex = 10;
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(466, 0);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(75, 23);
            this.button5.TabIndex = 11;
            this.button5.Text = "bird";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(562, 262);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.cowsNum);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.costText);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.ishealthy);
            this.Controls.Add(this.isfancy);
            this.Controls.Add(this.numericUpDown1);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Name = "Form1";
            this.Text = "d";
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.cowsNum)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.NumericUpDown numericUpDown1;
        private System.Windows.Forms.CheckBox isfancy;
        private System.Windows.Forms.CheckBox ishealthy;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox costText;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.NumericUpDown cowsNum;
        private System.Windows.Forms.Button button5;
    }
}

