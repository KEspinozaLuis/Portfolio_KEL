import Swal from 'sweetalert2'

export const modalSuccess = () => {
    Swal.fire({
      title: "Datos enviados",
      html: `<div style="margin:0.5rem 0">
                <p>Gracias por contactarte.</p>
                <p>En la brevedad me pondré en contacto con usted.</p>
            </div>`,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };
  
  export const modalError = () => {
    Swal.fire({
      title: "Lo siento",
      text: "Estamos teniendo un problema",
      confirmButtonText: "Cerrar",
    });
  };