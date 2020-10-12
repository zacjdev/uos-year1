import sheffield.*;

public class Ex2c {
    public static void main(String[] args) {
        
        EasyReader input = new EasyReader();
        char inChar = input.readChar("Type a character- ");
        System.out.println("Unicode number is: " + (int)inChar);
        int inNum = input.readInt("Type a number- ");
        System.out.println("Unicode char is: " + (char)inNum);
    }
}
