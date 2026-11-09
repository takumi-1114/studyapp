'use strict';
/* StudyApp IT passport guided learning: original questions, not official past exams. */
(()=>{
const TOPICS=[
 {id:'binary',group:'テクノロジ',name:'2進数・基数変換',lesson:'コンピュータは0と1で数を表します。2進数の各桁は右から1、2、4、8、16…の重みを持ちます。例えば1011₂ = 8+2+1 = 11₁₀。10進数から2進数にするときは2で割った余りを逆順に並べます。'},
 {id:'logic',group:'テクノロジ',name:'論理演算',lesson:'AND（論理積）は両方が1のときだけ1、OR（論理和）は少なくとも一方が1なら1、NOT（否定）は0と1を反転します。条件式や回路の基本です。'},
 {id:'security',group:'テクノロジ',name:'情報セキュリティ',lesson:'機密性は許可された人だけが見られること、完全性は情報が正確に保たれること、可用性は必要なときに使えることです。多要素認証は異なる種類の要素を組み合わせます。'},
 {id:'network',group:'テクノロジ',name:'ネットワーク',lesson:'IPアドレスは通信先を識別するための番号です。DNSはドメイン名からIPアドレスを調べる仕組み、HTTPSは通信を暗号化するWebの仕組みです。'},
 {id:'database',group:'テクノロジ',name:'データベース',lesson:'リレーショナルデータベースではデータを表（テーブル）で管理します。主キーは行を一意に識別し、SQLのSELECT文はデータを取得するために使います。'},
 {id:'algorithm',group:'テクノロジ',name:'アルゴリズム',lesson:'アルゴリズムは問題を解くための手順です。順次・選択・繰返しが基本構造です。探索や整列ではデータ量に応じた処理効率も重要になります。'},
 {id:'management',group:'マネジメント',name:'プロジェクト管理',lesson:'プロジェクトは期限や目的が決まった活動です。WBSは作業を細かく分解する方法、ガントチャートは作業予定を時間軸で示す図です。'},
 {id:'service',group:'マネジメント',name:'サービスマネジメント',lesson:'サービスマネジメントでは安定したITサービスの提供を目指します。SLAはサービス品質の合意、インシデント管理はサービスを早く復旧させる活動です。'},
 {id:'strategy',group:'ストラテジ',name:'経営戦略・分析',lesson:'SWOT分析では強み・弱み（内部環境）と機会・脅威（外部環境）を整理します。KPIは目標に向けた途中経過を測る指標です。'},
 {id:'law',group:'ストラテジ',name:'法務・知的財産',lesson:'著作権は創作物の保護に関係します。個人情報保護では、利用目的や安全管理に配慮する必要があります。ソフトウェアの利用にはライセンス条件が適用されます。'}
];
const RAW=[
['logic','AND演算で 1 AND 0 の結果は？','0',['0','1','2','不定'],'ANDは両方1の場合だけ1です。'],
['logic','OR演算で 0 OR 1 の結果は？','1',['0','1','2','不定'],'ORは一方でも1なら1です。'],
['logic','NOT 1 の結果は？','0',['0','1','2','不定'],'NOTは真偽を反転します。'],
['security','機密性を表す説明はどれ？','許可された人だけが情報にアクセスできる',['許可された人だけが情報にアクセスできる','情報をいつでも使える','情報が変更されない','通信速度が速い'],'機密性は許可のないアクセスを防ぐ性質です。'],
['security','可用性を表す説明はどれ？','必要なときにサービスを利用できる',['必要なときにサービスを利用できる','情報を秘密にする','データの改ざんを検知する','データを圧縮する'],'可用性は必要なときに利用できることです。'],
['security','多要素認証の組合せとして適切なのは？','パスワードと指紋',['パスワードと指紋','パスワードと秘密の質問','2種類のパスワード','2つの暗証番号'],'知識要素と生体要素など異なる種類を組み合わせます。'],
['security','完全性を守る対策に近いものは？','改ざん検知',['改ざん検知','回線速度の増強','画面の明るさ調整','音量調整'],'完全性は情報の正確さや改ざんされていない状態に関係します。'],
['network','DNSの主な役割は？','ドメイン名からIPアドレスを調べる',['ドメイン名からIPアドレスを調べる','画像を圧縮する','電源を供給する','ウイルスを駆除する'],'DNSは名前解決を行います。'],
['network','HTTPSで主に保護されるものは？','Web通信の内容',['Web通信の内容','モニターの明るさ','CPUの温度','ハードディスクの容量'],'HTTPSはTLSを使って通信を暗号化します。'],
['network','IPアドレスの主な用途は？','ネットワーク上の通信先を識別する',['ネットワーク上の通信先を識別する','文章を翻訳する','画像を編集する','音楽を再生する'],'IPアドレスは通信先の識別に使います。'],
['database','SQLでデータを検索する文は？','SELECT',['SELECT','INSERT','UPDATE','DELETE'],'SELECTはデータ取得に使います。'],
['database','主キーの役割は？','表の各行を一意に識別する',['表の各行を一意に識別する','画像を圧縮する','通信を暗号化する','表を削除する'],'主キーは重複しない値で行を特定します。'],
['database','SQLで新しい行を追加する文は？','INSERT',['SELECT','INSERT','UPDATE','DELETE'],'INSERTはデータの追加に使います。'],
['algorithm','条件によって処理を分ける基本構造は？','選択',['順次','選択','繰返し','暗号化'],'条件分岐は選択構造です。'],
['algorithm','同じ処理を何度も行う基本構造は？','繰返し',['選択','順次','繰返し','探索'],'ループは繰返し構造です。'],
['algorithm','データを一定の規則で並べ替える処理は？','整列',['探索','整列','暗号化','認証'],'ソートは整列です。'],
['management','WBSの目的は？','作業を細分化して整理する',['作業を細分化して整理する','通信を暗号化する','売上を計算する','データを圧縮する'],'WBSは作業分解構成図です。'],
['management','作業の予定を時間軸に沿って示す図は？','ガントチャート',['ガントチャート','散布図','円グラフ','ER図'],'ガントチャートは工程の予定を視覚化します。'],
['management','プロジェクトの遅延につながる問題の可能性を事前に扱う活動は？','リスク管理',['リスク管理','文字コード変換','画像処理','暗号解読'],'リスクを特定・評価して対応を計画します。'],
['service','SLAとは何についての合意？','サービス品質水準',['サービス品質水準','著作権の帰属','税率','会社の株価'],'SLAはサービスレベル合意です。'],
['service','インシデント管理の主な目的は？','サービスをできるだけ早く復旧する',['サービスをできるだけ早く復旧する','新製品の広告を作る','給与を計算する','特許を出願する'],'インシデント管理は正常なサービス提供の早期回復を目指します。'],
['service','ITサービスを継続的に改善する活動に最も近いのは？','サービス改善',['サービス改善','部品の廃棄','画面の録画','個人の趣味'],'品質を評価し改善を繰り返します。'],
['strategy','SWOT分析の内部環境に当たるものは？','強みと弱み',['強みと弱み','機会と脅威','売上と税金','需要と供給'],'強みと弱みは内部、機会と脅威は外部です。'],
['strategy','KPIの説明として適切なのは？','目標達成までの進捗を測る指標',['目標達成までの進捗を測る指標','データの暗号方式','コンピュータの電源','画像ファイルの形式'],'KPIは重要業績評価指標です。'],
['strategy','SWOT分析の外部環境に当たるものは？','機会と脅威',['機会と脅威','強みと弱み','人員と設備','資産と負債'],'機会と脅威は外部環境の要素です。'],
['law','著作権で主に保護される対象は？','創作的に表現された著作物',['創作的に表現された著作物','単なるアイデアそのもの','自然現象','数学の定理そのもの'],'著作権は具体的な創作的表現を保護します。'],
['law','ソフトウェアの利用条件を確認する文書は？','ライセンス',['ライセンス','ガントチャート','IPアドレス','WBS'],'ライセンスには利用条件が定められます。'],
['law','個人情報の取扱いで重要なのは？','利用目的を明確にし安全に管理する',['利用目的を明確にし安全に管理する','無断で公開する','不要でも永久保存する','誰にでも共有する'],'個人情報は目的や安全管理などに配慮します。']
];
const $=id=>document.getElementById(id), KEY='studyapp_itcoach_v1';
let data;try{data=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{data={}}
if(!data||typeof data!=='object')data={};
data.stats=data.stats||{};data.history=data.history||[];
let mode='beginner',topic='binary',session=null;
function save(){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){console.warn('学習記録を保存できません',e)}}
function topicQuestions(id){
 const base=RAW.filter(q=>q[0]===id).map((q,i)=>({id:id+'_'+i,topic:id,question:q[1],answer:q[2],choices:q[3],explanation:q[4]}));
 // v10: verified generated questions and labeled unreviewed AI questions.
 try{const bank=JSON.parse(localStorage.getItem('studyapp_itbank_v10')||'{}');const map={'2進数':'binary','16進数':'binary','論理演算':'logic','割合':'strategy','損益分岐点':'strategy','稼働率':'service','情報セキュリティ':'security','ネットワーク':'network','データベース':'database','経営戦略':'strategy','法務':'law','マネジメント':'management','AI・データ活用':'algorithm'};
 if(Array.isArray(bank.items))for(const q of bank.items){if(map[q.topic]!==id||!q.question||!Array.isArray(q.choices)||!q.choices.includes(q.answer))continue;base.push({id:q.id,topic:id,question:(q.origin==='ai_unreviewed'?'【AI生成・未監修】':'')+q.question,answer:q.answer,choices:q.choices,explanation:q.explanation})}}
 catch(e){console.warn('追加問題の読込に失敗',e)}
 if(id==='binary'){
  for(let n=3;n<=30;n++){const correct=n.toString(2),choices=[correct,(n+1).toString(2),(n+2).toString(2),(Math.max(1,n-1)).toString(2)];base.push({id:'binary_'+n,topic:id,question:`10進数の ${n} を2進数で表すと？`,answer:correct,choices:[...new Set(choices)],explanation:`${n} = ${correct}₂。2で割った余りを下から順に読むと求められます。`})}
 }
 return base;
}
function stat(q){return data.stats[q.id]||{tries:0,correct:0,streak:0,next:0,mastery:0}}
function pool(id){return topicQuestions(id).sort((a,b)=>{const x=stat(a),y=stat(b);const now=Date.now();const ax=(x.next>now?1000:0)+x.mastery*10+x.tries*0.05;const ay=(y.next>now?1000:0)+y.mastery*10+y.tries*0.05;return ax-ay})}
function progress(id){const qs=topicQuestions(id);return Math.round(qs.reduce((s,q)=>s+stat(q).mastery,0)/qs.length)}
function overview(){
 $('itProgress').textContent=`このコースの習得度 ${Math.round(TOPICS.reduce((s,t)=>s+progress(t.id),0)/TOPICS.length)}%`;
 const el=$('itOverview');el.replaceChildren();
 for(const t of TOPICS){const r=document.createElement('div');r.className='it-topic-row';const left=document.createElement('div');const name=document.createElement('b');name.textContent=t.name;const detail=document.createElement('small');detail.textContent=`${t.group}・${topicQuestions(t.id).length}問`;left.append(name,detail);const pct=document.createElement('strong');pct.textContent=progress(t.id)+'%';r.append(left,pct);el.append(r)}
}
function renderMode(){for(const [id,v] of [['itBeginner','beginner'],['itPractice','practice'],['itReview','review']])$(id).classList.toggle('selected',mode===v)}
function render(){
 if(!session)return;const t=TOPICS.find(x=>x.id===session.topic),card=$('itLessonCard');card.classList.remove('hidden');$('itLessonTitle').textContent=t.name;$('itLessonStep').textContent=session.stage==='lesson'?'基礎解説':`${session.index+1} / ${session.questions.length}問`;
 const content=$('itLessonContent'),opts=$('itLessonOptions'),feedback=$('itLessonFeedback');content.replaceChildren();opts.replaceChildren();feedback.replaceChildren();
 $('itReveal').classList.add('hidden');$('itNext').disabled=false;
 if(session.stage==='lesson'){const p=document.createElement('p');p.className='it-note';p.textContent=t.lesson;content.append(p);$('itNext').textContent='練習問題へ →';return}
 if(session.index>=session.questions.length){const h=document.createElement('h3');h.textContent='今回の学習が終了しました';const p=document.createElement('p');p.textContent=`正解 ${session.correct} / ${session.questions.length}問。苦手な問題は復習に残ります。`;content.append(h,p);$('itNext').textContent='もう一度学習';$('itNext').onclick=()=>start();overview();return}
 const q=session.questions[session.index],h=document.createElement('h3');h.textContent=q.question;content.append(h);$('itNext').textContent='次の問題 →';$('itNext').disabled=!session.answered;
 q.choices.forEach((choice,i)=>{const b=document.createElement('button');b.textContent=`${'ABCD'[i]||i+1}. ${choice}`;b.disabled=session.answered;b.onclick=()=>answer(q,choice);if(session.answered&&choice===session.chosen)b.classList.add('it-picked');opts.append(b)});
 if(session.answered)showFeedback(q,session.chosen);
}
function showFeedback(q,choice){const ok=choice===q.answer;const box=$('itLessonFeedback');box.replaceChildren();const title=document.createElement('strong');title.textContent=ok?'正解です！':'不正解。正解：'+q.answer;const p=document.createElement('p');p.textContent=q.explanation;box.append(title,p)}
function answer(q,choice){if(session.answered)return;session.answered=true;session.chosen=choice;const ok=choice===q.answer;if(ok)session.correct++;
 const old=stat(q),st={...old};st.tries++;if(ok){st.correct++;st.streak++;st.mastery=Math.min(100,st.streak>=3?100:st.streak===2?75:50);st.next=Date.now()+(st.streak>=3?7:st.streak===2?3:1)*86400000}else{st.streak=0;st.mastery=Math.max(0,st.mastery-25);st.next=0}
 data.stats[q.id]=st;data.history.unshift({id:q.id,at:Date.now(),ok});data.history=data.history.slice(0,1000);save();render();overview();
}
function start(){topic=$('itTopic').value;const all=pool(topic),due=all.filter(q=>stat(q).next<=Date.now());const chosen=(mode==='review'?(due.filter(q=>stat(q).tries>0).length?due.filter(q=>stat(q).tries>0):due):all).slice(0,8);session={topic,stage:mode==='beginner'?'lesson':'questions',questions:chosen,index:0,answered:false,chosen:null,correct:0};$('itNext').onclick=next;render()}
function next(){if(!session)return;if(session.stage==='lesson'){session.stage='questions';render();return}if(session.index>=session.questions.length){start();return}if(!session.answered)return;session.index++;session.answered=false;session.chosen=null;render()}
function init(){
 const select=$('itTopic');for(const t of TOPICS){const op=document.createElement('option');op.value=t.id;op.textContent=`${t.group} / ${t.name}`;select.append(op)}
 $('itBeginner').onclick=()=>{mode='beginner';renderMode()};$('itPractice').onclick=()=>{mode='practice';renderMode()};$('itReview').onclick=()=>{mode='review';renderMode()};
 $('itStart').onclick=start;$('itNext').onclick=next;$('itStop').onclick=()=>{$('itLessonCard').classList.add('hidden');session=null;overview()};
 overview();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
