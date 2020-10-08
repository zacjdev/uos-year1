import javax.swing.JOptionPane;

public class LabSessionQ1 {
	public static void main(String[] args) {

	//Asking user for number inputs
	int num1 = Integer.valueOf(
		JOptionPane.showInputDialog("Input number 1: "));
	int num2 = Integer.valueOf(
		JOptionPane.showInputDialog("Input number 2: "));

	//Displays operation results as int data type
	System.out.println("Integer results");
	System.out.println(num1 + num2);
	System.out.println(num1 * num2);
	System.out.println(num1 - num2);
	System.out.println(num1 / num2);
	System.out.println(num1 % num2);

	
}}