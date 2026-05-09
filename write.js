function uploadPost() {
    const title = document.getElementById("post-title").value;
    const date = document.getElementById("post-date").value;
    const content = document.getElementById("post-content").value;

    alert(
        "업로드 연습 완료!\n\n" +
        "제목: " + title + "\n" +
        "날짜: " + date + "\n" +
        "내용: " + content
    );
}