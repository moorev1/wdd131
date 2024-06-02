document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 'product1', name: 'Product A' },
        { id: 'product2', name: 'Product B' },
        { id: 'product3', name: 'Product C' },
        { id: 'product4', name: 'Product D' }
    ];

    const productSelect = document.getElementById('product-name');

    // Populate the select element with options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Increase review count and store in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // If on the review page, display the review count
    if (document.getElementById('review-count')) {
        document.getElementById('review-count').textContent = reviewCount;
    }
});
