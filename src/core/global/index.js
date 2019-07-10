class Global {
    getParam() {
        //将url后面的参数 ?name=msea&sex=1  >{name:"msea",sex:1}
        var search = {};
        try {
            location.search
                .substr(1)
                .split('&')
                .forEach(function (item) {
                    var s = item.split('=');
                    search[s[0]] = s[1];
                });
        } catch (e) {
            // 抛出异常
            throw new Error(JSON.stringify(search));
        }
        return search;
    }

}
export default new Global();