


  // الحصول على جميع الصور الصغيرة
const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImg = document.getElementById('main-img');

  // إضافة حدث النقر لكل صورة صغيرة
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // تغيير مسار الصورة الكبيرة لتطابق الصورة الصغيرة
mainImg.src = this.src;
    });
  });

