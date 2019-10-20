

class HistoryRouters {
    // 在初始化时监听popstate事件
    public routes: { [key: string]: ICallBackFunc }

    constructor() {
        this.routes = {};
        this._bindPopState();
    }
    // 初始化路由

    init(path: string) {
        history.replaceState({ path: path }, "", path);
        this.routes[path] && this.routes[path]();
    }

    // 将路径和对应回调函数加入hashMap储存
    route(path: string, callback: ICallBackFunc) {
        this.routes[path] = callback || function () { };
    }

    // 触发路由对应回调
    go(path: string) {
        history.pushState({ path: path }, "", path);
        this.routes[path] && this.routes[path]();
    }

    // 监听popstate事件
    _bindPopState() {
        window.addEventListener("popstate", (e: PopStateEvent) => {
            const path = e.state && e.state.path
            this.routes[path] && this.routes[path]();
        })
    }

}