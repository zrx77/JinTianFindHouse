package cn.jintian.util;
import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
 
public class SMSUtil {
    //��Ӧ�㰢�����˻��� accessKeyId
    private static final String accessKeyId = "LTAI4FiuFkigwWUsPnH7XY3P";
    //��Ӧ�㰢�����˻��� accessKeySecret
    private static final String accessKeySecret = "7TB8XR5Bi5MBlEfZB0NXKzGD47PEm2";
    //��Ӧǩ������
    private static final String signName="�����ҷ�";
    //��Ӧģ�����
    private static final String templateCode="SMS_174807278";
 
    private static int mobile_code = (int)((Math.random()*9+1)*100000);
    /**
     * ���ŷ���
     * @param telphone ���͵��ֻ���
     */
    public static int SendCode(String telphone) {
 
        DefaultProfile profile = DefaultProfile.getProfile("default",
                accessKeyId, accessKeySecret);
        IAcsClient client = new DefaultAcsClient(profile);
 
        CommonRequest request = new CommonRequest();
        //request.setProtocol(ProtocolType.HTTPS);
        request.setMethod(MethodType.POST);
        //�����ƶ�Ӧ���Ͷ��ŵķ�������ַ
        request.setDomain("dysmsapi.aliyuncs.com");
        //��Ӧ�İ汾��
        request.setVersion("2017-05-25");
 
        request.setAction("SendSms");
        request.putQueryParameter("PhoneNumbers", telphone);
        request.putQueryParameter("SignName", signName);
        request.putQueryParameter("TemplateCode", templateCode);
        request.putQueryParameter("TemplateParam", "{\"code\":"+mobile_code+"}");
        try {
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
        return mobile_code;
    }
 
 
}