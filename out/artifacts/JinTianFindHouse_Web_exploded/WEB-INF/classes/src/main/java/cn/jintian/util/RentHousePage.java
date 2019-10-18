package cn.jintian.util;
import java.util.ArrayList;
import java.util.List;
import cn.jintian.pojo.Rent_H;


public class RentHousePage {
	private Integer houseTotal;//���������
	private Integer index;//��ǰҳ
	private Integer totalPages;//��ҳ��
	private Integer itemsPerPage;//ÿҳ��ʾ����Ŀ��
	private List<Rent_H> house = new ArrayList<Rent_H>();
	
	public List<Rent_H> getHourse() {
		return house;
	}
	public void setHouse(List<Rent_H> hourse) {
		this.house = hourse;
	}
	
	public Integer getIndex() {
		return index;
	}
	public void setIndex(Integer index) {
		this.index = index;
	}
	public Integer getTotalPages() {
		return houseTotal % itemsPerPage == 0 ? houseTotal / itemsPerPage : houseTotal / itemsPerPage + 1;
	}
	public Integer getItemsPerPage() {
		return itemsPerPage;
	}
	public Integer getHouseTotal() {
		return houseTotal;
	}
	public void setHouseTotal(Integer houseTotal) {
		this.houseTotal = houseTotal;
	}
	public List<Rent_H> getHouse() {
		return house;
	}
	public void setItemsPerPage(Integer itemsPerPage) {
		this.itemsPerPage = itemsPerPage;
	}
	public void setTotalPages(Integer totalPages) {
		this.totalPages = totalPages;
	}

}
