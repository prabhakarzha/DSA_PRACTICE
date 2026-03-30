// Make a Calculator. Take 2 numbers (a & b) from the user and an operation as follows : 
// 	1 : + (Addition) a + b
// 2 : - (Subtraction) a - b
// 3 : * (Multiplication) a * b
// 4 : / (Division) a / b
// 5 : % (Modulo or remainder) a % b
// Calculate the result according to the operation given and display it to the user.




import java.util.Scanner;
public class Calculator {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("cALCULATOR MADE BY SONU KASHYAP");

        System.out.println("Press + for Addition");
        System.out.println("Press - for Substraction");
        System.out.println("Press * for Multiplication");
        System.out.println("Press / for division");
        System.out.println("Press % for Reminder\n");

        System.out.print("Which operation do you want to perform? ");
        String operation = sc.nextLine();

        System.out.print("Enter Number 1:");
        double num1 =sc.nextDouble();

        
        System.out.print("Enter Number 2:");
        double num2 =sc.nextDouble();

        float result;
        switch(operation){
        case "+":

            result=(float)(num1+num2);
            System.out.println("Result:"+ result);
            break;

        case "-":

            result=(float)(num1-num2);
            System.out.println("Result:"+ result);
            break;

        case "*":

            result=(float)(num1*num2);
            System.out.println("Result:"+ result);
            break;
        
        case "/":

            result=(float)(num1/num2);
            System.out.println("Result:"+ result);
            break;

        case "%":

            result=(float)(num1%num2);
            System.out.println("Result:"+ result);
            break;
        
        default:
            System.out.println("Please enter proper number");
             
            
        

        }


        
    }

    
}
