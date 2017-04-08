class ShareMgr {
    private static instance: ShareMgr = null;
    public static getInstance(): ShareMgr {
        if(ShareMgr.instance == null) {
            ShareMgr.instance = new ShareMgr();
        }
        return ShareMgr.instance;
    }
    constructor() {

    }
    public g_main: Main = null;
    public g_channel: SessionChannel = null;
}

