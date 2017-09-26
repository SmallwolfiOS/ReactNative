//
//  CalendarManager.m
//  Helloworld
//
//  Created by 马海平 on 16/8/4.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import "RCTConvert.h"
@implementation CalendarManager


//默认名称
RCT_EXPORT_MODULE()
//对外提供调用方法
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}
//对外提供调用方法,为了演示事件时间格式化 secondsSinceUnixEpoch
RCT_EXPORT_METHOD(addEventMore:(NSString *)name location:(NSString *)location data:(NSNumber*)secondsSinceUnixEpoch){
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
}
//对外提供调用方法,为了演示事件时间格式化 ISO8601DateString
RCT_EXPORT_METHOD(addEventMoreTwo:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)
{
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
}
//对外提供调用方法,为了演示事件时间格式化 自动类型转换
RCT_EXPORT_METHOD(addEventMoreDate:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
  NSDateFormatter *formatter = [[NSDateFormatter alloc] init] ;
  [formatter setDateFormat:@"yyyy-MM-dd"];
  NSLog(@"获取的事件信息:%@,地点:%@,时间:%@",name,location,[formatter stringFromDate:date]);
}

//对外提供调用方法,为了演示事件时间格式化 传入属性字段
RCT_EXPORT_METHOD(addEventMoreDetails:(NSString *)name details:(NSDictionary *) dictionary)
{
  NSString *location = [RCTConvert NSString:dictionary[@"location"]];
  NSDate *time = [RCTConvert NSDate:dictionary[@"time"]];
  NSString *description=[RCTConvert NSString:dictionary[@"description"]];
  NSLog(@"获取的事件信息:%@,地点:%@,时间:%@,备注信息:%@",name,location,time,description);
  
}
//对外提供调用方法,演示Callback
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events=@[@"张三",@"李四",@"王五"];
  callback(@[[NSNull null],events]);
}
//对外提供调用方法,演示Promise使用
RCT_REMAP_METHOD(findEventsPromise,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events =@[@"张三",@"李四",@"王五",@"赵六"];
  if (events) {
    resolve(events);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}
//进行设置封装常量给JavaScript进行调用,该方法封装的数据只会初始化返回一次，也就是说如果在运行过程中你修改了constantsToExport的返回值，也不会影响到JavaScript端调用的结果。
-(NSDictionary *)constantsToExport{
  return @{@"firstDayOfTheWeek":@"Monday",@"secondDayOfTheWeek":@"Tuseday"};
}








@end
