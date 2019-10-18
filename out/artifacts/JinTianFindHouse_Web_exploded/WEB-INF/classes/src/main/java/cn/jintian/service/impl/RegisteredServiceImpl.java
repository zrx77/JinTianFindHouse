package cn.jintian.service.impl;

import cn.jintian.dao.impl.RegisteredDaoImpl;
import cn.jintian.pojo.Users;
import cn.jintian.service.IRegisteredService;
/**
 * 
 * @author ����
 *
 */
public class RegisteredServiceImpl implements IRegisteredService {

	@Override
	public Users registered(Users u) {
		Users user = u;
		RegisteredDaoImpl register = new RegisteredDaoImpl();
		int userResult = register.insert(user);
		Users query = register.query(user.getU_name());
		if (userResult != 0 && query !=null){
			return user;
		}else{
			return user;
		}
	}

	@Override
	public String isExist(String userName) {
		RegisteredDaoImpl register = new RegisteredDaoImpl();
		int result = register.isExist(userName);
		if (userName == "") {
			return "�����������ֻ���";
		}else if(result == 0){
			return "����ע��";
		}else{
			return "���ظ�";
		}
	}
	
	public String chevkPwd(String uLoginPwd) {
		if (uLoginPwd == "") {
			return "��������������";
		}else if (uLoginPwd != null && uLoginPwd.length() > 0 && uLoginPwd.length() < 8) {
			return "������Ϲ淶";
		}else{
			return "���볤�Ȳ�����";
		}
	}
	
	public String chevkInfor(String uLoginPwd,String uConPwd) {
		if (uLoginPwd == "") {
			return "��������������";
		}else if (uLoginPwd != null && uConPwd != null && uLoginPwd.equals(uConPwd)) {
			return "����������ͬ";
		}else{
			return "�������벻ͬ";
		}
	}
	
}
