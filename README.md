# 噗浪偷偷說隱藏器

## 說明

### 製作緣由
  
偷偷說是一個噗浪新增的功能  
個人當初蠻喜歡這個想法，可以不用顧慮自己的身分發表意見  
但最近從某實況主的噗浪看到一連串的討論  
從自己的經驗中也發現  
很多偷偷說並非用在正向的用途（e.g. 自我揭露、徵求意見）  
而是中傷、發洩、背刺  
  
**「你有說的權利，我也有不看的權利」**  
  
而「偷偷說」的瑕疵在於「你不知道偷偷說的是誰，所以無法拒絕」  
  
### 警告

「偷偷說」仍然有它的正面存在意義  
使用本外掛會導致你看不到任何（自己以外的）偷偷說  
只有在「偷偷說」嚴重影響你的噗浪使用體驗，萬不得已時，才建議使用  

### 期許

理想上應該要有功能可以「封鎖偷偷說的主人」，也就是：  
**雖然我不知道他是誰，但可以透過系統過濾這個人的言論**  
目前噗浪尚未有這功能，在這之前只有消極地隱藏所有「偷偷說」  
希望有一天噗浪功能可以更完善，就不需要這個外掛了  
  
## 實作細節

* 使用 jQuery Selector 過濾出「偷偷說」的 plurk
* 修改 CSS property 在視覺上將「偷偷說」的 DOM 隱藏
* 使用 AJAX 送出 POST request 將「偷偷說」的 plurk 消音

### CSS 遮蔽功能原始碼出處

* [http://www.plurk.com/p/i2o4o6](http://www.plurk.com/p/i2o4o6)
* [http://paste.plurk.com/show/1454187/](http://paste.plurk.com/show/1454187/)

### 部分功能參考自
* [Plurk-Mute-And-Hide](https://chrome.google.com/webstore/detail/plurk-mute-and-hide/lnmgaimimdcehmcgnkplanipbglnngce)

## 更新紀錄

* 0.1.1
  - 優化 jQuery 效率
  - 降低檢查頻率為 3 秒一次
* 0.1.0
  - 上架

## 安裝方式

* 本軟體為 Chrome 擴充程式
  - [原始碼 @ git repo](https://github.com/leafwind/plurkWhisperHider.git)
  - [安裝網址 @ Chrome Web Store](https://chrome.google.com/webstore/detail/%E5%99%97%E6%B5%AA%E5%81%B7%E5%81%B7%E8%AA%AA%E9%9A%B1%E8%97%8F%E5%99%A8/cfjgcnldjjjoejmoigomdobggjnphclh)

## 聲明

本軟體：

* 不會記錄您的上網歷程
* 不會記錄您試圖上幾次這些網站
* 不會記錄您與這些網站傳輸了什麼資料
