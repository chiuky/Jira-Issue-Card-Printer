// tested for Chrome, IE
javascript:(function(){
        var head = document.getElementsByTagName("head")[0];
        var scriptElement = document.createElement("script");
        scriptElement.src = 'https://github.com/chiuky/Jira-Issue-Card-Printer/blob/develop/bookmarklet.js';	
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
})();
