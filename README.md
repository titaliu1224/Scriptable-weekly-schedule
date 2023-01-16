# Scriptable Weekly Schedule
在鎖定畫面顯示每週固定的行程（如課表、週會等）
![screenshot](screenshot.png)

## Setting Up
1. 需先在手機上下載 [Scriptable](https://scriptable.app/)
2. 在 Scriptable 中點擊右上角 + 號新增一份新文件，並複製貼上 `Schedule.js` 中的程式碼
3. 建立 json 檔，這裡提供兩種方法
  1. 使用電腦與 iCloud 建立
    1. 在電腦中下載 `schedule_file.json`，或是自己建立一個 json 檔，並複製 `schedule.json` 中的程式碼
    2. 填寫要修改的內容後放至自己的 iCloud > Scriptable 資料夾中
  2. 使用 iPhone 建立
    1. 下載可供編輯 json 檔案的程式
    2. 複製 `schedule.json` 中的程式碼，並將檔案放至 iCloud > Scriptable 資料夾中
    3. 填寫所需內容
  3. 這裡還需要再作改善，不然這兩種方法都有點小麻煩
 4. json 檔的編寫規則如下：
   - 需有星期一到日的所有欄位，不得刪除其中任一個
   - 根據需要在星期幾提醒，使用 `{}` 包住單個活動，若需橫跨不同天，需在不同天的 `[] ` 中複製貼上同一活動的資料
   - 變數名稱說明
     - `name`: 
 ```json
 {
    "Sunday": [
        {

        }
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
