function submitForm() {
    var formData = new FormData(document.getElementById('myForm'));

    fetch('https://script.google.com/macros/s/AKfycbyB4DBgAE7juqf8c7uqtxb91bD9OM7P3bIn5Y4ZcG6ileBzAfCNuNCJ2zl6URydXHKouA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        // Lấy giá trị độ tuổi từ form
        var age = parseInt(formData.get('tuoi'));

        // Chuyển hướng đến trang câu hỏi dựa trên độ tuổi
        if (age < 18) {
            window.location.href = 'questions.html';
        } else {
            window.location.href = 'questions1.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
