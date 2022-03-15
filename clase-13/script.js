document.getElementById('botonAlerta').addEventListener('click', () => {
    swal("Good job!", "You clicked the button!", "warning");
})

document.getElementById('botonMensaje').addEventListener('click', () => {
    Toastify({
        text: "This is a toast",
        duration: 5000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){
            Toastify({
                text: "This is a toast",
                duration: 3000,
               // destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(

                ){
                    
                } // Callback after click
              }).showToast();
        } // Callback after click
      }).showToast();
    
    
})

document.getElementById('botonFecha').addEventListener('click', () => {
    console.log(DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO())
})