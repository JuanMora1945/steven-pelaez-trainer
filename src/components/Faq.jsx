import { faqs } from '../data/content'

export default function Faq() {
  return (
    <section id="preguntas" className="faq" aria-labelledby="faq-title">
      <div className="section-head">
        <h2 id="faq-title" className="head reveal">Preguntas</h2>
      </div>
      <div className="faq__list">
        {faqs.map((item) => (
          <div key={item.q} className="faq__item reveal">
            <h3 className="faq__q">{item.q}</h3>
            <p className="faq__a">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
