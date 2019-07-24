<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>hola</h1>
</body>


<script>
// aunmtor: Steven Rocha
// Descripcion: array random
// funcion burbuja
function burbuja(nuevo)
	{
		for(var i=1;i<nuevo.length;i++)
		{
			for(var j=0;j<(nuevo.length-i);j++)
			{
				if(nuevo[j]>nuevo[j+1])
				{
					k=nuevo[j+1];
					nuevo[j+1]=nuevo[j];
					nuevo[j]=k;
				}
			}
		}
        return nuevo;
	}




// array random
function imprimir(min, max) {
 
 nuevo=Array(max);

 if(max>=0){
	document.write("Valores desordenados<br>");
     for(var i=1 ; i<=max ; i++){
		
      var numaleatorio=Math.floor(Math.random() * (nuevo.length));
	  console.log(nuevo[i]=numaleatorio);
	  
	  document.write(nuevo[i]=numaleatorio+ "<br>");
 
		}
 
	}
	arrayB=burbuja(nuevo);
 
	document.write("Valores ordenados<br>");
	for(i=0;i<arrayB.length;i++)
	{
		document.write(arrayB[i]+"<br>");
	}
 
}

imprimir(0,100);


</script>
</html>
