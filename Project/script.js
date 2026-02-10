document.addEventListener('DOMContentLoaded', () => {
    const signupFormWrapper = document.getElementById('signupForm');
    const loginFormWrapper = document.getElementById('loginForm');
    const showLoginBtn = document.getElementById('showLogin');
    const showSignupBtn = document.getElementById('showSignup');
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signupFormWrapper.classList.add('hidden');
        loginFormWrapper.classList.remove('hidden');
    });

    showSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormWrapper.classList.add('hidden');
        signupFormWrapper.classList.remove('hidden');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullname = document.getElementById('signup-fullname').value;
        const company = document.getElementById('signup-company').value;
        const email = document.getElementById('signup-email').value;
        const phone = document.getElementById('signup-phone').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (password !== confirmPassword) {
            showErrorMessage('Passwords do not match! 🔒');
            return;
        }

        if (password.length < 8) {
            showErrorMessage('Password must be at least 8 characters! 🔐');
            return;
        }

        console.log('Signup submitted:', { fullname, company, email, phone, password });

        showSuccessMessage('Account created successfully! 🎉');

        setTimeout(() => {
            signupForm.reset();
        }, 1500);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        console.log('Login submitted:', { email, password });

        showSuccessMessage('Welcome back! 🚀');

        setTimeout(() => {
            loginForm.reset();
        }, 1500);
    });

    const socialButtons = document.querySelectorAll('.btn-social');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Social sign-in clicked');
            showSuccessMessage('Redirecting to social login... 🔐');
        });
    });

    function showSuccessMessage(message) {
        showToast(message, 'success');
    }

    function showErrorMessage(message) {
        showToast(message, 'error');
    }

    function showToast(message, type = 'success') {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;

        const bgGradient = type === 'success'
            ? 'linear-gradient(135deg, #10B981, #059669)'
            : 'linear-gradient(135deg, #EF4444, #DC2626)';

        toast.style.cssText = `
            position: fixed;
            top: 24px;
            right: 24px;
            background: ${bgGradient};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 15px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        if (!document.querySelector('style[data-toast-styles]')) {
            style.setAttribute('data-toast-styles', 'true');
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    const inputs = document.querySelectorAll('input[type="email"], input[type="password"], input[type="text"], input[type="tel"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const iconWrapper = input.closest('.input-with-icon');
            if (iconWrapper) {
                const icon = iconWrapper.querySelector('svg');
                if (icon) {
                    icon.style.color = '#2563EB';
                    icon.style.transition = 'color 0.3s ease';
                }
            }
        });

        input.addEventListener('blur', () => {
            const iconWrapper = input.closest('.input-with-icon');
            if (iconWrapper) {
                const icon = iconWrapper.querySelector('svg');
                if (icon) {
                    icon.style.color = '#64748B';
                }
            }
        });

        input.addEventListener('input', () => {
            if (input.value) {
                input.style.borderColor = '#10B981';
            } else {
                input.style.borderColor = '#E2E8F0';
            }
        });
    });

    const passwordInput = document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('signup-confirm-password');

    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', () => {
            if (passwordInput.value && confirmPasswordInput.value) {
                if (passwordInput.value === confirmPasswordInput.value) {
                    confirmPasswordInput.style.borderColor = '#10B981';
                } else {
                    confirmPasswordInput.style.borderColor = '#EF4444';
                }
            }
        });
    }

    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.style.animationDelay = `${0.6 + index * 0.1}s`;
    });
});
