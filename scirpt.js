const buttons = document.querySelectorAll('.buy-btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        alert(`تم إضافة "${productName}" إلى سلة التسوق بنجاح!`);
    });
});