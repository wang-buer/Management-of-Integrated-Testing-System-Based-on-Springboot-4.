
var projectName = '学生综合成绩测评系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '通知公告',
	url: './pages/tongzhigonggao/list.html'
}, 

{
	name: '论坛交流',
	url: './pages/forum/list.html'
}, 
{
	name: '校园资讯',
	url: './pages/news/list.html'
},
{
	name: '留言板',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springboote931p/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"通知公告","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除","导出"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","导出"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","导出"],"menu":"毕业要求","menuJump":"列表","tableName":"biyeyaoqiu"}],"menu":"毕业要求管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"学分建议","menuJump":"列表","tableName":"xuefenjianyi"}],"menu":"学分建议管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"班级建议","menuJump":"列表","tableName":"banjijianyi"}],"menu":"班级建议管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","删除"],"menu":"课堂点名","menuJump":"列表","tableName":"ketangdianming"}],"menu":"课堂点名管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","删除"],"menu":"课程成绩","menuJump":"列表","tableName":"kechengchengji"}],"menu":"课程成绩管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除","审核"],"menu":"加分提交","menuJump":"列表","tableName":"jiafentijiao"}],"menu":"加分提交管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除","审核"],"menu":"奖学金提交","menuJump":"列表","tableName":"jiangxuejintijiao"}],"menu":"奖学金提交管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除","导出"],"menu":"疫情打卡","menuJump":"列表","tableName":"yiqingdaka"}],"menu":"疫情打卡管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"论坛交流","tableName":"forum"}],"menu":"论坛交流"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"校园资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"通知公告列表","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看"],"menu":"通知公告","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"毕业要求","menuJump":"列表","tableName":"biyeyaoqiu"}],"menu":"毕业要求管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看"],"menu":"学分建议","menuJump":"列表","tableName":"xuefenjianyi"}],"menu":"学分建议管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"课堂点名","menuJump":"列表","tableName":"ketangdianming"}],"menu":"课堂点名管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"课程成绩","menuJump":"列表","tableName":"kechengchengji"}],"menu":"课程成绩管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"加分申请","menuJump":"列表","tableName":"jiafenshenqing"}],"menu":"加分申请管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"加分提交","menuJump":"列表","tableName":"jiafentijiao"}],"menu":"加分提交管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"奖学金申请","menuJump":"列表","tableName":"jiangxuejinshenqing"}],"menu":"奖学金申请管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"奖学金提交","menuJump":"列表","tableName":"jiangxuejintijiao"}],"menu":"奖学金提交管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"疫情打卡","menuJump":"列表","tableName":"yiqingdaka"}],"menu":"疫情打卡管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"通知公告列表","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看"],"menu":"通知公告","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"毕业要求","menuJump":"列表","tableName":"biyeyaoqiu"}],"menu":"毕业要求管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看"],"menu":"学分建议","menuJump":"列表","tableName":"xuefenjianyi"}],"menu":"学分建议管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看"],"menu":"班级建议","menuJump":"列表","tableName":"banjijianyi"}],"menu":"班级建议管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","课堂点名","课程成绩"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除"],"menu":"课堂点名","menuJump":"列表","tableName":"ketangdianming"}],"menu":"课堂点名管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"课程成绩","menuJump":"列表","tableName":"kechengchengji"}],"menu":"课程成绩管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除","审核","申请提交"],"menu":"加分申请","menuJump":"列表","tableName":"jiafenshenqing"}],"menu":"加分申请管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"加分提交","menuJump":"列表","tableName":"jiafentijiao"}],"menu":"加分提交管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除","审核","申请提交"],"menu":"奖学金申请","menuJump":"列表","tableName":"jiangxuejinshenqing"}],"menu":"奖学金申请管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"奖学金提交","menuJump":"列表","tableName":"jiangxuejintijiao"}],"menu":"奖学金提交管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"疫情打卡","menuJump":"列表","tableName":"yiqingdaka"}],"menu":"疫情打卡管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"通知公告列表","menuJump":"列表","tableName":"tongzhigonggao"}],"menu":"通知公告模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
