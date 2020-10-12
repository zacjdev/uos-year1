import sheffield.*;

public class Ex2b {
    public static void main(String[] args) {
        
        EasyReader input = new EasyReader();
        String number = ("(01226)           783 215"); //(input.readString("What's your phone number? "));
        System.out.println("The area code is: " + (number.trim()).substring((number.indexOf("(") + 1), (number.indexOf(")"))));
        System.out.println("The telephone number is " + (number.substring(number.indexOf(")") + 1)).trim());
    }
}
