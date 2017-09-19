module.exports = 
function zeros(expression) {
  let exprs=expression.split('*');
  let result=[]
  let fives=0,twos=0,tens=0;
  for(let expr of exprs){
  	if(expr.endsWith('!!')) result=doFactorial(expr,2);
  	else if(expr.endsWith('!')) result=doFactorial(expr,1);
  	fives+=count(result,5);
  	twos+=count(result,2);
  	tens+=count(result,10);
  }
  return tens+Math.min(twos,fives);
}

function doFactorial(expr,pow){
	let numb=expr.replace(new RegExp('!','g'),'');
	let result=[];
	for(let n=numb;n>0;n-=pow){
		result.push(n);
	}
	return result;
}

function count(array,n){
	let count=0;
	for(let el of array){
		if(n!==10){
			while(true){
				if((el%n===0)&&(el%10!==0)){
					 count++;
					 el=el/n;
					 continue;
				}
				if(el==50){
					 count++;
					 el=el/n;
				}
				else break;
			}
		}
		else{
			while(true){
				if(el%n===0){
					 count++;
					 el=el/n;
					 continue;
				}
				else break;
			}
		}
	}
	return count;
}
