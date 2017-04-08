class StringUtil{
	
	/**
	 *ÿ3λ����ʾ���� 
	 * @param value
	 * @return 
	 * 
	 */		
	public static tranNumberToString(value:number, delim:string="."):string
	{
		let temp:string = String(value);
		let str:string = "";
		for (let i:number = 0; i < temp.length; i++) 
		{
			let c:string = temp.charAt(temp.length - i - 1);
			str = c + str;
			if(Number(i+1)%3 == 0)str = delim+str;
		}
		if(str.charAt(0) == delim)str = str.slice(1);
		return str;
	}
}