/**
 *
 * @author 
 *
 */
class GlobalEvents {
	public constructor() {
	}
	
	//收到服务端消息,解包后派发这条消息，携带了 proto 数据对象
    public static ReceiveServerMsg: string = "gameReceiveServerMsg";
}
