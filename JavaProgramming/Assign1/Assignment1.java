import sheffield.*;

public class Assignment1 {
    public static void main(String[] args) {
        EasyReader input = new EasyReader();
        EasyWriter screen = new EasyWriter();
        int cost = (int)((input.readDouble("How much is your shopping? ")) * 100);
        int given = (int)((input.readDouble("How much cash did you offer? ")) * 100);
        double change = (double)(given - cost) / 100;
        screen.println("Your change should be " + change);
        screen.println("Made up of");
        double[] notes = {20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01};
        int index = 0;
        for(int i = 0; i < notes.length; i++) {

            int quant = (int)(Math.floor(change / notes[index]));

            change = change - (quant * notes[index]);
            if (Double.compare(notes[index], 0.99) > 0) {
                final int formattedNote = (int)notes[index];
                screen.print(formattedNote + " pound notes:");
                if (String.valueOf(formattedNote).length() == 2) {
                    screen.println("   " + quant);
                } else {
                    screen.println("    " + quant);
                }
                
            } else {
                final int formattedNote = (int)(notes[index] * 100);
                screen.print(formattedNote + " pence coins:");
                if (String.valueOf(formattedNote).length() == 2) {
                    screen.println("   " + quant);
                } else {
                    screen.println("    " + quant);
                }
            }
            index = index + 1;
        }
        String fileName = input.readString("What is the name of your file? ");
    }
}


