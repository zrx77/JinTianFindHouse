package cn.jintian.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.jintian.pojo.Users;
import cn.jintian.service.impl.RegisteredServiceImpl;

import com.alibaba.fastjson.JSONObject;
/**
 * 
 * @author ����
 *
 */
public class RegisteredServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//��ʼ������
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("Utf-8");
		PrintWriter out = response.getWriter();
		RegisteredServiceImpl rsi = new RegisteredServiceImpl();
		//JSONObject js = new JSONObject();
		
		//boolean next = false;
		//1.1��ȡ�ֻ���
		String uIphone = request.getParameter("phonenumber");
		String pwd = request.getParameter("passwordagain");
		//1.2�жϵ�ǰ�û��Ƿ�ע��
		if (uIphone != null && pwd == null) {
			String result = rsi.isExist(uIphone);
			System.out.println(result);
			renderData(response, result);
		}
		
		if (pwd != null) {
			//String pwd = request.getParameter("passwordagain");
			String userCode = request.getParameter("veri-code");
			JSONObject json = (JSONObject)request.getSession().getAttribute("verifyCode");
			
			if(json == null){
				renderData(response, "��֤�����");
				return ;
			}
			if(!json.getString("phone").equals(uIphone)){
				renderData(response, "�ֻ��Ŵ���");
				return ;
			}
			if(!json.getString("code").equals(userCode)){
				renderData(response, "��֤�����");
				return ;
			}
			if((System.currentTimeMillis() - json.getLong("creatTime")) > 1000 * 60 * 5){
				renderData(response, "��֤���ѹ���");
				return ;
			}
			Users user = new Users();
			user.setU_name(uIphone);
			user.setU_phonenumber(uIphone);
			user.setU_pwd(pwd);
			Users reUser = rsi.registered(user);
			if (reUser != null) {
				//request.getSession().setAttribute("user", reUser);
				renderData(response, "ע��ɹ�,������ת����¼ҳ��");
				
			}
		}
		
		
		out.flush();
		out.close();
	}
	

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
	protected void renderData(HttpServletResponse response, String data){
		try {
			response.setContentType("text/plain;charset=UTF-8");
			response.getWriter().write(data);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
