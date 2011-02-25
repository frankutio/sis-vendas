

package Contole;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServletUsuario extends HttpServlet {
  
   protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
       processRequest(request, response);
   }
   protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
       processRequest(request, response);
   }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

String operacao=request.getParameter("operacao");
String proximaPagina="";
 //PARA DIRECIONAR AS PAGINAS PARA O LOCAL CERTO.

    RequestDispatcher rd = request.getRequestDispatcher(proximaPagina);
    rd.forward(request, response);
    }

}
