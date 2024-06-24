document.addEventListener('DOMContentLoaded', () => {
    const addReviewButtons = document.querySelectorAll('.add-review-btn');
    const reviewForms = document.querySelectorAll('.review-form');

    addReviewButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            reviewForms[index].classList.toggle('hidden');
        });
    });

    reviewForms.forEach((form, index) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const textarea = form.querySelector('textarea');
            const select = form.querySelector('select');
            const reviewText = textarea.value.trim();
            const rating = select.value;
            const reviewsContainer = form.previousElementSibling;

            if (reviewText && rating) {
                const reviewItem = document.createElement('div');
                reviewItem.classList.add('review-item');
                reviewItem.innerHTML = `<p>Review: ${reviewText}</p>`;
                reviewsContainer.appendChild(reviewItem);

                const ratingItem = document.createElement('div');
                ratingItem.classList.add('review-item');
                ratingItem.innerHTML = `<p>Rating: ${rating}/5</p>`;
                reviewsContainer.appendChild(ratingItem);

                textarea.value = '';
                select.value = '';

                form.classList.add('hidden');
            }
        });
    });
});
