 $(function() {
        function parseLyric(text) {
            //按行分割歌词
            let lyricArr = text.split('\n');
            //console.log(lyricArr)//0: "[ti:七里香]" "[ar:周杰伦]"...
            let result = []; //新建一个数组存放最后结果
            //遍历分割后的歌词数组，将格式化后的时间节点，歌词填充到result数组
            for (let i = 0; i < lyricArr.length; i++) {
                let playTimeArr = lyricArr[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g); //正则匹配播放时间
                let lineLyric = "";
                if (lyricArr[i].split(playTimeArr).length > 0) {
                    lineLyric = lyricArr[i].split(playTimeArr);
                }

                if (playTimeArr != null) {
                    for (let j = 0; j < playTimeArr.length; j++) {
                        let time = playTimeArr[j].substring(1, playTimeArr[j].indexOf("]")).split(":");
                        //数组填充
                        result.push({
                            time: (parseInt(time[0]) * 60 + parseFloat(time[1])).toFixed(4),
                            content: String(lineLyric).substr(1)
                        });
                    }
                }


            }
            return result;
        }

// 这里请按照格式放入相应歌词--开始
// 格式可能看着很复杂,其实是根据lrc歌词文件换句前加入\n 换行符,然后删除多余空行.即可!
        let text="[00:00.000] 作曲 : 解忧邵帅\n" +
            "[00:01.000] 作词 : 解忧邵帅\n" +
            "[00:24.14]跨越山河去拥抱你，多大风浪都在一起\n" +
            "[00:32.31]听到最美的记忆，关于你所有的消息\n" +
            "[00:40.37]盼望每天都看到你，雨天也风和日丽\n" +
            "[00:48.28]花花绿绿的世界里，我只会喜欢你\n" +
            "[00:56.15]愿你在我看不到的地方安然无恙\n" +
            "[01:00.09]愿你的冬天永远不缺暖阳\n" +
            "[01:03.99]愿你的明天不再经历雨打风霜\n" +
            "[01:08.06]愿你的未来永远热泪盈眶\n" +
            "[01:28.33]最美好的年纪里，柴米油盐酱醋你\n" +
            "[01:36.59]春风把我带给你，四月润湿了空气\n" +
            "[01:44.40]不温柔的世界里，你是我的运气\n" +
            "[01:52.77]我全部的好脾气，因为我爱你\n" +
            "[02:00.15]愿我在六十岁的时候陪你看看夕阳\n" +
            "[02:04.12]愿我在想起你嘴角微微上扬\n" +
            "[02:08.03]愿我在北方的冬天为你披件衣裳\n" +
            "[02:12.05]愿我在一贫如洗能有你在身旁\n" +
            "[02:48.04]愿你在我看不到的地方安然无恙\n" +
            "[02:52.06]愿你的冬天永远不缺暖阳\n" +
            "[02:56.11]愿你的明天不再经历雨打风霜\n" +
            "[03:00.03]愿你的未来永远热泪盈眶\n" +
            "[03:04.11]愿我在六十岁的时候陪你看看夕阳\n" +
            "[03:08.02]愿我在想起你嘴角微微上扬\n" +
            "[03:12.03]愿我在北方的冬天为你披件衣裳\n" +
            "[03:16.18]愿我在一贫如洗能有你在身旁\n" +
            "[03:20.84]制作人：唐显程\n" +
            "[03:22.39]编曲：唐显程 张东升\n" +
            "[03:23.59]吉他：张东升\n" +
            "[03:24.99]和声：邵帅 唐显程 张东升\n" +
            "[03:26.24]录音棚：郑州木纹之声\n" +
            "[03:27.49]混音：唐显程\n" +
            "[03:28.80]封面：刘扬\n" +
            "[03:30.40]祝有情人，白头到老\n" +
            "[03:32.66]\n";
        // 这里请按照格式放入相应歌词--结束
        let audio = document.querySelector('audio');

        let result = parseLyric(text); //执行lyc解析


        // 把生成的数据显示到界面上去
        let $ul = $("<ul></ul>");
        for (let i = 0; i < result.length; i++) {
            let $li = $("<li></li>").text(result[i].content);
            $ul.append($li);
        }
        $(".bg").append($ul);

        let lineNo = 0; // 当前行歌词
        let preLine =1; // 当播放6行后开始滚动歌词
        let lineHeight = -30; // 每次滚动的距离

        // 滚动播放 歌词高亮  增加类名active
        function highLight() {
            let $li = $("body>div.bg>ul>li");
            $li.eq(lineNo).addClass("active").siblings().removeClass("active");
            if (lineNo > preLine) {
                $ul.stop(true, true).animate({ top: (lineNo - preLine) * lineHeight });
            }
        }

        highLight();

        // 播放的时候不断渲染
        audio.addEventListener("timeupdate", function() {
            if (lineNo == result.length) return;
            if ($("body>div.bg>ul>li").eq(0).hasClass("active")) {
                $("body>div.bg>ul").css("top", "0");
            }
            lineNo =getLineNo(audio.currentTime);
            highLight();
            lineNo++;
        });

        // 当快进或者倒退的时候，找到最近的后面那个result[i].time
        function getLineNo(currentTime) {
            if (currentTime >= parseFloat(result[lineNo].time)) {
                // 快进
                for (let i = result.length - 1; i >= lineNo; i--) {
                    if (currentTime >= parseFloat(result[i].time)) {
                        return i;
                    }
                }
            } else {
                // 后退
                for (let i = 0; i <= lineNo; i++) {
                    if (currentTime <= parseFloat(result[i].time)) {
                        return i - 1;
                    }
                }
            }
        }

        //播放结束自动回到开头
        audio.addEventListener("ended", function() {
            lineNo = 0;
            highLight();
            audio.play();
            $("ul").css("top", "0");
        });
    });

