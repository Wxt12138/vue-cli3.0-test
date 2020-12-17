/*
存储session
*/

export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/*
获取session
*/


export const getStore = name => {
        if (!name) return
        return window.localStorage.getItem(name)
    }
    /*
    删除session
    */

export const removeStore = (name) => {
    if (!name) return
    window.localStorage.removeItem(name)
}


// 获取url参数

export const getName = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let url = window.location.search || window.location.hash.split("?")[1];
    let r = url.substr(1).match(reg) || url.match(reg);
    console.log(7, r, url)
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}