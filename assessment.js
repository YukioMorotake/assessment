(function () {
    'use strict'
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    //assessmentButton.onclick = function(){
    assessmentButton.onclick = () => {
        const userName =userNameInput.value;
        if (userName.length === 0) {//名前空だった時は処理を終了する
            return;
        }
        console.log(userName);

        //診断結果表示エリアの作成
        removeAllChildren(resultDivided);//子供の要素削除
        removeAllChildren(tweetDivided);//子供の要素削除

        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);
    };

    /**
     * 指定した要素の子供をすべて削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllChildren(element) {
        while (resultDivided.firstChild) {//子供の要素がある限り削除を繰り返す
            resultDivided.removeChild(resultDivided.firstChild);
        }
    }
            
    const answers = [
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方ないです。',
        '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがものものごとをいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる助けられる人がいます。',
        '{userName}のいいところは思いやりです。気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはそのすべてです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動をおさえられる{userName}が皆から評価されています。',
        '{userName}のいいところは優しです。あなたの優しい雰囲気や立ち振る舞いに多くの人が癒されています'
    ];

    /**
     * 名前の文字列を渡すと診断結果を返す関数
     * ＠
     * @parm {string} userName ユーザーの名前
     * @return {string} 診断結果
     */
    function assessment(userName) {
        // todo 診断処理を実装する

        //文字のコード番号を取得してそれを足し合わせる
        let sumOfcarCode = 0;

        for (let i = 0; i < userName.length; i++) {
            sumOfcarCode = sumOfcarCode + userName.charCodeAt(i);
        }

        // 文字のコード番号の合計を回答の数で割って添字の数値を求める
        const index = sumOfcarCode % answers.length;
        let result = answers[index];

        result = result.replace(/\{userName\}/g, userName);

        return result;
    }

    console.log(assessment('田中'));
    console.log(assessment('次郎'));
    console.log(assessment('ダビデ'));
})();
