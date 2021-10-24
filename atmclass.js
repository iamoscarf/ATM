class billete
{
    constructor(c, v)
    {      
        this.cantidad = c;
        this.valor = v;

    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
   for(var b of caja)
   {
    if(dinero > 0)
    {
        div = Math.floor(dinero / b.valor);
        if(div > b.cantidad)
        {
           papeles = b.cantidad

        }

        else
        {
            papeles = div;
        }
        entregado.push( new billete(b.valor, papeles));
        dinero = dinero - (b.valor * papeles);
    }
   }
   if(dinero > 0)
   {
       
     r.innerHTML = "saldo insuficiente";
   }
   else
   {
    for(var e of entregado)
    {
       
        r.innerHTML = r.innerHTML + e.valor + "-" + "billetes de $" + e.cantidad + "<br />";
    }
   }
}
