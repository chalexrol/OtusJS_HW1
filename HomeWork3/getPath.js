
//getPath - поиск уникального селектора
//Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
// getPath(UnicEl) =>   при клике мыши на элемент P1 например выводит form:nth-child(1)>div:nth-child(1)>p:nth-child(1)

function getPath(UnicEl){

	let arr = [];

	function SearchElements(el){

            if(el === document.body) 
            {
			return arr.reverse();
		    } 

	    	arr.push(el.tagName.toLowerCase() + getChildPosition(el));
	    	return SearchElements(el.parentElement);
	}

	function getChildPosition(el){

		let previousEl = el.previousElementSibling,
			count = 1,
			result = '';

        while(previousEl)
        
        {
			++count;
			previousEl = previousEl.previousElementSibling;
		}

		result = ':nth-child(' + count + ')';
		return result;
    }

    let strOut = SearchElements(UnicEl).join('>');
    console.log(strOut);
    console.log(document.querySelector(strOut));
    console.log(document.querySelectorAll(strOut));
    alert(strOut);
}

/* result in consol

form:nth-child(1)>div:nth-child(1)>p:nth-child(1)
getPath.js:40 <p>​P1​</p>​
getPath.js:41 NodeList [p]0: plength: 1__proto__: NodeList

/*