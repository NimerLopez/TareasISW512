
var nom=[],
    apelli=[],
    ntelefono=[];
    if(localStorage.getItem('p_nombre') !=null){
        nom=JSON.parse(localStorage.getItem('p_nombre'));
        apelli=JSON.parse(localStorage.getItem('p_apellido'));
        ntelefono=JSON.parse(localStorage.getItem('p_telefono'));
    }

    var eccionbotonregistar=document.querySelector('#btnregistrar')
    eccionbotonregistar.addEventListener('click',regisusu)

    function regisusu(){
        var n=document.querySelector('#nom').value,
        a=document.querySelector('#apellido').value,
        t=document.querySelector('#tel').value;

        nom.push(n);
        apelli.push(a);
        ntelefono.push(t);

        localStorage.setItem('p_nombre',JSON.stringify(nom));
        localStorage.setItem('p_apellido',JSON.stringify(apelli));
        localStorage.setItem('p_telefono',JSON.stringify(ntelefono));
        llenartabla();
    }
    

