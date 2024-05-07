
        function classificarTriangulo(lado1, lado2, lado3) {
           
            if (lado1 == 0 ||  lado2 == 0 || lado3 == 0 ) {
                alert("Triângulo invalido") ;
             }

            
            if (lado1 === lado2 && lado2 === lado3) {
                alert("Triângulo Equilátero") ;
            } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                alert("Triângulo Isósceles") ;
            } else {
                alert("Triângulo Escaleno") ;
            }
        }

        // let lado1 = 0;
        // let lado2 = 0;
        // let lado3 = 0;
 
        // let classificacao = classificarTriangulo(lado1, lado2, lado3);
        // console.log("Classificação do triângulo:", classificacao);
    