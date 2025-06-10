# SDU-Quick-Comment
### 前言

这个教学评估我觉得很麻烦，每次都要点很多按钮，每一门课都要重新点。我也没什么想说的，于是写了这一个自动化脚本，帮助大家。

### 默认选项

默认都是填`很好`，`推荐`，`课程内容扎实，老师讲解清晰，整体感觉良好。`如果你想改的话，可以自己修改

### 食用方法
#### 第一步
* 打开浏览器，进入评估页面，按F12，打开开发者工具
#### 第二步，这一个步骤有两个方法，推荐第一种。这个疑惑已经明白了，我将写在文末
* （推荐方法，快速）直接在控制台，找到这里，（这个东西叫 **上下文选择器** 或 **Frame 切换器**）选中`FrameNew_XSD...`(选中会有蓝色框框标记）
![](http://www.zhuzimiko.com/sduClick/2.png)
* ~~((慢一点的方法，不推荐) 先点击`元素`一栏，按`Ctrl+F`搜索`公布`（其实就是快速定位到按钮相应的HTML元素，你想搜别的字也行），点一下元素中搜出来的东西,这样可以切换上下文，这时再去控制台可以注意到上下文选择器已经从`top`变成`FrameNew_XSD...`了)~~
 ~~(我也不知道为什么要这样，自己测试出来的，查到的原因可能是DOM元素未加载，有知道的大佬还请教我一下qaq)~~ **已解决，写在文末，gpt生成的**

![](http://www.zhuzimiko.com/sduClick/d280234e-d3d4-4bd5-bc5c-66fe33e2f43a.png)
#### 第三步

* 点击控制台一栏，输入给的js代码，回车，然后就一下子全选中了（Tips,如果运行过一次后，可以按`↑`直接弄出上次执行过的代码）

![image](https://github.com/user-attachments/assets/f443bfce-e2a6-4118-8100-f78886dbb8bf)



```js
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
```
### 解决问题
通过切换开发者工具中 "帧 (Frame)" 的选项，解决了找不到 DOM 元素的问题。这种情况通常出现在页面嵌套了多个 iframe（嵌套框架）的情况下。

为什么切换帧解决了问题？
#### iframe 的独立性
* 如果网页中嵌套了 iframe，每个 iframe 有自己的独立 DOM 树。
默认情况下，浏览器开发者工具会加载主页面的 DOM。如果目标元素位于某个 iframe 中，必须切换到对应的 iframe，才能访问其 DOM。
* 选择合适的 Frame
当你在控制台中执行查询命令时，必须确保当前开发者工具的 "帧" 已切换到目标 iframe，否则会导致 null 错误。
切换帧后，控制台的上下文环境会更新到该 iframe 中，这样查询命令就能正常找到 DOM 元素。
如何判断目标元素位于 iframe 中？
右键检查元素

如果右键点击页面上的某个元素，然后点击 "检查 (Inspect)"，开发者工具会自动切换到包含该元素的 iframe。
查看页面结构

在 "元素" (Elements) 面板中，查看页面 DOM 结构是否包含 <iframe> 标签。
找到包含目标内容的 iframe，并注意其 name 或 id 属性。

