import java.util.*;
public class PracticeJava {
    public static void printNumber(int num) {
        if (num >0){
            System.out.println("number is positive ");
        }
        else {
            System.out.println("number is negative ");
            }
         

    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        printNumber(num);

        

    }
    
}
