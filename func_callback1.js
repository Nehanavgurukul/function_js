var sampleCallbackfn = function() {
	console.log("Hi, I am reading compileyourknowledge.com blog");
};

var mainFunction = function(callBackfn) {
	if(typeof callBackfn === 'function'){ // 
		callBackfn(); // calling callback function inside container function
    }
};
mainFunction(sampleCallbackfn)


function sampleCallbackfn(){
	console.log('Hi Named function here');
}

function mainFunction(callBackfn) {
   if(typeof callBackfn === 'function'){      
	  callBackfn();
   }
}

mainFunction(sampleCallbackfn);