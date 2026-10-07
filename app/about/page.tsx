import Counter from "./Counter";
async function getInfo(){return {title:"О проекте",description:"Данные получены на сервере без useEffect."};}
export default async function AboutPage(){const info=await getInfo();return <main><section className="hero"><h1>{info.title}</h1><p>{info.description}</p><p>Эта страница является Server Component и подключает отдельный Client Component со счётчиком.</p><Counter/></section></main>}
