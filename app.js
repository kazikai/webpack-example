var dataList = require( './options.js');
console.log( 'data', dataList.data );
console.log( 'data2', dataList.data2 );


function compareValue(val1, val2){
    var isSame = true;
    for ( var p in val1 ) {

        if (typeof(val1[p]) === "object"){
            var objectValue1 = val1[p],
                objectValue2 = val2[p];
            for( var value in objectValue1 ){
                isSame = compareValue(objectValue1[value], objectValue2[value]);
                if( isSame === false ){
                    return false;
                }
            }
        }else{
            if(val1 !== val2){
                isSame = false;
            }
        }
    }
    return isSame;
}

var a = { "a": 1 };
var b = { "a": 1 };

compareValue( a, b );