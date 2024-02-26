package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.JiafenshenqingEntity;
import com.entity.view.JiafenshenqingView;

import com.service.JiafenshenqingService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 加分申请
 * 后端接口
 * @author 
 * @email 
 * @date 2022-03-14 14:49:12
 */
@RestController
@RequestMapping("/jiafenshenqing")
public class JiafenshenqingController {
    @Autowired
    private JiafenshenqingService jiafenshenqingService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,JiafenshenqingEntity jiafenshenqing,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("xuesheng")) {
			jiafenshenqing.setXuehao((String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("jiaoshi")) {
			jiafenshenqing.setJiaoshizhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<JiafenshenqingEntity> ew = new EntityWrapper<JiafenshenqingEntity>();
		PageUtils page = jiafenshenqingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, jiafenshenqing), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,JiafenshenqingEntity jiafenshenqing, 
		HttpServletRequest request){
        EntityWrapper<JiafenshenqingEntity> ew = new EntityWrapper<JiafenshenqingEntity>();
		PageUtils page = jiafenshenqingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, jiafenshenqing), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( JiafenshenqingEntity jiafenshenqing){
       	EntityWrapper<JiafenshenqingEntity> ew = new EntityWrapper<JiafenshenqingEntity>();
      	ew.allEq(MPUtil.allEQMapPre( jiafenshenqing, "jiafenshenqing")); 
        return R.ok().put("data", jiafenshenqingService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(JiafenshenqingEntity jiafenshenqing){
        EntityWrapper< JiafenshenqingEntity> ew = new EntityWrapper< JiafenshenqingEntity>();
 		ew.allEq(MPUtil.allEQMapPre( jiafenshenqing, "jiafenshenqing")); 
		JiafenshenqingView jiafenshenqingView =  jiafenshenqingService.selectView(ew);
		return R.ok("查询加分申请成功").put("data", jiafenshenqingView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        JiafenshenqingEntity jiafenshenqing = jiafenshenqingService.selectById(id);
        return R.ok().put("data", jiafenshenqing);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        JiafenshenqingEntity jiafenshenqing = jiafenshenqingService.selectById(id);
        return R.ok().put("data", jiafenshenqing);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody JiafenshenqingEntity jiafenshenqing, HttpServletRequest request){
    	jiafenshenqing.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(jiafenshenqing);
        jiafenshenqingService.insert(jiafenshenqing);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
	@IgnoreAuth
    @RequestMapping("/add")
    public R add(@RequestBody JiafenshenqingEntity jiafenshenqing, HttpServletRequest request){
    	jiafenshenqing.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(jiafenshenqing);
        jiafenshenqingService.insert(jiafenshenqing);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody JiafenshenqingEntity jiafenshenqing, HttpServletRequest request){
        //ValidatorUtils.validateEntity(jiafenshenqing);
        jiafenshenqingService.updateById(jiafenshenqing);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        jiafenshenqingService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<JiafenshenqingEntity> wrapper = new EntityWrapper<JiafenshenqingEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("xuesheng")) {
			wrapper.eq("xuehao", (String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("jiaoshi")) {
			wrapper.eq("jiaoshizhanghao", (String)request.getSession().getAttribute("username"));
		}

		int count = jiafenshenqingService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	







}
