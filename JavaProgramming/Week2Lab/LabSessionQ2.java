public class LabSessionQ2 {
	public static void main(String[] args) {
	
	int x = 4;
	int y = 5;
	
	int z = x + y;
	x++;
	int total = x + y + z;
	System.out.println(total);
	
	total = total - (x--);
	System.out.println(total);
}}