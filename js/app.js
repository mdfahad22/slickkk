$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:500,
    dots:true,
    adaptiveHeight:true,
    centerMode:true,
    arrows:true,
prevArrow:`.prev`,
nextArrow:`.next`
})



let deleteBtn=$(`.deleteBtn`)
deleteBtn.click(function(){

  Swal.fire({
    title: 'Are you sureee?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })



})


})


