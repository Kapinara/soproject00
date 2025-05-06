document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    const uploadArea = document.querySelector('.upload-resume');
    const fileInput = document.getElementById('resume-upload');

    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            uploadArea.innerHTML = `
                <i class="fas fa-check-circle" style="color: #28a745;"></i>
                <h3>Файл "${fileInput.files[0].name}" успешно выбран</h3>
                <p>Теперь заполните остальные поля формы</p>
            `;
        }
    });

    const form = document.getElementById('candidate-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        alert('Ваше резюме успешно отправлено! Мы свяжемся с вами в ближайшее время.');
        form.reset();

        uploadArea.innerHTML = `
            <i class="fas fa-cloud-upload-alt"></i>
            <h3>Перетащите файл сюда или нажмите для загрузки</h3>
            <p>Поддерживаемые форматы: PDF, DOC, DOCX (макс. 5MB)</p>
        `;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});