const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = btn.querySelector('.icon');

  btn.addEventListener('click', () => {
    const isOpen = answer.classList.contains('show');

    // Close all
    document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('show'));
    document.querySelectorAll('.faq-question .icon').forEach(ic => ic.src = 'assets/images/icon-plus.svg');

    // Toggle current
    if (!isOpen) {
      answer.classList.add('show');
      icon.src = 'assets/images/icon-minus.svg';
    } else {
      icon.src = 'assets/images/icon-plus.svg';
    }
  });
});
