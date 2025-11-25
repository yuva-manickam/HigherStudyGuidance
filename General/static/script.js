document.getElementById('studyForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const btn = document.querySelector('.btn');
    const loader = document.querySelector('.loader');
    const successMsg = document.querySelector('.success-message');

    // UI State: Loading
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.textContent = 'Generating Plan...';
    loader.style.display = 'block';
    successMsg.style.display = 'none';

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.status === 'success') {
            // Success Animation
            loader.style.display = 'none';
            successMsg.style.display = 'block';
            successMsg.textContent = 'Plan Generated Successfully! Downloading...';

            // Trigger Download
            const link = document.createElement('a');
            link.href = result.download_url;
            // Extract filename from URL (e.g., /download/Study_Plan_Name_IIT.pdf -> Study_Plan_Name_IIT.pdf)
            const filename = result.download_url.split('/').pop();
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset UI after delay
            setTimeout(() => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.textContent = 'Generate Plan';
                successMsg.style.display = 'none';
                form.reset();
            }, 3000);

        } else {
            alert('Error: ' + result.message);
            resetBtn();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
        resetBtn();
    }

    function resetBtn() {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.textContent = 'Generate Plan';
        loader.style.display = 'none';
    }
});
