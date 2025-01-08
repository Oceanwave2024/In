document.addEventListener('DOMContentLoaded', () => {
    // Modal management
    const modal = document.getElementById('waitlist-modal');
    const closeModalBtn = document.querySelector('.close');
    const ctaLinks = document.querySelectorAll('.cta-link');
    const joinWaitlistBtns = document.querySelectorAll('.btn.primary');
    const modalForm = modal.querySelector('form');

    // Open modal functions
    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Event listeners for opening modal
    [...ctaLinks, ...joinWaitlistBtns].forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Close modal when clicking 'x'
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission handler
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = modalForm.querySelector('input[type="text"]');
        const emailInput = modalForm.querySelector('input[type="email"]');
        const practiceSelect = modalForm.querySelector('select');
        
        // Validation
        if (!nameInput.value || !emailInput.value || !practiceSelect.value) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Collect form data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            practiceSize: practiceSelect.value,
            additionalInfo: modalForm.querySelector('textarea').value || null
        };
        
        // Simulated form submission
        console.log('Waitlist submission:', formData);
        
        // Show success message
        alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
        
        // Reset form and close modal
        modalForm.reset();
        closeModal();
    });
});