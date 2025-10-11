import java.util.Scanner;
import java.io.*;
import java.net.*;
public class mys {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        
       try(ServerSocket s=new ServerSocket(80098)){
           System.out.println("Provide tge Port to a Friend to invite him to play with you");
           Socket friend=s.accept();
           
           System.out.println("Friend Joined the room");
           BufferedReader in=new BufferedReader(new InputStreamReader(friend.getInputStream()));
           PrintWriter out=new PrintWriter(friend.getOutputStream(),true);
           BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
           // After friend joined and streams set up
String fromFriend, fromMe;

// Server sends first message
out.println("Welcome to the chat room!");

// Chat loop
while (true) {
    fromFriend = in.readLine();
    if (fromFriend == null) break; // client disconnected

    System.out.println("Friend: " + fromFriend);

    fromMe = br.readLine();
    if (fromMe.equals("b")) break;

    out.println(fromMe);
}
           s.close();
       }catch(Exception e){
           System.out.println("ErrorWithServer");
       }
        
    }
        }
