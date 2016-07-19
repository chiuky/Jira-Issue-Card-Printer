# Issue-Tracker-Card-Printer 
###### formerly kown as Jira-Issue-Card-Printer

Beautiful Issue Tracker Card Printer

I've written a little bookmarklet for converting digital issues in a pretty card layout for printing.

So long
Bengt

### Support
#### Browser
* **Chrome Browsers 46+**
* **Safari 9+**.

#### Issue tracker
* **Jira**
* **Trello**
* **PivotTracker**
* **YouTrack**

### Card Layout
![Card Layout](CardExample.png)

### Installation
#### Drag'n'Drop
got to [Instalation Site](https://github.com/chiuky/Jira-Issue-Card-Printer/blob/develop/bookmarkInstalation.html)

*or*

#### Manually
Create Bookmark with folowing content.
```
javascript:(function(){ var script = document.createElement("script"); script.src = "https://github.com/chiuky/Jira-Issue-Card-Printer/blob/develop/bookmarklet.js"; document.body.appendChild(script); document.body.removeChild(script);})();
```

### Usage
Just select Issue(s) then run the Bookmarklet.

Marker to separate description into print and no print area ("~~~~~")

#### Select multible issues
##### Jira Agile
holding STRG / CMD or SHIFT and click on issues
##### Jira Classic
search for issues und select *List View*



###Info
I make use of **Google Analytics** to get some usage feedback. Please let me.
I will only track the **pageview** and the **amount of rendered cards**
**I do and will not track anything else**
