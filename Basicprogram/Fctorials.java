import java.util.*;
public class Fctorials {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        factorials(n);

    }

    public static void factorials(int n){
        int fact = 1;
        for(int i=n;i>=1;i--){
            fact=fact*i;
        }
        System.out.println(fact);
        
    }
    
    
}
