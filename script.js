document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('coverDetails');
    const iframe = document.getElementById('coverPreview');

    form.addEventListener('input', function() {
        const subtitle = document.getElementById('subtitle').value;
        const title = document.getElementById('title').value;
        const courseSubCode = document.getElementById('subjectCode').value;
        const username = document.getElementById('name').value;
        const enrollment = document.getElementById('enrollment').value;
        const courseName = document.getElementById('courseName').value;
        const teacherName = document.getElementById('teacherName').value;
        const departmentName = document.getElementById('departmentName').value;

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document || iframe;

        iframeDoc.getElementById('subtitle').textContent = subtitle;
        iframeDoc.getElementById('title').textContent = title;
        iframeDoc.getElementById('courseSubCode').textContent = courseSubCode;
        iframeDoc.getElementById('username').textContent = username;
        iframeDoc.getElementById('enrollment').textContent = enrollment;
        iframeDoc.getElementById('courseName').textContent = courseName;
        iframeDoc.getElementById('teacherName').textContent = teacherName;
        iframeDoc.getElementById('rightFooterText').innerHTML = `<i>Deptt. of ${departmentName}</i><br>Jamia Hamdard, New Delhi - 110062`;
        iframeDoc.getElementById('submittedText').innerHTML = `Submitted in partial fulfillment of the requirement of ${courseName} Program at <br> Deptt. of ${departmentName}<br>Jamia Hamdard, New Delhi`;
    });


    document.getElementById('downloadBtn').addEventListener('click', function(e) {
        e.preventDefault();
        printIframeContent();
    });
});

function printIframeContent() {
    const iframe = document.getElementById('coverPreview');
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
}
