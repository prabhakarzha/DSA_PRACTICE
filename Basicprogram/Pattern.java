import java.util.*;


// pattern number 1
// ******
// ******
// ******
// ******
public class Pattern{
    public static void main(String[] args){
        int n=4;
        int m = 5;
        for(int i=1;i<=n;i++) {
            for(int j=1;j<=m;j++) {
                System.out.print("*");
            }

            System.out.println("*");
        }
        
    }
}

// pattern number two

// *****
// *   *
// *   *
// *****


// public class Pattern{
//     public static void main(String[] args){
//         int n= 4;
//         int m = 5;
//         for(int i=1;i<=n;i++) {
//             for(int j=1;j<=m;j++) {
//                 if(i==1 || j==1 || i==n || j==m){
//                     System.out.print("*");

//                 } else {

//                      System.out.print(" ");
//                 }
//             }
//             System.out.println();

//         }
        
//     }
// }
