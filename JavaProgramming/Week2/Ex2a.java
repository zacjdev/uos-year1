import sheffield.*;

public class Ex2a {
    public static void main(String[] args) {
        
        EasyWriter screen = new EasyWriter();
        EasyReader fileReader = new EasyReader("file.txt");
        EasyWriter writeFile = new EasyWriter("output.txt");
        String phrase = fileReader.readString();
        screen.println(phrase);
        screen.println(42);
        screen.println(65.6262626,4,100);
        writeFile.println("Hello world");
        writeFile.println(5.66346536325,5,50);
    }
}
