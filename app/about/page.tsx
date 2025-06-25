export default function ChihuahuaPage() {
const name="つぼみ";
const food="ドックフード";
const dislike="散歩";
const like="ささみ";
const age="8";
const place="クッション"


return(
    <main className="globas.css">
    <h1>ペット紹介</h1>
<h2 id="information">こんにちは</h2>
<ul>
    <li id="what">紹介文</li>
    <li>私の名前は{name}です</li>
    <li>いつも食べるのは{food}です</li>
    <li>好きな食べ物は{like}です</li>
    <li>嫌いなことは{dislike}です</li>
    <li>年齢は{age}です</li>
    <li>お気に入りの場所はhaha{place}です</li>
</ul>
</main>
)
};
