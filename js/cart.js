// تحديث الإجمالي
function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
      const price = parseFloat(item.getAttribute('data-price'));
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      total += price * quantity;
    });
    document.getElementById('total').textContent = total.toFixed(2);
  }
  
  // زر الحذف
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
      updateTotal();
    });
  });
  
  // زيادة الكمية
  document.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', () => {
      const quantitySpan = btn.parentElement.querySelector('.quantity');
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  });
  
  // نقصان الكمية
  document.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', () => {
      const quantitySpan = btn.parentElement.querySelector('.quantity');
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantitySpan.textContent = quantity - 1;
        // إذا أصبحت الكمية 0، احذف المنتج
        if (quantity - 1 === 0) {
          btn.closest('.cart-item').remove();
        }
        updateTotal();
      }
    });
  });
  
  // تحديث الإجمالي عند تحميل الصفحة
  updateTotal();