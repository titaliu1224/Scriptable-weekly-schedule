# Scriptable Weekly Schedule

在鎖定畫面顯示每週固定的行程（如課表、週會等）
Show the event reapting every week (e.g. class schedule, weekly meeting, etc.).

<p align="center" >
    <img alt="widget screenshot" src ="screenshot.jpg" width = "750">
</p>

> [English](#English-Manual)
> [中文](#中文說明)

## English Manual

### Setting Up

1. Download [Scriptable](https://scriptable.app/).
2. In Scriptable app, click "+" to create a new script. Then, copy the code in `schedule.json` to the new script.
3. Create a JSON file. I recommand 2 methods:
  - Create JSON with computer and iCloud
    1. Download and setup iCloud in your PC.
    2. Download `schedule_file.json` in your PC, Or create a JSON file by yourself, also copy and paste the script in `schedule.json`.
    3. After filling in the JSON file, move the file to iCloud > Scriptable directory.
  - Create JSON with iPhone
    1. Download a app that can edit JOSN file.
    2. Copy the script in `schedule_file.json` to a new file in iCloud > Scriptable.
    3. Fill up the file.
4. Please follow the rule of JSON:
  - The fields for all seven days of the week must be present, and none of them can be deleted. 
  - To set reminders on specific days of the week, use ‵{}‵ to enclose the activity. If an activity spans multiple days, copy and paste the information for the same activity within separate ‵[]‵ for each day.
  - Variables:
    - `name`: Event name (e.g. course title, etc.).
    - `describe`: Event note (e.g. classroom, meeting room, reminders, etc.).
    - `remind time`: Reminder start time, if the current time is later than the reminder time, the reminder will be displayed.
    - `end time`: Reminder end time, the reminder will end after the "end time", "end time" also display in the widget.
  - If there is no event, 

## 中文說明

### Setting Up

1. 需先在手機上下載 [Scriptable](https://scriptable.app/)
2. 在 Scriptable 中點擊右上角 + 號新增一份新文件，並複製貼上 `Schedule.js` 中的程式碼
3. 建立 Json 檔，這裡提供兩種方法
  - 使用電腦與 iCloud 建立
    1. 電腦中先下載並設定好 iCloud
    2. 在電腦中下載 `schedule_file.json`，或是自己建立一個 JSON 檔，並複製 `schedule.json` 中的程式碼
    3. 填寫要修改的內容後放至自己的 iCloud > Scriptable 資料夾中
  - 使用 iPhone 建立
    1. 下載可供編輯 JSON 檔案的程式
    2. 複製 `schedule_file.json` 中的程式碼，並將檔案放至 iCloud > Scriptable 資料夾中
    3. 填寫所需內容
  - 這裡還需要再作改善，不然這兩種方法都有點小麻煩 QQ
 4. JSON 檔的編寫規則如下：
   - 需有星期一到日的所有欄位，不得刪除其中任一個
   - 根據需要在星期幾提醒，使用 `{}` 包住單個活動，若需橫跨不同天，需在不同天的 `[]` 中複製貼上同一活動的資料
   - 變數名稱說明
     - `name` : 活動名稱（如課程名稱等）
     - `describe` : 活動註解（如教室、會議室、小提醒等）
     - `remind time` : 提醒開始的時間，若現在時間晚於提醒時間則會顯示提醒
     - `start time` : 活動開始的時間，會顯示於小工具的第三行
     - `end time` : 活動結束的時間，提醒會在過了 end time 後結束，此時間也會顯示於小工具的第三行
   - 如果沒有要通知的活動，直接讓 `[]` 中留空白
   - 範例：
     ```json
     {
        "Sunday": [
            
        ],
        "Monday": [
            {
                "name": "數學邏輯思維",
                "describe": "R2603",
                "remind time": "09:30",
                "start time": "10:10",
                "end time": "12:00"
            },
            {
                "name": "演算法概論",
                "describe": "R1401B, 帶平板",
                "remind time": "22:00",
                "start time": "22:10",
                "end time": "23:00"
            }
        ]
      }
      ```
5. 在手機上進入自訂鎖定畫面，點擊小工具欄，在加入小工具中找到 Scriptable ，加入中型（長方形）小工具
6. 點擊該小工具，選擇 `Schedule` 的 Script 並在 Parameter 中輸入剛剛 json 的檔名
<img alt="setting example" src="screenshot1.jpg" width="500">
7. 小工具將正常顯示，如需顯示兩個不同行程之小工具，依照上面的步驟建立另一個 json 檔即可

### Customization

可以設定預設 json 檔的檔名，進入 Schedule.js 後在上方尋找以下變數： 
- `scheduleFile` : 預設 json 檔名，若小工具沒有傳入正確參數，將採用此變數的值作為讀取的 json 檔

也可以透過更改程式中的變數來決定是否要顯示活動註解與時間，進入 Schedule.js 後在上方尋找以下兩個變數：
- `showDescription` : 設為 `true` 會顯示 json 中 `describe` 的內容，預設為 `true`
- `showEventTime` : 設為 `true` 會顯示 json 中 `start time` ~ `end time` 的內容，預設為 `true`

