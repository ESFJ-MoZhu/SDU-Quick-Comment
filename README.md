# SDU-Quick-Comment
#### 前言

这个教学评估我觉得很麻烦，每次都要点很多按钮，每一门课都要重新点。我也没什么想说的，于是写了这一个自动化脚本，技术含量不是很高，网页的逻辑有点混乱。还望多多包涵

#### 默认选项

默认都是填`很好`，`推荐`,`1`如果你想改的话，可以自己修改

#### 食用方法
##### 第一步
* 打开浏览器，进入评估页面，按F12，打开开发者工具
##### 第二步，这一个步骤有两个方法，推荐第一种
* 直接在控制台，找到这里，选中会有蓝色框框标记的选项，再执行代码，这样应该比先搜索的方法快
![](http://www.zhuzimiko.com/sduClick/1.png)
* 先点击`元素`一栏，按`Ctrl+F`搜索`公布`（其实就是快速定位到按钮相应的HTML元素，你想搜别的字也行），点一下元素中搜出来的东西(我也不知道为什么要这样，自己测试出来的，查到的原因可能是DOM元素未加载，有知道的大佬还请教我一下qaq)

![](http://www.zhuzimiko.com/sduClick/d280234e-d3d4-4bd5-bc5c-66fe33e2f43a.png)
##### 第三步

* 点击控制台一栏，输入给的js代码，回车，然后就一下子全选中了（Tips,如果运行过一次后，可以按`↑`直接弄出上次执行过的代码）

![](http://www.zhuzimiko.com/sduClick/8895197a-0c5b-489c-9de1-66dc5f4a4cef.png)


```js
document.querySelector('input[name="pj0601id_12"][value="6E4DA8E607384920B6AE40E9678DE068"]').checked = true;
document.querySelector('input[name="pj0601id_19"][value="07A4B17866674D70B66175C00BDAAEB8"]').checked = true;
document.querySelector('input[name="pj0601id_6"][value="47FB6AEED1E0485BA6AF4A5F440CC006"]').checked = true;
document.querySelector('input[name="pj0601id_8"][value="AA9064FF49CC42E1AD64FB06320B080D"]').checked = true;
document.querySelector('input[name="pj0601id_13"][value="CF631E51D7FD4256B5042ACC8675D07F"]').checked = true;
document.querySelector('input[name="pj0601id_15"][value="147873C403FE4D24AE8CC7C771AF727B"]').checked = true;
document.querySelector('input[name="pj0601id_5"][value="AF2B410820E14E669A673CA86B9AB415"]').checked = true;
document.querySelector('input[name="pj0601id_9"][value="E75E55C56F034859AB881B0E66F5E1BD"]').checked = true;
document.querySelector('input[name="pj0601id_20"][value="21B95EF7AD924CD890950E49173F5D9A"]').checked = true;
document.querySelector('input[name="pj0601id_14"][value="8162058C639C4322875086D7B0D22C1B"]').checked = true;
document.querySelector('input[name="pj0601id_11"][value="D8DC6659B42946DB9EE03FEC7F1B51CA"]').checked = true;
document.querySelector('input[name="pj0601id_2"][value="764EB7F908B14405B0B9EFAF9A714FE8"]').checked = true;
document.querySelector('input[name="pj0601id_3"][value="253D62EC675C415C8C963CB1F868B21D"]').checked = true;
document.querySelector('input[name="pj0601id_4"][value="8707D31CC1BF48CE8C2D05B1FD3BA99F"]').checked = true;
document.querySelector('input[name="pj0601id_7"][value="049A061A1A6143CAA2559C542FC07A78"]').checked = true;
document.querySelector('input[name="pj0601id_18"][value="B89ADD86563C42E69116C92184FA82F0"]').checked = true;
document.querySelector('input[name="pj0601id_10"][value="1BAAFE5C8D004F64B42E1DB5583B4166"]').checked = true;
document.querySelector('input[name="pj0601id_1"][value="633418C253CA4D9BBCEDCECA02A72136"]').checked = true;
document.querySelector('input[name="pj0601id_16"][value="93DE3717D8BE4594A16C87C9E2FEDE57"]').checked = true;
document.querySelector('input[name="pj0601id_17"][value="DC1DFEA70A6D4BA7B3D98CC86319DD2D"]').checked = true;
document.querySelector('input[name="kctzdnd"][value="3"]').checked = true;//课程难度适中,经过努力可以取得较好成绩s
document.querySelector('input[name="yxjspx"][value="1"]').checked = true;//推荐
const textarea = document.querySelector('#jynr_D5308AB6D49E4115A90CBEF8E5FB7082');
textarea.value = '1'; //评价内容
```
