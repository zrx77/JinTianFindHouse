package cn.jintian.dao;

import cn.jintian.pojo.Users;

/**
 * 
 * @author ������
 *
 */
public interface ILoginDao {
	Users login(String username,String pwd);
}
