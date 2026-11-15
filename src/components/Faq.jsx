import { faqs } from '../data/content'

export default function Faq() {
  return (
    <section id="preguntas" className="faq" aria-labelledby="faq-title">
      <div className="faq__head">
        <h2 id="faq-title" className="head reveal">Preguntas</h2>
        <img
          className="faq__photo"
          src="/img/dumbbells-floor.jpg"
          alt="Mancuernas con discos sobre el piso de un gimnasio"
          width="1600"
          height="1067"
          loading="lazy"
        />
      </div>
      {faqs.map((item) => (
        <div key={item.q} className="faq__band">
          <div className="grid">
            <h3 className="faq__q reveal">{item.q}</h3>
            <p className="faq__a reveal">{item.a}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
