import Swal from 'sweetalert2';

export const sweetError = (text: string) => {
  return Swal.fire({
    icon: 'error',
    title: 'Ooops...',
    text: text,
    timer: 2500,
    timerProgressBar: true,
  });
};
