function comprar(){
  let tipodebloque=parseInt(document.getElementById("tipo").value)
  //let cuposComprados=parseInt(document.getElementById("cantidad").value)
  //let cuposComprados1=parseInt(document.getElementById("cantidad").value)
  //alert("Bienvendo usted a seleccionado el bloque  "+tipodebloque);
  let tiketsComprados= parseInt(prompt(" cuantos tikets desea adquirir"))
  const cupo1=20; 
  const cupo2=40;
  const cupo3=30;
  //const total1 = document.getElementById("total").innerHTML = `la cantidad de boletas compradas es: ${cuposComprados}`

  while ((tipodebloque==1) && (tiketsComprados<cupo1 )) {
    //const cuposRestantes= cupo1-20
    let tiketsRestantes= cupo1-tiketsComprados
    const boleto=prompt("desea mas tikets? quedan "+ tiketsRestantes )
    const boletoInt= parseInt(boleto)
    //alert (boletoInt)
    tiketsComprados+=boletoInt;
    
    if (tiketsComprados<= cupo1){
      document.write("El bloque esta lleno le recomiendo el bloque 2 o 3")
    }
  }
  while ((tipodebloque==2) && (tiketsComprados<cupo2 )) {
    //const cuposRestantes= cupo1-20
    let tiketsRestantes2= cupo2-tiketsComprados
    const boleto2=prompt("desea mas tikets? quedan "+ tiketsRestantes2 )
    const boletoInt2= parseInt(boleto2)
    //alert (boletoInt)
    tiketsComprados+=boletoInt2;
    
    if (tiketsComprados<= cupo2){
      document.write("El bloque esta lleno le recomiendo el bloque 1 o 3")
    }
  }
  while ((tipodebloque==3) && (tiketsComprados<cupo3 )) {
    //const cuposRestantes= cupo1-20
    let tiketsRestantes3= cupo3-tiketsComprados
    const boleto3=prompt("desea mas tikets? quedan "+ tiketsRestantes3 )
    const boletoInt3= parseInt(boleto3)
    //alert (boletoInt)
    tiketsComprados+=boletoInt3;
    
    if (tiketsComprados<= cupo3){
      document.write("El bloque esta lleno le recomiendo el bloque 1 o 2")
    }
  }

}







