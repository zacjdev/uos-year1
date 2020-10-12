import sheffield.*;

public class Ex1b {
    public static void main(String[] args) {
        EasyReader keyboard = new EasyReader();
        int miles = keyboard.readInt("How many miles? ");
        int yards = keyboard.readInt("How many yards? ");
        double kilometers = ((double)miles * 1760) + ((double)yards * 1.60934);
        System.out.println(miles + " miles and " + yards + " yards equals " + kilometers + "km");

    }
}