// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: clock;

/**
 * Version: v0.1.0
 * Script created by: @titaliu1224
 * Github: https://github.com/titaliu1224/Scriptable-weekly-schedule
 * If there's any bug, feel free to tell me.
 */

const DEBUG = false;
const log = DEBUG ? console.log.bind(console) : function () { };

// Edit parameters here!
let scheduleFile = args.widgetParameter ? args.widgetParameter : "schedule_file.json";
let showDescription = true;
let showEventTime = true;

// Some settings
const widget = new ListWidget();
var date = new Date();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"]

// Read json
function openJson(){
    let fm = FileManager.iCloud();
    let scriptableFilePath = fm.documentsDirectory();
    let filePath = scriptableFilePath + "/" + scheduleFile;
    fm.downloadFileFromiCloud(filePath); 

    let data = fm.readString(filePath);
    let jsonData = JSON.parse(data);

    return jsonData;
}

// Text setting 
function getTodaySchedule(data){
    var todayWeek = weekDay[date.getDay()];
    var nowTime = [date.getHours(),  date.getMinutes()];
    let todayData = data[todayWeek];

    let eventName, eventDescribe, eventTime;
    var eventNow = false;
    for(var event of todayData){
        var remindTime = event["remind time"].split(":");
        var endTime = event["end time"].split(":");
        
        if(lateThen(nowTime, remindTime) && earlyThen(nowTime, endTime)){
            eventName = event["name"];
            eventDescribe = event["describe"];
            eventTime = event["start time"] + " ~ " + event["end time"]
            eventNow = true;
        }
    }
    if (!eventNow){
        eventName = "No events now.";
        eventDescribe = "Enjoy your free time!"
        eventTime = "";
    }
    buildWidget(eventName, eventDescribe, eventTime);
}

function lateThen(time1, time2){
    if(parseInt(time1[0]) < parseInt(time2[0])){
        return false;
    }
    if(parseInt(time1[1]) < parseInt(time2[1])){
        return false;
    }
    return true;
}

function earlyThen(time1, time2){
    return !lateThen(time1, time2);
}

// Build Widget
function buildWidget(eventName, eventDescribe, eventTime){
    console.log("Building widget with data: {event name: " + eventName + ", event describe: " + eventDescribe + "}");

    widgetEventName = widget.addText(eventName);
    widgetEventName.font = Font.boldSystemFont(15);
    if (showDescription){
        widgetDescribe = widget.addText(eventDescribe);
        widgetDescribe.font = Font.regularSystemFont(13);
    }
    if (showEventTime){
        widgetEventTime = widget.addText(eventTime);
        widgetEventTime.font = Font.regularSystemFont(12);
    }

}

let scheduleData = openJson();
getTodaySchedule(scheduleData);
Script.setWidget(widget);