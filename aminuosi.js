// 勾选所有“好(4)”评分项
document.querySelectorAll("label.radio input[type='radio']").forEach(input => {
  const text = input.parentElement.textContent || "";
  if (text.includes("好(4)")) {
    input.checked = true;
  }
});
// 选择课程难度：“课程难度适中”,可以自行修改value
const nd = document.querySelector("input[name='kctzdnd'][value='3']");
if (nd) nd.checked = true;
// 选择推荐教师
const recommend = document.querySelector("input[name='yxjspx'][value='1']");
if (recommend) recommend.checked = true;
// 填写主观建议内容（可自定义）
document.querySelectorAll("textarea[name^='jynr']").forEach(textarea => {
  textarea.value = "课程内容扎实，老师讲解清晰，整体感觉良好。";
});
